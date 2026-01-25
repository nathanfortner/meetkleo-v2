#!/usr/bin/env python3
"""
Thumbnail Extraction Script for Kleo Videos

Extracts thumbnail images from lesson videos stored in AWS S3.
Uses FFmpeg to extract frames at specified timestamps.

Usage:
    python extract_thumbnails.py list [--lang LANG]
    python extract_thumbnails.py extract VIDEO_NAME [--timestamp TIME] [--output FILE]
    python extract_thumbnails.py batch [--lang LANG] [--timestamp TIME]
    python extract_thumbnails.py upload IMAGE_PATH [--name NAME]

Examples:
    python extract_thumbnails.py list --lang de
    python extract_thumbnails.py extract I11_S1_C1.mp4 --timestamp 00:00:05
    python extract_thumbnails.py extract I11_S1_C1.mp4 -t 5 -o my_thumbnail.jpg
    python extract_thumbnails.py batch --lang de --timestamp 3
    python extract_thumbnails.py upload thumbnail.jpg --name article-hero
"""

import argparse
import boto3
import os
import subprocess
import sys
import tempfile
from pathlib import Path
from datetime import datetime

# AWS Configuration
AWS_REGION = "us-east-2"

# Environment configurations
ENVIRONMENTS = {
    "dev": {
        "bucket": "kleo-dev",
        "cloudfront": "https://d14ecftbqpo8y9.cloudfront.net",
    },
    "staging": {
        "bucket": "kleo-staging",
        "cloudfront": "https://d1wccmadqdmt6c.cloudfront.net",
    },
    "prod": {
        "bucket": "kleo-prod",
        "cloudfront": "https://d302naonb9wq01.cloudfront.net",
    },
}

# Language folder mappings
LANGUAGE_FOLDERS = {
    "de": "en_nt_de",
    "es": "en_nt_es",
    "it": "en_nt_it",
    "uk": "en_nt_uk",
    "german": "en_nt_de",
    "spanish": "en_nt_es",
    "italian": "en_nt_it",
    "ukrainian": "en_nt_uk",
}

# Cloudinary configuration (same as used for other images)
CLOUDINARY_CLOUD = "ddseu0ssi"
CLOUDINARY_UPLOAD_PRESET = None  # Set if using unsigned uploads

# Output directory for extracted thumbnails
OUTPUT_DIR = Path(__file__).parent / "output"


def get_s3_client():
    """Create S3 client using default credentials."""
    return boto3.client("s3", region_name=AWS_REGION)


