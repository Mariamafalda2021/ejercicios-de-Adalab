'use strict'

const main = document.querySelector(".js-main");

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    }
];

function render() {
    main.innerHTML = "";
    for (let index = 0; index < tasks.length; index++) {
        console.log(tasks[index]);
        if (tasks[index].completed) {
            main.innerHTML += `<li class ="completed"><input id=${index}`
        }
    }
}

/*
function render() {
    main.innerHTML = "";
    for (const dataItem of tasks) {
        console.log(dataItem);
        if (dataItem.completed) {
            main.innerHTML += `<li class="completed">${dataItem.name}<input class="js-input" type="checkbox" checked> </li>`;
        } else {
            main.innerHTML += `<li>${dataItem.name}<input class="js-input" type="checkbox"></li>`;
        }
    }
    const allInput = document.querySelectorAll(".js-input");
    for (const eachInput of allInput) {
        eachInput.addEventListener("click", handleClickTask);
    }
}
*/
function handleClickTask(event) {
    event.preventDefault();
    console.log(event.currentTarget.parentNode);
    event.currentTarget.parentNode.classList.toggle("completed");

}
render();
/*
for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].completed) {
        main.innerHTML += `<li class="completed">${tasks[index].name}</li>`;
    } else {
        main.innerHTML += `<li>${tasks[index].name}</li>`;
    }
}
*/
