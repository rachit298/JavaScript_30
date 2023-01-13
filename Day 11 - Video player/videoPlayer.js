const video = document.querySelector("#video1");

const playPause = document.querySelector(".play-pause-btn");
const backwardBtn = document.querySelector(".backward");
const forwardBtn = document.querySelector(".forward");
const fullscreen = document.querySelector(".fullscreen");

const vol = document.querySelector(".volume-slider");
const speed = document.querySelector(".speed-slider");
const totalDuration = document.querySelector(".total-duration");

playPause.addEventListener("click", playpause);

backwardBtn.addEventListener("click", () => (video.currentTime -= 10));

forwardBtn.addEventListener("click", () => (video.currentTime += 25));

vol.addEventListener("input", () => (video.volume = vol.value));

speed.addEventListener("input", () => (video.playbackRate = speed.value));

totalDuration.addEventListener("input", () => {
  video.currentTime = totalDuration.value;
});

setInterval(() => {
  totalDuration.value = video.currentTime;
}, 1000);

video.addEventListener("click", playpause);

function playpause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

fullscreen.addEventListener("click", fullscreenChange);

function fullscreenChange() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

video.addEventListener("dblclick", closefull);

function closefull() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

window.onload = function () {
  totalDuration.max = video.duration;
  vol.value = 1;
  speed.value = 1;
};