def format_timestamp(timestamp):
    """
    Convert timestamp to FFmpeg format.
    Accepts: "5", "5.5", "00:00:05", "00:01:30.5"
    Returns: "00:00:05.000" format
    """
    if isinstance(timestamp, (int, float)):
        # Convert seconds to HH:MM:SS.mmm
        total_seconds = float(timestamp)
        hours = int(total_seconds // 3600)
        minutes = int((total_seconds % 3600) // 60)
        seconds = total_seconds % 60
        return f"{hours:02d}:{minutes:02d}:{seconds:06.3f}"

    # Already in time format
    if ":" in str(timestamp):
        return str(timestamp)

    # Assume it's seconds
    return format_timestamp(float(timestamp))


def list_videos(env="dev", lang=None):
    """List available source videos in S3."""
    s3 = get_s3_client()
    bucket = ENVIRONMENTS[env]["bucket"]

    # Determine prefix
    if lang:
        folder = LANGUAGE_FOLDERS.get(lang.lower(), lang)
        prefix = f"video/input/{folder}/"
    else:
        prefix = "video/input/"

    print(f"\nListing videos in s3://{bucket}/{prefix}")
    print("=" * 60)

    try:
        paginator = s3.get_paginator("list_objects_v2")
        total_size = 0
        video_count = 0

        for page in paginator.paginate(Bucket=bucket, Prefix=prefix):
            for obj in page.get("Contents", []):
                key = obj["Key"]
                size = obj["Size"]

                # Skip empty objects and non-video files
                if size == 0 or not key.endswith((".mp4", ".m4v", ".mov")):
                    continue

                # Extract filename
                filename = key.split("/")[-1]
                size_mb = size / (1024 * 1024)
                total_size += size
                video_count += 1

                print(f"  {filename:<40} {size_mb:>8.1f} MB")

        print("=" * 60)
        print(f"Total: {video_count} videos, {total_size / (1024*1024*1024):.2f} GB")

    except Exception as e:
        print(f"Error listing videos: {e}")
        sys.exit(1)


def download_video(video_name, env="dev", lang="de"):
    """Download video from S3 to temp file."""
    s3 = get_s3_client()
    bucket = ENVIRONMENTS[env]["bucket"]
    folder = LANGUAGE_FOLDERS.get(lang.lower(), lang)

    # Construct S3 key
    s3_key = f"video/input/{folder}/{video_name}"

    # Create temp file
    suffix = Path(video_name).suffix or ".mp4"
    temp_file = tempfile.NamedTemporaryFile(suffix=suffix, delete=False)
    temp_path = temp_file.name
    temp_file.close()

    print(f"Downloading s3://{bucket}/{s3_key}...")

    try:
        s3.download_file(bucket, s3_key, temp_path)
        print(f"Downloaded to {temp_path}")
        return temp_path
    except Exception as e:
        print(f"Error downloading video: {e}")
        if os.path.exists(temp_path):
            os.unlink(temp_path)
        return None


def extract_thumbnail(video_path, timestamp="5", output_path=None, quality=2, original_name=None):
    """
    Extract a thumbnail from video using FFmpeg.

    Args:
        video_path: Path to video file
        timestamp: Time to extract frame (seconds or HH:MM:SS)
        output_path: Output file path (auto-generated if None)
        quality: JPEG quality (2-31, lower is better)
        original_name: Original video filename (for naming output if video_path is temp file)

    Returns:
        Path to extracted thumbnail or None on failure
    """
    # Check FFmpeg is available
    try:
        subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("Error: FFmpeg not found. Please install FFmpeg.")
        print("  brew install ffmpeg")
        sys.exit(1)

    # Generate output path if not provided
    if output_path is None:
        OUTPUT_DIR.mkdir(exist_ok=True)
        # Use original name if provided, otherwise use video_path
        video_name = Path(original_name).stem if original_name else Path(video_path).stem
        timestamp_str = str(timestamp).replace(":", "-").replace(".", "_")
        output_path = OUTPUT_DIR / f"{video_name}_t{timestamp_str}.jpg"

    output_path = Path(output_path)

    # Format timestamp
    ts = format_timestamp(timestamp)

    print(f"Extracting frame at {ts}...")

    # FFmpeg command (with pixel format conversion for 10-bit videos)
    cmd = [
        "ffmpeg",
        "-y",  # Overwrite output
        "-ss", ts,  # Seek to timestamp (before input for faster seeking)
        "-i", str(video_path),
        "-frames:v", "1",  # Extract one frame
        "-pix_fmt", "yuvj420p",  # Convert to full-range YUV for JPEG compatibility
        "-q:v", str(quality),  # JPEG quality
        str(output_path)
    ]

    try:
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"FFmpeg error: {result.stderr}")
            return None

        print(f"Saved thumbnail: {output_path}")
        return output_path

    except Exception as e:
        print(f"Error extracting thumbnail: {e}")
        return None


def extract_multiple_frames(video_path, timestamps, output_dir=None, original_name=None):
    """Extract multiple frames from a video."""
    if output_dir is None:
        output_dir = OUTPUT_DIR

    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)

    # Use original name if provided
    video_name = Path(original_name).stem if original_name else Path(video_path).stem
    results = []

    for ts in timestamps:
        # Round to 1 decimal place for cleaner filenames
        ts_rounded = round(float(ts), 1)
        ts_str = str(ts_rounded).replace(".", "_")
        output_path = output_dir / f"{video_name}_t{ts_str}s.jpg"
        result = extract_thumbnail(video_path, ts, output_path, original_name=original_name)
        if result:
            results.append(result)

    return results


def extract_video_thumbnail(video_name, env="dev", lang="de", timestamp="5", output=None):
    """Download video and extract thumbnail."""
    # Download video
    video_path = download_video(video_name, env, lang)
    if not video_path:
        return None

    try:
        # Extract thumbnail, passing original video name for proper output naming
        thumbnail_path = extract_thumbnail(video_path, timestamp, output, original_name=video_name)
        return thumbnail_path
    finally:
        # Clean up temp video file
        if os.path.exists(video_path):
            os.unlink(video_path)
            print(f"Cleaned up temp file")


