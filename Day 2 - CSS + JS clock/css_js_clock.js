const secondHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");
const hand = document.querySelector(".hand");

function setDate() {
  const day = new Date();
  const hours = day.getHours();
  const minutes = day.getMinutes();
  const seconds = day.getSeconds();

  if (seconds === 0) {
    secondHand.style.transition = "none";
  } else if (minutes === 0) {
    hourHand.style.transition = "none";
  } else if (hours === 0) {
    minHand.style.transition = "none";
  } else {
    hourHand.style.transition = "all 0.05s";
    minHand.style.transition = "all 0.05s";
    secondHand.style.transition = "all 0.05s";
  }

  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minuteDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
