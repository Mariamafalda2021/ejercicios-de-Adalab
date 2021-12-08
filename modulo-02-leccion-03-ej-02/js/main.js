const alumName = "maria";
const saludo = document.querySelector(".saludo");
const nombre = document.querySelector(".nombre");


if (alumName === "maria" || alumName === "alicia") {
    nombre.innerHTML = alumName;
}
else {
    saludo.innerHTML = "Lo siento pero el usuario que has introducido no está registrado";
}

