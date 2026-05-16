// MENU HAMBURGUESA

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// EFECTO NAVBAR SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }

});

// VALIDACION FORMULARIO

const formulario = document.getElementById("formReserva");

formulario.addEventListener("submit", (e) => {

  e.preventDefault();

  limpiarErrores();

  let valido = true;

  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const personas = document.getElementById("personas");

  // VALIDAR NOMBRE

  if(nombre.value.trim() === ""){
    mostrarError(nombre, "El nombre es obligatorio");
    valido = false;
  }

  // VALIDAR EMAIL

  const regexEmail =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(email.value.trim() === ""){
    mostrarError(email, "El correo es obligatorio");
    valido = false;

  }else if(!regexEmail.test(email.value)){
    mostrarError(email, "Correo electrónico inválido");
    valido = false;
  }

  // VALIDAR PERSONAS

  if(personas.value === "" || personas.value <= 0){
    mostrarError(personas, "Ingrese una cantidad válida");
    valido = false;
  }

  // EXITO

  if(valido){

    document.getElementById("mensajeExito").textContent =
    "✅ Reserva enviada correctamente";

    formulario.reset();
  }

});

// MOSTRAR ERRORES

function mostrarError(input, mensaje){

  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");

  error.textContent = mensaje;
}

// LIMPIAR ERRORES

function limpiarErrores(){

  const errores = document.querySelectorAll(".error");

  errores.forEach(error => {
    error.textContent = "";
  });

  document.getElementById("mensajeExito").textContent = "";
}