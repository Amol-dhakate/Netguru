import sys

from netguru import create_app
from netguru.export import export_static


def main() -> None:
    if len(sys.argv) > 1 and sys.argv[1] == "export":
        dest = export_static()
        print(f"Hostinger files ready: {dest}")
        print("Upload everything inside that folder to public_html.")
        return

    app = create_app()
    app.run(host="127.0.0.1", port=5000, debug=True)


if __name__ == "__main__":
    main()
