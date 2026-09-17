from netguru import create_app, greet


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
    assert "services-flyer.jpg" not in html
    assert "services-grid.jpg" in html
    assert "9755588862" in html
    assert "Online Form Filling" in html
    assert "wa.me/919755588862" in html
