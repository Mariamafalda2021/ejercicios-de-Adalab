'use strict';
const saludo = document.querySelector(".saludo");

const adalaberName = 'Maria';

if (adalaberName === 'Maria' || adalaberName === 'Alicia') {
    saludo.innerHTML = `Bienvenida ${adalaberName}`;
} else {
    saludo.innerHTML = `Lo siento pero el usuario que has introducido no está registrado`;
}