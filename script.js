const workItems = [...document.querySelectorAll(".work-item")];
const previewImage = document.querySelector("#preview-image");
const previewTitle = document.querySelector("#preview-title");
const previewMeta = document.querySelector("#preview-meta");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

function setActiveWork(item) {
  workItems.forEach((entry) => entry.classList.toggle("is-active", entry === item));

  const { title, year, place, image } = item.dataset;
  previewImage.src = image;
  previewImage.alt = `${title} 摄影项目预览`;
  previewTitle.textContent = title;
  previewMeta.textContent = `${place}, ${year}`;
}

workItems.forEach((item) => {
  item.addEventListener("mouseenter", () => setActiveWork(item));
  item.addEventListener("focusin", () => setActiveWork(item));
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
