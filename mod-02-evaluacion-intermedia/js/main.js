//Elementos del HTML
const moveInput = document.querySelector('.ja-moveInput')
const resultInput = document.querySelector('.hs-resultado')
const playerInput = document.querySelector('.js-playerInput');
const computerInput = document.querySelector('.computerInput');

//Variables globales
let playerScore = 0;
let computerScore = 0;


//Funciones

//1.Numero random
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
//2.Generar la jugada aleatorioa del ordenador
function generarJugadaAleatoria() {
    let number = getRandomNumber(9);
    let moveComputer = '';
    if (number <= 3) {
        moveComputer = 'piedra';
    } else if (number <= 6) {
        moveComputer = 'papel';
    } else {
        moveComputer = 'tijera';
    }
    return moveComputer;
}
//3.Obtener la jugada de la usuaria
function obtenerJugadaUsuaria() {
    return moveInput.value
}

//4.Comparar jugadas y ver quién ha ganado
function compare() {
    let movecomputer = generarJugadaAleatoria;
    let movePlayer = obtenerJugadaUsuaria;

    if (moveComputer === movePlayer) {
        resultInput.innerHTML = 'Empate';
    } else if (movePlayer === 'piedra') {
        if (moveComputer === 'papel)') {
            resultInput.innerHTML = 'Has perdido';
            computerScore++;
        } else if (moveComputer === 'tijera') {
            resultInput.innerHTML = 'Has ganado';
            playerScore++;
        }

    } else if (movePlayer === 'tijera') {
        if (moveComputer === 'piedra') {
            resultInput.innerHTML = 'Has perdido';
            computerScore++;
        } else if (moveCOMPUTER === 'Papel') {
            resultInput.innerHTML = 'Has ganado';
            playerScore++;
        }

    } else if (movePlayer === 'papel') {
        if (moveComputer === 'tijera') {
            resultInput.innerHTML = 'Has perdido';
            computerScore++;
        } else if (moveCOMPUTER === 'piedra') {
            resultInput.innerHTML = 'Has ganado';
            playerScore++;
        }
    }
    computerInput.innerHTML = 'Ordenador: ' + computerScore;
    playerInput.innerHTML = 'Jugador: ' + playerScore++;
}
//5.Mostrar resultados:texto puntuacion


function handleClickPlayGame(ev) {
    ev.preventDefault();

}