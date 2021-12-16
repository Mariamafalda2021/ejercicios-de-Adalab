'use strict';

function get100Numbers() {
    const numbers = [];
    for (let i = 0; i < 100; i++) {
        numbers.push(i + 1);
    }
    return numbers;
}


function getReversed100Numbers() {
    return get100Numbers().reverse();
}
const reverseNumbers = getReversed100Numbers();

for (const items of reverseNumbers) {
    console.log(items);
}