const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [2, 4, 4, 5, 5, 10];
// Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
let acc = 0;
// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < numbers2.length; i++) {
    acc = acc + numbers2[i];
}
/*console.log('La puntuación final es ' + acc / 5);*/

function average(numbers2) {
    console.log("La puntuación final es " + acc / numbers2.length);

}

