'use strict';

const fondoAmarillo = document.querySelector(".js-fondoAmarillo");
const happyFace = document.querySelector(".js-happyFace");
const sadFace = document.querySelector(".js-sadFace");
const chooseOption = document.querySelector(".js-chooseOption");
const updateButton = document.querySelector(".update")

/*function handlerChangeOption() {
    console.log("cambio");
}*/

function handlerUpdateState() {
    console.log("click");
    if (chooseOption.value === "happy") {
        happyFace.classList.remove("hidden")
        sadFace.classList.add("hidden");
    } else {
        happyFace.classList.add("hidden")
        sadFace.classList.remove("hidden");
    }
}

/*chooseOption.addEventListener("change", handlerChangeOption);*/

updateButton.addEventListener("click", handlerUpdateState);