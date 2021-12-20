'use strict';

const texto = document.querySelector(".text");

const texto2 = document.querySelector(".text2");

function handlerRaton() {
    texto2.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar magna sed elementum
    molestie. Aenean dictum vestibulum ipsum, at volutpat nibh sagittis sit amet. Duis eu neque id erat eleifend
    vulputate. Fusce egestas vel risus nec efficitur.`;
}


texto.addEventListener("mouseover", handlerRaton);