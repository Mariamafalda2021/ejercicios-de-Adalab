'use strict';
const liElement = document.querySelector('.item1');
const titleElement = document.querySelector('.title');
titleElement.innerHTML = titleElement.innerHTML + ' ' + liElement.innerHTML;