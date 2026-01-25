#!/usr/bin/env python3
"""
Thumbnail Generator using Google Gemini (Nano Banana)

Uses extracted video frames as reference to generate polished article thumbnails.

Usage:
    python generate_thumbnail.py INPUT_IMAGE OUTPUT_IMAGE [--prompt PROMPT] [--aspect RATIO]

Examples:
    python generate_thumbnail.py frame.jpg thumbnail.jpg
    python generate_thumbnail.py frame.jpg thumbnail.jpg --prompt "friendly language tutor"
    python generate_thumbnail.py frame.jpg thumbnail.jpg --aspect 16:9
"""

import argparse
import os
import sys
import base64
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

from google import genai
from google.genai import types
from PIL import Image
import io


# Default safe prompt template following best practices
DEFAULT_PROMPT_TEMPLATE = """
Create a professional, polished thumbnail image based on this reference photo.

Style guidelines:
- Keep the person's likeness, expression, and overall appearance
- Use a clean, simple background (soft gradient or solid color)
- Professional lighting, warm and inviting
- High quality, suitable for a blog article thumbnail
- No text, words, letters, or symbols
- No flags, maps, or cultural symbols
- Portrait orientation, focus on face and upper body

The person should look friendly and approachable, like a language tutor welcoming students.
"""

# Light enhancement prompt - keeps the original scene mostly intact
ENHANCE_PROMPT_TEMPLATE = """
Lightly enhance this photo for use as a blog thumbnail:
- Improve lighting and color balance
- Sharpen slightly for clarity
- Keep the original scene, composition, and people exactly as they are
- Do not change faces, expressions, or poses
- Do not add or remove anything
- Just make it look more polished and professional
"""


def load_image_as_base64(image_path: str) -> tuple[str, str]:
    """Load an image and return base64 data and mime type."""
    path = Path(image_path)

    # Determine mime type
    suffix = path.suffix.lower()
    mime_types = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.webp': 'image/webp',
        '.gif': 'image/gif',
    }
    mime_type = mime_types.get(suffix, 'image/jpeg')

    with open(path, 'rb') as f:
        image_data = f.read()

    return base64.standard_b64encode(image_data).decode('utf-8'), mime_type


def generate_thumbnail(
    input_image: str,
    output_image: str,
    prompt: str = None,
    aspect_ratio: str = "9:16",
    model: str = "gemini-2.5-flash-preview-05-20"
):
    """
    Generate a polished thumbnail using Gemini/Nano Banana.

    Args:
        input_image: Path to reference image
        output_image: Path for output image
        prompt: Custom prompt (uses default if None)
        aspect_ratio: Image aspect ratio (default 9:16 for portrait)
        model: Gemini model to use
    """
    # Get API key
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key:
        print("Error: GEMINI_API_KEY not found in environment")
        print("Add it to your .env file: GEMINI_API_KEY=your_key_here")
        sys.exit(1)

    # Initialize client
    client = genai.Client(api_key=api_key)

    # Load reference image
    print(f"Loading reference image: {input_image}")
    image_data, mime_type = load_image_as_base64(input_image)

    # Build prompt
    full_prompt = prompt if prompt else DEFAULT_PROMPT_TEMPLATE

    print(f"Using model: {model}")
    print(f"Aspect ratio: {aspect_ratio}")
    print(f"Generating thumbnail...")

    try:
        # Create the request with image reference
        response = client.models.generate_content(
            model=model,
            contents=[
                types.Part.from_bytes(
                    data=base64.standard_b64decode(image_data),
                    mime_type=mime_type
                ),
                full_prompt
            ],
            config=types.GenerateContentConfig(
                response_modalities=['TEXT', 'IMAGE'],
            )
        )

        # Extract and save the generated image
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                # Save the image
                image_bytes = part.inline_data.data

                # Determine output format
                output_path = Path(output_image)

                # Save using PIL for format conversion if needed
                img = Image.open(io.BytesIO(image_bytes))
                img.save(output_path)

                print(f"Thumbnail saved: {output_path}")
                print(f"Size: {img.size}")
                return str(output_path)

        # If no image was generated, print the text response
        print("No image generated. Response:")
        for part in response.candidates[0].content.parts:
            if part.text:
                print(part.text)
        return None

    except Exception as e:
        print(f"Error generating image: {e}")
        raise


def main():
    parser = argparse.ArgumentParser(
        description="Generate polished thumbnails using Gemini/Nano Banana",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )

    parser.add_argument("input", help="Input reference image path")
    parser.add_argument("output", help="Output thumbnail path")
    parser.add_argument("--prompt", "-p", help="Custom prompt for generation")
    parser.add_argument("--aspect", "-a", default="9:16",
                       help="Aspect ratio (default: 9:16)")
    parser.add_argument("--model", "-m", default="gemini-2.5-flash-preview-05-20",
                       help="Gemini model to use")

    args = parser.parse_args()

    if not os.path.exists(args.input):
        print(f"Error: Input file not found: {args.input}")
        sys.exit(1)

    result = generate_thumbnail(
        args.input,
        args.output,
        args.prompt,
        args.aspect,
        args.model
    )

    if result:
        print(f"\nSuccess! Generated: {result}")
    else:
        print("\nFailed to generate thumbnail")
        sys.exit(1)


if __name__ == "__main__":
    main()
