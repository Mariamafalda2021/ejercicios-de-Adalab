'use strict';

const btn = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");

function handlerClick(event) {
    event.currentTarget.classList.toggle('button--fuchsia');

}

btn.addEventListener("click", handlerClick);
btn2.addEventListener("click", handlerClick);