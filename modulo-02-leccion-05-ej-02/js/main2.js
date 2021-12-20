'use strict';

const nombre = document.querySelector(".name");

const btn = document.querySelector(".button");

function handlerBtn() {
    console.log(nombre.value);
}

btn.addEventListener("click", handlerBtn);

