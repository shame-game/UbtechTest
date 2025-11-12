import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

domain_pattern = re.compile(
    r"https?:[\\/]+(?:www\.)?ubtechvietnam\.com(?P<path>[^\"'\s),>\]]+)",
    re.IGNORECASE,
)

TEXT_EXTENSIONS = {
    ".html",
    ".htm",
    ".css",
    ".js",
    ".json",
    ".xml",
    ".txt",
    ".php",
    ".svg",
    ".md",
}

SKIP_DIRS = {".git", "node_modules", "vendor", "dist", "build"}


def compute_relative(current: Path, destination: Path) -> str:
    rel = os.path.relpath(destination, start=current)
    return rel.replace("\\", "/")


def replace_domains(file_path: Path) -> bool:
    try:
        data = file_path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        try:
            data = file_path.read_text(encoding="latin-1")
        except UnicodeDecodeError:
            return False

    modified = False

    def _replacer(match: re.Match) -> str:
        nonlocal modified
        raw_path = match.group("path")
        uses_escape = "\\/" in raw_path

        clean_path = raw_path.replace("\\/", "/")
        suffix = ""
        for sep in ("?", "#"):
            if sep in clean_path:
                clean_path, rest = clean_path.split(sep, 1)
                suffix = f"{sep}{rest}"
                break

        clean_path = clean_path.lstrip("/\\")
        target = ROOT / clean_path
        rel = compute_relative(file_path.parent, target)
        modified = True

        replacement = rel + suffix
        if uses_escape:
            replacement = replacement.replace("/", "\\/")
        return replacement

    new_data = domain_pattern.sub(_replacer, data)

    if modified:
        file_path.write_text(new_data, encoding="utf-8")
    return modified


def main() -> None:
    changed_files = []
    for item in ROOT.rglob("*"):
        if item.is_dir():
            if any(part in SKIP_DIRS for part in item.parts):
                continue
            continue
        if item.suffix.lower() not in TEXT_EXTENSIONS:
            continue
        if any(part in SKIP_DIRS for part in item.parts):
            continue
        if replace_domains(item):
            changed_files.append(item.relative_to(ROOT))

    for path in changed_files:
        print(path)


if __name__ == "__main__":
    main()
