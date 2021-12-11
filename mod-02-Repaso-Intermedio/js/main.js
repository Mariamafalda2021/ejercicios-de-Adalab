'use strict';

const fondoAmarillo = document.querySelector(".js-fondoAmarillo");

const happyFace = document.querySelector(".js-happyFace");
const sadFace = document.querySelector(".js-sadFace");

const chooseOption = document.querySelector(".js-chooseOption");

function opcionCambiada() {
    console.log("cambio");
}

chooseOption.addEventListener("change", opcionCambiada);
