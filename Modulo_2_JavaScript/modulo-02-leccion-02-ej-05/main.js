


const texto = document.querySelector(".lifeHours");
const horasDia = 24;
const diasAño = 365;
const miEdad = 33;

const horasVividas = (diasAño * horasDia) * miEdad;

texto.innerHTML = horasVividas;
