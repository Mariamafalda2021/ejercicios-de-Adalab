'use strict';

let ingredient = 'pollo';

// aquí tu código en ternario
/*
if (ingredient === 'Pollo') {
    console.log('Tu ingrediente es pollo. Puedes freirte un filete con patatas');
} else if (ingredient === 'Merluza') {
    console.log('Tu ingrediente es merluza. Puedes hacerte una merlucita en salsa verde');
} else if (ingredient === 'Espinacas') {
    console.log('Tu ingrediente es espinacas. Puedes hacerte unas espinacas rehogadas');
} else {
    console.log('Nada en la nevera');
}
*/

// aquí tu código con switch

switch (ingredient) {
    case 'pollo':
        console.log('Tu ingrediente es pollo. Puedes freirte un filete con patatas');
        break;
    case 'merluza':
        console.log('Tu ingrediente es merluza. Puedes hacerte una merlucita en salsa verde');
        break;
    case 'espinacas':
        console.log('Tu ingrediente es espinacas. Puedes hacerte unas espinacas rehogadas');
        break;
    default:
        console.log('Nada en la nevera');
}