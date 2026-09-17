"""Net Guru Online Services website."""

from pathlib import Path

from flask import Flask, render_template

__version__ = "0.1.0"

PACKAGE_DIR = Path(__file__).resolve().parent

GALLERY = [
    {
        "file": "shop-front.jpg",
        "alt": "Net Guru Online Services shop front with MP Online board",
        "caption": "Shop front",
    },
    {
        "file": "counters.jpg",
        "alt": "Service counters inside Net Guru Online Services",
        "caption": "Service counters",
    },
    {
        "file": "workspace.jpg",
        "alt": "Staff working at computers in the centre",
        "caption": "Working desks",
    },
    {
        "file": "waiting-area.jpg",
        "alt": "Waiting area inside the centre",
        "caption": "Waiting area",
    },
    {
        "file": "contact-window.jpg",
        "alt": "Window with contact number, email and service rates",
        "caption": "Contact and rates",
    },
    {
        "file": "entrance.jpg",
        "alt": "Entrance of Net Guru Online Services",
        "caption": "Entrance",
    },
    {
        "file": "private-desk.jpg",
        "alt": "Dedicated desk with laptop and printer",
        "caption": "Assistance desk",
    },
    {
        "file": "print-station.jpg",
        "alt": "Printing and lamination station",
        "caption": "Print station",
    },
]


def create_app() -> Flask:
    app = Flask(
        __name__,
        template_folder=str(PACKAGE_DIR / "templates"),
        static_folder=str(PACKAGE_DIR / "static"),
    )

    @app.route("/")
    def home():
        return render_template("index.html", gallery=GALLERY)

    return app


def greet(name: str = "Netguru") -> str:
    return f"Hello from {name}!"
