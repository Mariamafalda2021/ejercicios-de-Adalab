const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

function handlerOle() {
    text.innerHTML = `Mi primer click, ¡ole yo y la mujer que me parió!`;
}

btn.addEventListener("click", handlerOle);