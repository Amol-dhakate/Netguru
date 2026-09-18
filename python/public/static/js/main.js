const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");

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

function setFilter(category) {
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.classList.toggle("is-on", chip.dataset.filter === category);
  });
  document.querySelectorAll(".product").forEach((card) => {
    const show = category === "all" || card.dataset.category === category;
    card.classList.toggle("is-hidden", !show);
  });
}

document.querySelectorAll("[data-filter]").forEach((chip) => {
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});
