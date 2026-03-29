"""Compress hotel photos for web use"""
import os, shutil
from pathlib import Path

SRC = Path(r"C:\Users\MSI\Downloads\Чалама отель\Чалама отель\Photos")
DST = Path(r"C:\Users\MSI\Desktop\ООО Чалама\img")
DST.mkdir(exist_ok=True)

# Select ~30 representative photos (evenly spaced from the 114)
all_photos = sorted(SRC.glob("*.jpg"))
print(f"Found {len(all_photos)} photos")

# Pick every 3rd-4th photo for variety
selected = all_photos[::3][:30]
print(f"Selected {len(selected)} photos")

try:
    from PIL import Image
    for i, photo in enumerate(selected):
        out = DST / photo.name
        img = Image.open(photo)
        # Resize to max 1200px wide, maintain aspect ratio
        img.thumbnail((1200, 800), Image.LANCZOS)
        img.save(out, "JPEG", quality=75, optimize=True)
        size_kb = out.stat().st_size // 1024
        print(f"  [{i+1}/{len(selected)}] {photo.name} -> {size_kb} KB")
    print("\nDone! Photos compressed and saved to img/")
except ImportError:
    print("Pillow not installed. Copying originals...")
    for i, photo in enumerate(selected):
        shutil.copy2(photo, DST / photo.name)
        print(f"  [{i+1}/{len(selected)}] {photo.name} copied")
    print("\nDone! Install Pillow for compression: pip install Pillow")
