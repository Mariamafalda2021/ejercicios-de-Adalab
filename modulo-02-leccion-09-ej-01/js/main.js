'use strict';


function get100Numbers() {
    const numbers = [];
    for (let i = 0; i < 100; i++) {
        numbers.push(i + 1);
    }
    return numbers;
}

const numbersLog = get100Numbers();

for (const items of numbersLog) {
    console.log(items);
}