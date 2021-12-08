const perro = document.querySelector(".perro");
const humano = document.querySelector(".humano");

const añoPerro = 0;
let añoHumano;

if (añoPerro === 0) {
    añoHumano = 'es un bebé';
} else if (añoPerro === 1) {
    añoHumano = 15;
} else if (añoPerro === 2) {
    añoHumano = 15 + 9;
} else if (añoPerro > 2) {
    añoHumano = 15 + 9 + (añoPerro - 2) * 5;
} else if (añoPerro < 0) {
    añoHumano = 'no ha nacido aún';
}

perro.innerHTML = añoPerro;
humano.innerHTML = añoHumano;

