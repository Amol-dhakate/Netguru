"""Net Guru Online Services website."""

from pathlib import Path
from urllib.parse import quote

from flask import Flask, render_template

__version__ = "0.1.0"

PACKAGE_DIR = Path(__file__).resolve().parent

PHONE = "9755588862"
WHATSAPP = "919755588862"

SERVICES = [
    {"label": "Online Form Filling", "category": "forms"},
    {"label": "Free Guidance for Admission", "category": "counselling"},
    {"label": "Counselling Services", "category": "counselling"},
    {"label": "Nursing, BPharma & Medical Registration", "category": "forms"},
    {"label": "Gumasta & MSME Registration", "category": "forms"},
    {"label": "PAN Card & Aadhaar Card", "category": "ids"},
    {"label": "Voter ID & Samagra ID", "category": "ids"},
    {"label": "Scholarship Forms", "category": "forms"},
    {"label": "All Government Forms", "category": "forms"},
    {"label": "Photocopy & Printing", "category": "print"},
]

PRODUCTS = [
    {
        "id": "photocopy",
        "name": "Photocopy",
        "category": "print",
        "price": 2,
        "unit": "per page",
        "image": "print-station.jpg",
        "blurb": "Black & white copies at the counter.",
    },
    {
        "id": "printout",
        "name": "Colour / document print",
        "category": "print",
        "price": 10,
        "unit": "per page",
        "image": "workspace.jpg",
        "blurb": "Print forms, notes and documents.",
    },
    {
        "id": "admit-photo",
        "name": "Admit-card photo",
        "category": "print",
        "price": 10,
        "unit": "each",
        "image": "private-desk.jpg",
        "blurb": "Exam and admit-card size photos.",
    },
    {
        "id": "pvc-card",
        "name": "PVC card",
        "category": "ids",
        "price": 70,
        "unit": "each",
        "image": "contact-window.jpg",
        "blurb": "Printed PVC identity cards.",
    },
    {
        "id": "passport-photo",
        "name": "Passport photo",
        "category": "print",
        "price": None,
        "unit": "",
        "image": "counters.jpg",
        "blurb": "Passport-size photos, same day.",
    },
    {
        "id": "scan-email",
        "name": "Document scan & email",
        "category": "print",
        "price": None,
        "unit": "",
        "image": "workspace.jpg",
        "blurb": "Scan papers and send them by email.",
    },
    {
        "id": "online-form",
        "name": "Online form filling",
        "category": "forms",
        "price": None,
        "unit": "",
        "image": "workspace.jpg",
        "blurb": "We fill and submit your online form.",
    },
    {
        "id": "govt-forms",
        "name": "All government forms",
        "category": "forms",
        "price": None,
        "unit": "",
        "image": "shop-front.jpg",
        "blurb": "MP Online and other govt applications.",
    },
    {
        "id": "scholarship",
        "name": "Scholarship forms",
        "category": "forms",
        "price": None,
        "unit": "",
        "image": "waiting-area.jpg",
        "blurb": "Scholarship and student aid forms.",
    },
    {
        "id": "gumasta-msme",
        "name": "Gumasta / MSME registration",
        "category": "forms",
        "price": None,
        "unit": "",
        "image": "counters.jpg",
        "blurb": "Shop licence and MSME paperwork.",
    },
    {
        "id": "medical-reg",
        "name": "Nursing / BPharma registration",
        "category": "forms",
        "price": None,
        "unit": "",
        "image": "private-desk.jpg",
        "blurb": "Medical and pharmacy registrations.",
    },
    {
        "id": "pan-aadhaar",
        "name": "PAN & Aadhaar services",
        "category": "ids",
        "price": None,
        "unit": "",
        "image": "contact-window.jpg",
        "blurb": "PAN, Aadhaar update and related work.",
    },
    {
        "id": "voter-samagra",
        "name": "Voter ID & Samagra ID",
        "category": "ids",
        "price": None,
        "unit": "",
        "image": "entrance.jpg",
        "blurb": "Voter card and Samagra ID help.",
    },
    {
        "id": "counselling",
        "name": "Admission counselling",
        "category": "counselling",
        "price": 0,
        "unit": "guidance",
        "image": "waiting-area.jpg",
        "blurb": "Free guidance for college admissions.",
    },
    {
        "id": "exam-counselling",
        "name": "Exam counselling (NEET, JEE, CLAT…)",
        "category": "counselling",
        "price": None,
        "unit": "",
        "image": "counters.jpg",
        "blurb": "NEET, JEE, CLAT, CET, ePravesh and more.",
    },
]

CATEGORIES = [
    {"id": "all", "label": "All"},
    {"id": "print", "label": "Print & copy"},
    {"id": "ids", "label": "IDs & cards"},
    {"id": "forms", "label": "Forms"},
    {"id": "counselling", "label": "Counselling"},
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


def price_label(product: dict) -> str:
    if product["price"] is None:
        return "Get quote"
    if product["price"] == 0:
        return "Free guidance"
    extra = f" {product['unit']}" if product["unit"] else ""
    return f"₹{product['price']}{extra}"


def create_app() -> Flask:
    app = Flask(
        __name__,
        template_folder=str(PACKAGE_DIR / "templates"),
        static_folder=str(PACKAGE_DIR / "static"),
    )

    @app.route("/")
    def home():
        services = [
            {**item, "href": whatsapp_link(item["label"])} for item in SERVICES
        ]
        products = [
            {
                **item,
                "price_label": price_label(item),
                "price_value": "" if item["price"] is None else item["price"],
            }
            for item in PRODUCTS
        ]
        return render_template(
            "index.html",
            gallery=GALLERY,
            services=services,
            products=products,
            categories=CATEGORIES,
            counselling=COUNSELLING,
            phone=PHONE,
            whatsapp=f"https://wa.me/{WHATSAPP}",
            whatsapp_number=WHATSAPP,
        )

    return app


def greet(name: str = "Netguru") -> str:
    return f"Hello from {name}!"
