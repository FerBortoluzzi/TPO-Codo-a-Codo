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
  sidebar.style.width = "15vw";
}

function closeSidebar() {
  sidebar.style.width = "0";
}

//Validacion para el formulario
function validateForm(){
  let nombre = document.forms['contactForm']['name'].value;
  if (nombre == '' || nombre.length < 1) {
    alert('Ingrese un NOMBRE válido');
    return false;
  }
  let email = document.forms['contactForm']['email'].value;
  let arroba = email.indexOf('@');
  let punto = email.lastIndexOf('.');
  if (arroba < 1 || punto < arroba + 2 || punto + 2 >= email.length) {
    alert('Ingrese un EMAIL válido');
    return false;
  }
  let comentario = document.forms['contactForm']['message'].value;
  if (comentario == ''){
    alert('No ha ingresado su comentario');
    return false;
  }
}

