"""Net Guru Online Services website."""

from pathlib import Path
from urllib.parse import quote

from flask import Flask, render_template

__version__ = "0.1.0"

PACKAGE_DIR = Path(__file__).resolve().parent

PHONE = "9755588862"
WHATSAPP = "919755588862"

SERVICES = [
    {"label": "Online Form Filling"},
    {"label": "Free Guidance for Admission"},
    {"label": "Counselling Services"},
    {"label": "Nursing, BPharma & Medical Registration"},
    {"label": "Gumasta & MSME Registration"},
    {"label": "PAN Card & Aadhaar Card"},
    {"label": "Voter ID & Samagra ID"},
    {"label": "Scholarship Forms"},
    {"label": "All Government Forms"},
    {"label": "Photocopy & Printing"},
]

COUNSELLING = [
    "NEET UG",
    "JEE",
    "CLAT",
    "CMAT",
    "DTE",
    "CET UG/PG",
    "ePravesh",
    "Nursing",
    "AYUSH",
    "Veterinary",
    "BEd",
    "DED",
    "BA",
    "Holkar College",
    "Govt. College",
]

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
        "file": "entrance.jpg",
        "alt": "Entrance of Net Guru Online Services",
        "caption": "Entrance",
    },
    {
        "file": "contact-window.jpg",
        "alt": "Window with contact number, email and service rates",
        "caption": "Contact and rates",
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


def whatsapp_link(label: str) -> str:
    text = f"Namaste Net Guru, I need help with: {label}"
    return f"https://wa.me/{WHATSAPP}?text={quote(text)}"


def create_app() -> Flask:
    app = Flask(
        __name__,
        template_folder=str(PACKAGE_DIR / "templates"),
        static_folder=str(PACKAGE_DIR / "static"),
    )

    @app.route("/")
    def home():
        services = [{**item, "href": whatsapp_link(item["label"])} for item in SERVICES]
        return render_template(
            "index.html",
            gallery=GALLERY,
            services=services,
            counselling=COUNSELLING,
            phone=PHONE,
            whatsapp=f"https://wa.me/{WHATSAPP}",
        )

    return app


def greet(name: str = "Netguru") -> str:
    return f"Hello from {name}!"
