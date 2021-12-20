'use strict';

const btn = document.querySelector(".button");

function handlerClick(event) {
    btn.classList.toggle('button--tomato');
    /*event.currentTarget.classList.toggle('button--tomato');*/

}

btn.addEventListener("click", handlerClick);