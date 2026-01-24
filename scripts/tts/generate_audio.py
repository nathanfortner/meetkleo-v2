#!/usr/bin/env python3
"""
TTS Audio Generation Script for Kleo Website
Uses ElevenLabs API to generate audio files and uploads to S3

Usage:
    # Activate virtual environment first
    source scripts/tts/venv/bin/activate

    # Generate audio for a word
    python scripts/tts/generate_audio.py generate "jalapeño" es

    # Generate with specific voice
    python scripts/tts/generate_audio.py generate "ciao" it <voice_id>
"""

import os
import sys
import json
import uuid
import requests
import subprocess
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env file
env_paths = [
    Path(__file__).parent.parent.parent / '.env',
    Path.cwd() / '.env',
    Path('/Users/nathanfortner/Documents/Code/WHS_WEB/.env')
]
for env_path in env_paths:
    if env_path.exists():
        load_dotenv(env_path)
        break

ELEVENLABS_API_KEY = os.getenv('ELEVENLABS_API_KEY')
BASE_URL = "https://api.elevenlabs.io/v1"

# Language code mapping (ISO 639-1)
LANGUAGE_CODES = {
    'es': 'es',  # Spanish
    'it': 'it',  # Italian
    'uk': 'uk',  # Ukrainian
    'de': 'de',  # German
}

# S3 bucket configuration
S3_BUCKET = "kleo-prod"
S3_PATHS = {
    'es': 'audio/en_nt_es/phrase',
    'it': 'audio/en_nt_it/phrase',
    'uk': 'audio/en_nt_uk/phrase',
    'de': 'audio/en_nt_de/phrase',
}

CDN_BASE = "https://ddseu0ssi.mo.cloudinary.net/audio"

# Default voice ID - Rachel (multilingual capable)
DEFAULT_VOICE_ID = "21m00Tcm4TlvDq8ikWAM"

def generate_speech(text, voice_id, language_code=None, model_id="eleven_multilingual_v2"):
    """
    Generate speech from text using ElevenLabs API

    Args:
        text: The text to convert to speech
        voice_id: The voice ID to use
        language_code: ISO 639-1 language code (e.g., 'es' for Spanish)
        model_id: The model to use

    Returns:
        Audio data as bytes
    """
    headers = {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
    }

    data = {
        "text": text,
        "model_id": model_id,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }

    # Add language code if provided
    if language_code:
        data["language_code"] = language_code

    response = requests.post(
        f"{BASE_URL}/text-to-speech/{voice_id}",
        headers=headers,
        json=data
    )

    if response.status_code != 200:
        raise Exception(f"TTS API error: {response.status_code} - {response.text}")

    return response.content

def upload_to_s3(audio_data, language, filename):
    """
    Upload audio file to S3 bucket

    Args:
        audio_data: Audio file content as bytes
        language: Language code (es, it, uk, de)
        filename: Filename (should be {uuid}_0.mp3)

    Returns:
        S3 path of uploaded file
    """
    s3_path = f"s3://{S3_BUCKET}/{S3_PATHS[language]}/{filename}"

    # Write to temp file first
    temp_file = f"/tmp/{filename}"
    with open(temp_file, 'wb') as f:
        f.write(audio_data)

    # Upload using AWS CLI
    result = subprocess.run(
        ["aws", "s3", "cp", temp_file, s3_path],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        raise Exception(f"S3 upload failed: {result.stderr}")

    # Clean up temp file
    os.remove(temp_file)

    return s3_path

def generate_and_upload(text, language, voice_id=None):
    """
    Generate audio from text and upload to S3

    Args:
        text: Word or phrase to generate
        language: Language code (es, it, uk)
        voice_id: Optional voice ID (will use default if not provided)

    Returns:
        dict with uuid, filename, and s3_path
    """
    # Generate a UUID for the filename
    file_uuid = str(uuid.uuid4())
    filename = f"{file_uuid}_0.mp3"

    if voice_id is None:
        voice_id = DEFAULT_VOICE_ID

    print(f"Generating audio for '{text}' in {language}...")

    # Generate the speech
    audio_data = generate_speech(
        text=text,
        voice_id=voice_id,
        language_code=LANGUAGE_CODES.get(language),
        model_id="eleven_multilingual_v2"
    )

    print(f"Generated {len(audio_data)} bytes of audio")

    # Upload to S3
    s3_path = upload_to_s3(audio_data, language, filename)
    print(f"Uploaded to {s3_path}")

    # Build CDN URL
    lang_path = S3_PATHS[language].replace('audio/', '')
    cdn_url = f"{CDN_BASE}/{lang_path}/{filename}"

    return {
        "text": text,
        "language": language,
        "uuid": file_uuid,
        "filename": filename,
        "s3_path": s3_path,
        "cdn_url": cdn_url
    }

def batch_generate(words_file, language):
    """
    Generate audio for multiple words from a file

    Args:
        words_file: Path to file with one word/phrase per line
        language: Language code
    """
    results = []
    with open(words_file, 'r', encoding='utf-8') as f:
        words = [line.strip() for line in f if line.strip()]

    for word in words:
        try:
            result = generate_and_upload(word, language)
            results.append(result)
            print(f"  ✓ {word}: {result['filename']}")
        except Exception as e:
            print(f"  ✗ {word}: {e}")
            results.append({"text": word, "error": str(e)})

    return results

if __name__ == "__main__":
    if not ELEVENLABS_API_KEY:
        print("Error: ELEVENLABS_API_KEY not found in environment")
        sys.exit(1)

    if len(sys.argv) < 2:
        print("Usage:")
        print("  python generate_audio.py generate <text> <language> [voice_id]")
        print("  python generate_audio.py batch <words_file> <language>")
        print("")
        print("Languages: es (Spanish), it (Italian), uk (Ukrainian), de (German)")
        print("")
        print("Examples:")
        print('  python generate_audio.py generate "jalapeño" es')
        print('  python generate_audio.py batch missing_words.txt es')
        sys.exit(1)

    command = sys.argv[1]

    if command == "generate":
        if len(sys.argv) < 4:
            print("Usage: python generate_audio.py generate <text> <language> [voice_id]")
            sys.exit(1)

        text = sys.argv[2]
        language = sys.argv[3]
        voice_id = sys.argv[4] if len(sys.argv) > 4 else None

        if language not in LANGUAGE_CODES:
            print(f"Error: Unknown language '{language}'. Use: {', '.join(LANGUAGE_CODES.keys())}")
            sys.exit(1)

        result = generate_and_upload(text, language, voice_id)
        print("\nResult:")
        print(json.dumps(result, indent=2))
        print(f"\nUse this in Kaudio component:")
        print(f"  pid={{'{result['filename']}'}}")

    elif command == "batch":
        if len(sys.argv) < 4:
            print("Usage: python generate_audio.py batch <words_file> <language>")
            sys.exit(1)

        words_file = sys.argv[2]
        language = sys.argv[3]

        if language not in LANGUAGE_CODES:
            print(f"Error: Unknown language '{language}'. Use: {', '.join(LANGUAGE_CODES.keys())}")
            sys.exit(1)

        results = batch_generate(words_file, language)

        # Save results to JSON
        output_file = f"generated_{language}_{Path(words_file).stem}.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(results, indent=2, fp=f, ensure_ascii=False)
        print(f"\nResults saved to {output_file}")

    else:
        print(f"Unknown command: {command}")
        sys.exit(1)
