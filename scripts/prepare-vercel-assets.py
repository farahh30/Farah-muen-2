from pathlib import Path
from PIL import Image

SOURCE = Path("/home/ubuntu/webdev-static-assets")
DESTINATION = Path("/home/ubuntu/farah-muen-portfolio/client/public/images")
DESTINATION.mkdir(parents=True, exist_ok=True)

ASSETS = {
    "baladna-hero.png": ("baladna-hero.webp", 1800, "WEBP"),
    "baladna-device-art.png": ("baladna-device-art.webp", 1400, "WEBP"),
    "baladna-map-art.png": ("baladna-map-art.webp", 1400, "WEBP"),
    "farah-profile.jpeg": ("farah-profile.webp", 1000, "WEBP"),
    "farah-mark.png": ("farah-mark.png", 512, "PNG"),
}

for source_name, (output_name, max_width, fmt) in ASSETS.items():
    source_path = SOURCE / source_name
    output_path = DESTINATION / output_name
    with Image.open(source_path) as image:
        image = image.convert("RGBA") if fmt == "PNG" else image.convert("RGB")
        if image.width > max_width:
            ratio = max_width / image.width
            image = image.resize((max_width, round(image.height * ratio)), Image.Resampling.LANCZOS)
        if fmt == "WEBP":
            image.save(output_path, "WEBP", quality=86, method=6)
        else:
            image.save(output_path, "PNG", optimize=True)
    print(f"Created {output_path.name}: {output_path.stat().st_size} bytes")
