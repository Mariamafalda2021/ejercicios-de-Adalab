'use strict';

const fondoAmarillo = document.querySelector(".js-fondoAmarillo");
const happyFace = document.querySelector(".js-happyFace");
const sadFace = document.querySelector(".js-sadFace");
const chooseOption = document.querySelector(".js-chooseOption");
const updateButton = document.querySelector(".update")



function paintFace() {
    console.log("click");
    if (chooseOption.value === "happy") {
        happyFace.classList.remove("hidden")
        sadFace.classList.add("hidden");
    } else {
        happyFace.classList.add("hidden")
        sadFace.classList.remove("hidden");
    }
}

function getRandom(max) {
    return Math.ceil(Math.random() * max);
}

function changeBackground() {
    const randomNum = getRandom(100);
    if (randomNum % 2 === 0) {
        fondoAmarillo.classList.remove("chileanOrange");
        fondoAmarillo.classList.add("correctYellow");
    } else {
        fondoAmarillo.classList.remove("correctYellow");
        fondoAmarillo.classList.add("chileanOrange");
    }
}

function handlerUpdateState(event) {
    event.preventDefault();
    paintFace();
    changeBackground();
}
updateButton.addEventListener("click", handlerUpdateState);