let boton = document.getElementById("videoBtn");
let video = document.getElementById("video-home");

function pauseVideo() {
  if (video.paused) {
    video.play();
    boton.innerHTML = "pausar";
  } else {
      video.pause();
      boton.innerHTML = "play";
  }
}
