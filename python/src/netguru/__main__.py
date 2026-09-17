import sys

from netguru import create_app
from netguru.export import publish_hostinger_root


def main() -> None:
    if len(sys.argv) > 1 and sys.argv[1] == "export":
        dest = publish_hostinger_root()
        print(f"Hostinger files ready at: {dest}")
        print("Push this branch; Hostinger Git deploy must see index.html at the repo root.")
        return

    app = create_app()
    app.run(host="127.0.0.1", port=5000, debug=True)


if __name__ == "__main__":
    main()
