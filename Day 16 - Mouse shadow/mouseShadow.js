const container = document.querySelector(".container");
const text = document.querySelector(".head-text");
const walk = 100;

function shadow(event) {
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  let x = event.offsetX;
  let y = event.offsetY;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

container.addEventListener("mousemove", shadow);
