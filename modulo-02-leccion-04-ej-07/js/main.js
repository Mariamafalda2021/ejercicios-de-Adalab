'use strict';

function getEl(selector) {
    return document.querySelector(selector);
}


function pares(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const textEl = getEl(".text").innerHTML;
const numero = parseInt(textEl);

if (parseInt(numero) === true) {
    console.log('este número es PAR:' + numero)
} else {
    console.log('Este número es IMPAR:' + numero);
}