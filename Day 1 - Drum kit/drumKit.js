document.addEventListener("keydown", function (event) {
  const upperCaseCode = event.key.toUpperCase();
  const audio = document.querySelector(`audio[data-key="${upperCaseCode}"]`);
  const key = document.querySelector(`.key[data-key="${upperCaseCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach((key) =>
  key.addEventListener("transitionend", function (event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
  })
);