def batch_extract(env="dev", lang="de", timestamp="5", limit=None):
    """Extract thumbnails from all videos in a language folder."""
    s3 = get_s3_client()
    bucket = ENVIRONMENTS[env]["bucket"]
    folder = LANGUAGE_FOLDERS.get(lang.lower(), lang)
    prefix = f"video/input/{folder}/"

    print(f"\nBatch extracting thumbnails from s3://{bucket}/{prefix}")
    print(f"Timestamp: {timestamp}s")
    print("=" * 60)

    # List videos
    videos = []
    paginator = s3.get_paginator("list_objects_v2")

    for page in paginator.paginate(Bucket=bucket, Prefix=prefix):
        for obj in page.get("Contents", []):
            key = obj["Key"]
            if obj["Size"] > 0 and key.endswith((".mp4", ".m4v", ".mov")):
                filename = key.split("/")[-1]
                videos.append(filename)

    if limit:
        videos = videos[:limit]

    print(f"Found {len(videos)} videos to process")
    print()

    results = []
    for i, video in enumerate(videos, 1):
        print(f"[{i}/{len(videos)}] Processing {video}...")
        result = extract_video_thumbnail(video, env, lang, timestamp)
        if result:
            results.append(result)
        print()

    print("=" * 60)
    print(f"Extracted {len(results)}/{len(videos)} thumbnails")
    print(f"Output directory: {OUTPUT_DIR}")

    return results


def get_video_duration(video_path):
    """Get video duration using FFprobe."""
    cmd = [
        "ffprobe",
        "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        str(video_path)
    ]

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return float(result.stdout.strip())
    except:
        return None


def preview_video(video_name, env="dev", lang="de", frames=5):
    """Extract multiple frames from video for preview/selection."""
    video_path = download_video(video_name, env, lang)
    if not video_path:
        return None

    try:
        # Get video duration
        duration = get_video_duration(video_path)
        if not duration:
            print("Could not determine video duration")
            return None

        print(f"Video duration: {duration:.1f}s")

        # Calculate timestamps (evenly spaced)
        timestamps = [duration * i / (frames + 1) for i in range(1, frames + 1)]

        print(f"Extracting {frames} preview frames...")
        results = extract_multiple_frames(video_path, timestamps, original_name=video_name)

        print(f"\nExtracted {len(results)} frames:")
        for path in results:
            print(f"  {path}")

        return results

    finally:
        if os.path.exists(video_path):
            os.unlink(video_path)


def main():
    parser = argparse.ArgumentParser(
        description="Extract thumbnails from Kleo lesson videos",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )

    subparsers = parser.add_subparsers(dest="command", help="Command to run")

    # List command
    list_parser = subparsers.add_parser("list", help="List available videos")
    list_parser.add_argument("--env", default="dev", choices=["dev", "staging", "prod"],
                            help="AWS environment (default: dev)")
    list_parser.add_argument("--lang", "-l", help="Language filter (de, es, it)")

    # Extract command
    extract_parser = subparsers.add_parser("extract", help="Extract thumbnail from video")
    extract_parser.add_argument("video", help="Video filename (e.g., I11_S1_C1.mp4)")
    extract_parser.add_argument("--env", default="dev", choices=["dev", "staging", "prod"],
                               help="AWS environment (default: dev)")
    extract_parser.add_argument("--lang", "-l", default="de", help="Language (default: de)")
    extract_parser.add_argument("--timestamp", "-t", default="5",
                               help="Timestamp to extract (seconds or HH:MM:SS, default: 5)")
    extract_parser.add_argument("--output", "-o", help="Output file path")

    # Preview command
    preview_parser = subparsers.add_parser("preview", help="Extract multiple preview frames")
    preview_parser.add_argument("video", help="Video filename")
    preview_parser.add_argument("--env", default="dev", choices=["dev", "staging", "prod"])
    preview_parser.add_argument("--lang", "-l", default="de")
    preview_parser.add_argument("--frames", "-n", type=int, default=5,
                               help="Number of frames to extract (default: 5)")

    # Batch command
    batch_parser = subparsers.add_parser("batch", help="Batch extract thumbnails")
    batch_parser.add_argument("--env", default="dev", choices=["dev", "staging", "prod"])
    batch_parser.add_argument("--lang", "-l", default="de")
    batch_parser.add_argument("--timestamp", "-t", default="5")
    batch_parser.add_argument("--limit", type=int, help="Limit number of videos")

    args = parser.parse_args()

    if args.command == "list":
        list_videos(args.env, args.lang)

    elif args.command == "extract":
        result = extract_video_thumbnail(
            args.video, args.env, args.lang, args.timestamp, args.output
        )
        if result:
            print(f"\nSuccess! Thumbnail saved to: {result}")
        else:
            sys.exit(1)

    elif args.command == "preview":
        results = preview_video(args.video, args.env, args.lang, args.frames)
        if not results:
            sys.exit(1)

    elif args.command == "batch":
        results = batch_extract(args.env, args.lang, args.timestamp, args.limit)
        if not results:
            sys.exit(1)

    else:
        parser.print_help()


if __name__ == "__main__":
    main()
