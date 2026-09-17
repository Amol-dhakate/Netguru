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
    assert "shop-front.jpg" in html
    assert "97555 28162" in html
