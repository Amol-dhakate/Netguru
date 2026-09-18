const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");
const whatsappNumber = document.body.dataset.whatsapp || "919755588862";
const KEY = "netguru-cart";

document.querySelectorAll(".gallery-item").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) {
      return;
    }
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.querySelector("img")?.alt || "";
    lightboxCaption.textContent = button.dataset.caption || "";
    lightbox.showModal();
  });
});

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(KEY, JSON.stringify(cart));
  renderCart();
}

function addItem(id, name, price) {
  const cart = loadCart();
  const found = cart.find((row) => row.id === id);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({
      id,
      name,
      qty: 1,
      price: price === "" || price === undefined ? null : Number(price),
    });
  }
  saveCart(cart);
  openCart();
}

function changeQty(id, delta) {
  const cart = loadCart()
    .map((row) => (row.id === id ? { ...row, qty: row.qty + delta } : row))
    .filter((row) => row.qty > 0);
  saveCart(cart);
}

function pricedTotal(cart) {
  return cart.reduce((sum, row) => {
    if (row.price === null || Number.isNaN(row.price)) {
      return sum;
    }
    return sum + row.price * row.qty;
  }, 0);
}

function renderCart() {
  const cart = loadCart();
  const list = document.querySelector("[data-cart-list]");
  const count = document.querySelector("[data-cart-count]");
  const total = document.querySelector("[data-cart-total]");
  const checkout = document.querySelector("[data-checkout]");
  if (count) {
    count.textContent = String(cart.reduce((n, row) => n + row.qty, 0));
  }
  if (total) {
    total.textContent = String(pricedTotal(cart));
  }
  if (list) {
    list.innerHTML = cart.length
      ? cart
          .map(
            (row) => `<div class="cart-line">
              <span>${row.name} × ${row.qty}</span>
              <span>${row.price === null || Number.isNaN(row.price) ? "Quote" : "₹" + row.price * row.qty}</span>
              <span>
                <button type="button" data-qty="${row.id}" data-delta="-1">−</button>
                <button type="button" data-qty="${row.id}" data-delta="1">+</button>
              </span>
            </div>`
          )
          .join("")
      : "<p>Cart is empty.</p>";
  }
  if (checkout) {
    const lines = cart.map((row) => `- ${row.name} x ${row.qty}`);
    const message = encodeURIComponent(
      `Namaste Net Guru, I want to order:\n${lines.join("\n")}\nTotal (priced items): ₹${pricedTotal(cart)}`
    );
    checkout.href = `https://wa.me/${whatsappNumber}?text=${message}`;
    checkout.style.pointerEvents = cart.length ? "auto" : "none";
    checkout.style.opacity = cart.length ? "1" : "0.5";
  }
}

function openCart() {
  document.querySelector("#cart")?.removeAttribute("hidden");
  document.querySelector(".cart-mask")?.removeAttribute("hidden");
}

function closeCart() {
  document.querySelector("#cart")?.setAttribute("hidden", "");
  document.querySelector(".cart-mask")?.setAttribute("hidden", "");
}

function setFilter(category) {
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.classList.toggle("is-on", chip.dataset.filter === category);
  });
  document.querySelectorAll(".product").forEach((card) => {
    const show = category === "all" || card.dataset.category === category;
    card.classList.toggle("is-hidden", !show);
  });
}

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => {
    addItem(button.dataset.id, button.dataset.name, button.dataset.price);
  });
});

document.querySelector("[data-cart-list]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-qty]");
  if (!button) {
    return;
  }
  changeQty(button.dataset.qty, Number(button.dataset.delta));
});

document.querySelectorAll("[data-open-cart]").forEach((el) => el.addEventListener("click", openCart));
document.querySelectorAll("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCart));

document.querySelectorAll("[data-filter]").forEach((chip) => {
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});

document.querySelectorAll("[data-jump]").forEach((link) => {
  link.addEventListener("click", () => {
    setFilter(link.dataset.jump);
  });
});

renderCart();
