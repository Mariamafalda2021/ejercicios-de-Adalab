/*const horasAño = 24 * 365;
const misAños = document.querySelector(".misAños");
const misHoras = horasAño * parseInt(misAños.innerHTML);
const lifeHours = document.querySelector(".lifeHours");
lifeHours.innerHTML = misHoras;*/


const horasAño = 24 * 365;
const misAños = document.querySelector(".misAños");
const lifeHours = document.querySelector(".lifeHours");

lifeHours.innerHTML = horasAño * parseInt(misAños.innerHTML);
