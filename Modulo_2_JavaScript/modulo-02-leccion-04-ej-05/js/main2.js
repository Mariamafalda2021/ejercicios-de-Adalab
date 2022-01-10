'use strict';

function getEl(selector) {
    return document.querySelector(selector);
}

const btnEl = getEl(".btn");
console.log(btnEl);

const menuEl = getEl(".menu");
console.log(menuEl);

const titleEl = getEl(".title");
console.log(titleEl);

