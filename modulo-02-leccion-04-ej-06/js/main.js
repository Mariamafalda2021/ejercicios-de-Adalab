'use strict';

function getEl(selector) {
    const element = document.querySelector(selector);
    if (element === null) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }
    return element;
}

const titleEl = getEl(."title");
if (titleEl) {
    console.log(titleEl.innerHTML)
}
