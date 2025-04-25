const pregunta1 = document.getElementById("faq1");
const pregunta2 = document.getElementById("faq2");
const pregunta3 = document.getElementById("faq3");

const respuesta1 = document.querySelector("#answer1");
const respuesta2 = document.querySelector("#answer2");
const respuesta3 = document.querySelector("#answer3");

pregunta1.addEventListener("click", function() {
    mostrarRespuesta(1);
});
pregunta2.addEventListener("click", function() {
    mostrarRespuesta(2);
});
pregunta3.addEventListener("click", function() {
    mostrarRespuesta(3);
});

function mostrarRespuesta(numero) {
    const respuesta = document.getElementById(`answer${numero}`);
    respuesta.classList.toggle("active");
}


