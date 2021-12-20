'use strict';

const textInput = document.querySelector(".input");
const textOutput = document.querySelector(".text");

function handlerInput(event) {
    textOutput.innerHTML = event.currentTarget.value;
}
textInput.addEventListener("keyup", handlerInput);