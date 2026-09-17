"""Export a static site Hostinger can serve from public_html."""

from __future__ import annotations

import shutil
from pathlib import Path

from netguru import PACKAGE_DIR, create_app

HTACCESS = """DirectoryIndex index.html
Options -Indexes
"""


def export_static(dest: Path | None = None) -> Path:
    dest = dest or (PACKAGE_DIR.parents[1] / "public")
    if dest.exists():
        shutil.rmtree(dest)
    dest.mkdir(parents=True)

    shutil.copytree(PACKAGE_DIR / "static", dest / "static")

    app = create_app()
    with app.test_client() as client:
        html = client.get("/").get_data(as_text=True)

    html = (
        html.replace('href="/static/', 'href="static/')
        .replace('src="/static/', 'src="static/')
        .replace('data-full="/static/', 'data-full="static/')
    )
    (dest / "index.html").write_text(html, encoding="utf-8")
    (dest / ".htaccess").write_text(HTACCESS, encoding="utf-8")
    return dest
