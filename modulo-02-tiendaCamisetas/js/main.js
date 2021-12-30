'use strict';


//CREAR UN ARRAY PARA GUARDAR LOS DATOS API

let products = [];//si no los guardamos en una variable, desaparecerían y no podríamos volver a usarlos.
let cart = [];


//CREAMOS UNA FUNCION PARA RECOGER LOS DATOS

const getApiData = () => {
    fetch('./api/data.json')//servidor local, ruta relativa
        .then(response => response.json())
        .then(data => {
            products = data.cart.items;
            paintProducts();
        });
};


//PINTAMOS LOS PRODUCTOS

const productsElement = document.querySelector('.js-products');

const getProductHtmlCode = (product) => {
    let htmlCode = `<article class="card">`;
    htmlCode += `<img src="${product.imageUrl}" class="card__img" alt="Camiseta de ${product.name}" >`
    htmlCode += `<h3 class="card__title">${product.name}</h3>`
    htmlCode += `<p class="card__description">${product.price} €</p>`
    htmlCode += `<button class="js-add-product card__btn" data-id="${product.id}">Añadir a la cesta</button>`
    htmlCode += `</article>`;
    return htmlCode;
}

const paintProducts = () => {
    /*const product1 = getProductHtmlCode('Node Js', 12.5, './images/node-js.jpg');//lo que pasamos en primera posición por aquí, va a pasar en primera posicion en la función getProductHtmlCode
    const product2 = getProductHtmlCode('JavaScript', 13, './images/javascript.jpg');
    const product3 = getProductHtmlCode('React JS', 16, './images/react.jpg');
    cardsElement.innerHTML = product1 + product2 + product3;*/
    let productsCode = '';
    for (const product of products) {
        productsCode += getProductHtmlCode(product);
    }
    productsElement.innerHTML = productsCode;
    listenAddProductsBtns();
};

// EVENTOS A ESCUCHAR

//declaramos esta variable: const productsBtns = document.querySelectorAll('.js-add-product');

//el fetch tarda unos milisegundos en devolver lo que ha buscado y pintarlo, por lo que cuando creamos esta variable y la logueamos no vamos a ver nada, por ello hay que meterla despues de cuando sepamos que se han pintado los productos, es decir, despues del productsElment.innerHTML

//para que quede mas limpio al meterla detras del innerHTML, vamos a meterla en una funcion:

const listenAddProductsBtns = () => {
    const productsBtns = document.querySelectorAll('.js-add-product');
    for (const productBtn of productsBtns) {
        productBtn.addEventListener('click', incProduct)
    }
};

const incProduct = ev => {
    console.log(ev.target.dataset.id);//aquí ya solo me aparece en consola el id, porque es lo que le he indicado

    //Obtengo el id del producto clicado
    const clickedId = ev.target.dataset.id;//lo metemos en una variable para que quede + limpio

    //Miro si el producto ya está dentro de la cesta
    let foundItem;
    for (const item of cart) {//buscamos el item en el cesto de la compra
        if (item.id === clickedId) {
            foundItem = item;
        }
    }
    //si no está en la cesta lo añadimos:
    if (foundItem === undefined) {
        //Busco el producto clicado
        let foundProduct;//declaramos una variable pq no sabemos usar la propiedad find, lo hacemos con el for
        for (const product of products) {//buscamos en el array de productos si el id coincide
            if (product.id === clickedId) {
                foundProduct = product;
            }
        }
        //Añado el producto al carrito
        cart.push({  // cart será un array que contenga un objeto con un id, name etc para el carrito
            id: foundProduct.id,
            name: foundProduct.name,
            price: foundProduct.price,
            quantity: 1
        });
        // si sí está en la cesta, lo incrementamos:
    } else {
        foundItem.quantity += 1;
    }
    setInLocalStorage();
    paintCartItems();//recordar que hay que pintarla cada vez que se añada un producto
}

const decProduct = ev => {
    console.log(ev.target.dataset.id);

    //Obtengo el id del producto de la cesta
    const clickedId = ev.target.dataset.id;//lo metemos en una variable para que quede + limpio

    //Miro si el producto ya está dentro de la cesta
    let foundItem;
    for (const item of cart) {//buscamos el item en el cesto de la compra
        if (item.id === clickedId) {
            foundItem = item;
        }
    }
    //Compruebo si tengo más de una unidad del producto
    if (foundItem.quantity > 1) {
        foundItem.quantity -= 1;
    }
    else {
        //buscar la posicion del elemento clicado en cart 
        let foundIndex;
        for (let index = 0; index < cart.length; index += 1) {
            if (cart[index].id === clickedId) {
                foundIndex = index;
            }
        }
        //Borrar el elemento que está en esa posición
        cart.splice(foundIndex, 1);
    }
    setInLocalStorage();
    paintCartItems();
}

//gracias al evento puedo identificar qué botón se ha clicado, para tener una identificación mas específica debemos incluir un atributo como por ejemplo data-id que recogerá el product.id.

//PINTAR EL CARRO DE LA COMPRA

const cartElement = document.querySelector('.js-cart');

const getCartItemHtmlCode = item => {
    let htmlCode = ''; //lo dejamos vacio para que cada vez que se añada un item se pinte de nuevo
    htmlCode += `<tr>`;
    htmlCode += `  <td>${item.name}</td>`;
    htmlCode += `  <td>${item.price}</td>`;
    htmlCode += `  <td>`;
    htmlCode += `    <button class="js-dec-btn card__btn" data-id="${item.id}">-</button>`;
    htmlCode += `    ${item.quantity}`;
    htmlCode += `    <button class="js-inc-btn card__btn" data-id="${item.id}">+</button>`;
    htmlCode += `  </td>`;
    htmlCode += `  <td class="text-align-right">${item.price * item.quantity}€</td>`;
    htmlCode += `</tr>`;
    return htmlCode;
};
const getCartTotalHtmlCode = () => {
    let htmlCode = '';
    htmlCode += `<tr class="text--bold">`;
    htmlCode += `  <td>Total</td>`;
    htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
    htmlCode += `</tr>`;
    return htmlCode;
};

const getTotalPrice = () => {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }
    return total;
};
const paintCartItems = () => {
    cartElement.innerHTML = '';
    for (const item of cart) {
        cartElement.innerHTML += getCartItemHtmlCode(item);
    }
    cartElement.innerHTML += getCartTotalHtmlCode();
    listenCartBtns();
};

//ESCUCHAR LOS BOTONES DEL CARRITO

//Incrementar
const listenCartBtns = () => {
    const cartIncBtns = document.querySelectorAll('.js-inc-btn');
    for (const cartIncBtn of cartIncBtns) {
        cartIncBtn.addEventListener('click', incProduct);
    }
    //Decrementar
    const cartDecBtns = document.querySelectorAll('.js-dec-btn');
    for (const cartDecBtn of cartDecBtns) {
        cartDecBtn.addEventListener('click', decProduct);
    }

};

//REVISAR EL LOCAL STORAGE

const getFromLocalStorage = () => {
    const localStorageCart = localStorage.getItem('cart');
    if (localStorageCart !== null) {//incluimos este if para asegurarnos de que es la primera vez o no que se visita la página, y si no lo es, y el carrito no está vacío entonces:
        cart = JSON.parse(localStorageCart);
        paintCartItems();
    }
};

//GUARDAR EN LOCAL STORAGE

const setInLocalStorage = () => {
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyCart);
};


//EJECUTAR LA FUNCION
getApiData();
paintCartItems();