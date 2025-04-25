const pregunta1 = document.getElementById("faq1");
const pregunta2 = document.getElementById("faq2");
const pregunta3 = document.getElementById("faq3");

const respuesta1 = document.getElementById("answer1");
const respuesta2 = document.getElementById("answer2");
const respuesta3 = document.getElementById("answer3");

pregunta1.addEventListener("click", mostrarRespuesta(1));
pregunta2.addEventListener("click", function() {
    mostrarRespuesta(2);
});
pregunta3.addEventListener("click", function() {
    mostrarRespuesta(3);
});

function mostrarRespuesta(numero) {
    respuesta.classList.toggle("active");
}


