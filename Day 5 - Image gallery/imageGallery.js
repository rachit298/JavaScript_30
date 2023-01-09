const panel = document.querySelectorAll(".panel");

panel.forEach((p) => p.addEventListener("click", toggleOpen));

function toggleOpen() {
  this.classList.toggle("open");
}

panel.forEach((p) => p.addEventListener("transitionend", toggleActive));

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
