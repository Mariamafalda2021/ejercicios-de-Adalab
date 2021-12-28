'use strict';

//Crear un array para guardar datos api
let products = [];

//crear funcion para recoger datos api

const getApiData = () => {
    fetch('//beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json')
        .then(response => response.json())
        .then(data => {
            products = data.cart.items;
        });
};

//Ejecutar función
getApiData();