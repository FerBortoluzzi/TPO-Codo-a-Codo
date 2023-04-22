let boton = document.getElementById("videoBtn");
let video = document.getElementById("video-home");
let hamburger = document.getElementsByClassName("hamburguer");
let sidebar = document.getElementById("mySidebar");
let closeBtn = document.getElementsByClassName("closeSidebarBtn");

function pauseVideo() {
  if (video.paused) {
    video.play();
    boton.innerHTML = "pausar";
  } else {
      video.pause();
      boton.innerHTML = "play";
  }
}

function openSidebar() {
  sidebar.style.width = "250px";
}

function closeSidebar() {
  sidebar.style.width = "0";
}