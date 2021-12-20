'use strict';

const body = document.querySelector(".body");

const windowScroll = window.scrollY;

function handlerColores() {
    if (body.classList.contains('background--1')); {
        body.classList.remove('background--1');
    }
    if (body.classList.contains('background--2')); {
        body.classList.remove('background--2');
    }
    if (body.classList.contains('background--3')); {
        body.classList.remove('background--3');
    }
    if (body.classList.contains('background--4')); {
        body.classList.remove('background--4');
    }
    if (body.classList.contains('background--5')); {
        body.classList.remove('background--5');
    }
    if (windowScroll < 250) {
        body.classList.add('background--1');
    } else if (windowScroll > 250) {
        body.classList.add('background--2');
    }
}

window.addEventListener("scroll", handlerColores);