'use strict;'

function ticket(precio) {
    return `Precio sin IVA : ${precio}€, IVA: ${precio * 0.21}€, y Total: ${precio + precio * 0.21}€`;
}

console.log(ticket(10));