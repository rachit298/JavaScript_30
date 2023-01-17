const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, videoSeconds) => total + videoSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / (60 * 60));
secondsLeft = secondsLeft % (60 * 60);

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);
