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
    assert "Net Guru" in html
    assert "netguruonline.com" in html
    assert "netguru-logo.jpg" in html
    assert "header-sign.jpg" not in html
    assert "Shop by icon" not in html
    assert "services-grid.jpg" not in html
    assert "shop-photocopy.png" in html
    assert "shop-exam-counselling.png" in html
    assert "placeholder" in html
    assert "9755588862" in html
    assert "Our Services" in html
    assert "Shop services" not in html
    assert "Enquire on WhatsApp" in html
    assert "Message on WhatsApp" not in html
    assert "Shop now" not in html
    assert "AI Assist" in html
    assert "WhatsApp chat assistant" not in html
    assert 'name="first_name"' in html
    assert 'name="last_name"' in html
    assert 'name="mobile"' in html
    assert 'name="enquiry_type"' in html
    assert 'name="query"' in html
    assert "data-enquire-open" in html
    assert "data-chat-suggest" in html
    assert "Enquiry type" not in html
    assert "Enquiry time" not in html
    assert 'id="enquire-form"' in html
    assert "Add to cart" not in html
    assert 'href="https://wa.me/919755588862?text=' in html
    assert "data-open-cart" not in html
    assert "Photocopy" in html
    assert "class=\"price\"" not in html
    assert "₹2 per page" not in html
    assert "₹10 per page" not in html
    assert "shop-front.jpg" in html
    assert "counters.jpg" in html
    assert "data-hero-slider" in html
    assert 'id="gallery"' not in html
    assert "<h2>Gallery</h2>" not in html
    assert 'width=device-width' in html
    assert "viewport-fit=cover" in html


def test_static_export_for_hostinger(tmp_path: Path) -> None:
    dest = export_static(tmp_path / "public")
    html = (dest / "index.html").read_text(encoding="utf-8")
    assert 'href="static/css/style.css"' in html
    assert 'src="static/images/netguru-logo.jpg"' in html
    assert (dest / "static" / "images" / "netguru-logo.jpg").is_file()
    assert (dest / "static" / "images" / "shop-photocopy.png").is_file()
    assert "DirectoryIndex index.html" in (dest / ".htaccess").read_text(encoding="utf-8")


def test_hostinger_root_has_index(tmp_path: Path) -> None:
    repo = tmp_path / "repo"
    repo.mkdir()
    publish_hostinger_root(repo)
    assert (repo / "index.html").is_file()
    assert (repo / "static" / "css" / "style.css").is_file()
    assert "DirectoryIndex index.html" in (repo / ".htaccess").read_text(encoding="utf-8")


