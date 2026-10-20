"""Create lightweight WebP assets while keeping the original screenshots."""

from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1] / "public" / "projects"


def save_webp(image: Image.Image, destination: Path, quality: int = 78) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    image.convert("RGB").save(destination, "WEBP", quality=quality, method=4)


def run() -> None:
    originals = [
        source
        for source in ROOT.rglob("*")
        if source.suffix.lower() in {".png", ".jpg", ".jpeg"}
    ]
    original_bytes = sum(source.stat().st_size for source in originals)
    generated_bytes = 0

    for source in originals:
        with Image.open(source) as original:
            image = ImageOps.exif_transpose(original)
            destination = source.with_suffix(".webp")

            if source.parent.name == "thumbnail":
                # Cards only show the start of these tall website captures.
                output = ImageOps.fit(image, (800, 500), centering=(0.5, 0))
                save_webp(output, destination, quality=80)
            else:
                output = image.copy()
                if output.width > 1600:
                    output.thumbnail((1600, 30000), Image.Resampling.LANCZOS)
                save_webp(output, destination)

                if source.parent.name == "images":
                    preview = ImageOps.fit(
                        image, (1200, 640), centering=(0.5, 0)
                    )
                    save_webp(
                        preview,
                        ROOT / "previews" / destination.name,
                        quality=80,
                    )
                    generated_bytes += (
                        ROOT / "previews" / destination.name
                    ).stat().st_size

            generated_bytes += destination.stat().st_size

    print(
        f"Optimized {len(originals)} source images: "
        f"{original_bytes / 1_000_000:.1f} MB originals -> "
        f"{generated_bytes / 1_000_000:.1f} MB WebP assets "
        "(including detail previews)."
    )


if __name__ == "__main__":
    run()
