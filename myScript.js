const pregunta1 = document.getElementById("faq1");
const pregunta2 = document.getElementById("faq2");
const pregunta3 = document.getElementById("faq3");

const respuesta1 = document.querySelector("#answer1");
const respuesta2 = document.querySelector("#answer2");
const respuesta3 = document.querySelector("#answer3");

pregunta1.addEventListener("click", mostrarRespuesta1);
pregunta2.addEventListener("click", mostrarRespuesta2);
pregunta3.addEventListener("click", mostrarRespuesta3);

function mostrarRespuesta1() {
    respuesta1.classList.toggle("active");
}

function mostrarRespuesta2() {
    respuesta2.classList.toggle("active");
}

function mostrarRespuesta3() {
    respuesta3.classList.toggle("active");
}


