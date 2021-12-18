'use strict';

const container = document.querySelector(".container");
const title = document.querySelector(".title");
const message = document.querySelector(".message");

if (container.classList.contains("warning")) {
    title.innerHTML = 'AVISO';
    message.innerHTML = 'Tenga cuidado';
} else if (container.classList.contains("error")) {
    title.innerHTML = 'ERROR';
    message.innerHTML = 'Ha surgido un error';
} else if (container.classList.contains("success")) {
    title.innerHTML = 'CORRECTO';
    message.innerHTML = 'Los datos son correctos';
}