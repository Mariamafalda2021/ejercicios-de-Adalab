'use strict';

function bestLostNumber() {
    const lostNumbers = [4, 8, 15, 16, 23, 42];
    const pares = lostNumbers.filter((numero) => numero % 2 === 0);
    const multiploTres = lostNumbers.filter((numero) => numero % 3 === 0);

    return pares.concat(multiploTres);
}

const array = bestLostNumber();

for (const number of array) {
    console.log(number);
}