from pathlib import Path

from netguru import create_app, greet
from netguru.export import export_static, publish_hostinger_root


def test_greet_default() -> None:
    assert greet() == "Hello from Netguru!"


def test_greet_custom_name() -> None:
    assert greet("Python") == "Hello from Python!"


def test_home_page_renders_gallery() -> None:
    app = create_app()
    client = app.test_client()
    response = client.get("/")
    assert response.status_code == 200
    html = response.get_data(as_text=True)
    assert "NET GURU" in html
    assert "netguruonline.com" in html
    assert "header-sign.jpg" in html
    assert "Shop by icon" not in html
    assert "services-grid.jpg" not in html
    assert "shop-photocopy.png" in html
    assert "shop-exam-counselling.png" in html
    assert "placeholder" in html
    assert "9755588862" in html
    assert "Shop services" in html
    assert "Enquire on WhatsApp" in html
    assert "Add to cart" not in html
    assert "wa.me/919755588862?text=" in html
    assert "data-open-cart" not in html
    assert "Photocopy" in html


def test_static_export_for_hostinger(tmp_path: Path) -> None:
    dest = export_static(tmp_path / "public")
    html = (dest / "index.html").read_text(encoding="utf-8")
    assert 'href="static/css/style.css"' in html
    assert 'src="static/images/header-sign.jpg"' in html
    assert (dest / "static" / "images" / "header-sign.jpg").is_file()
    assert (dest / "static" / "images" / "shop-photocopy.png").is_file()
    assert "DirectoryIndex index.html" in (dest / ".htaccess").read_text(encoding="utf-8")


def test_hostinger_root_has_index(tmp_path: Path) -> None:
    repo = tmp_path / "repo"
    repo.mkdir()
    publish_hostinger_root(repo)
    assert (repo / "index.html").is_file()
    assert (repo / "static" / "css" / "style.css").is_file()
    assert "DirectoryIndex index.html" in (repo / ".htaccess").read_text(encoding="utf-8")


