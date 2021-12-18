'use strict';



const elementList = document.querySelector(".item1");
const elementList2 = document.querySelector(".item2");
const title = document.querySelector(".title");

title.innerHTML = title.innerHTML + elementList2.innerHTML;
