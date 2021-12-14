const adalabers = [
    {
        name: "María",
        age: 29,
        job: "diseñadora",
    },
    {
        name: "Lucía",
        age: 31,
        job: "ingeniera",
    },
    {
        name: "Susana",
        age: 34,
        job: "periodista",
    },
    {
        name: "Rocío",
        age: 25,
        job: "actriz",
    },
]
//Función que nos devuelva el número de adalabers en el listado
function countAdalabers(arrAdalabers) {
    const numAdalabers = arrAdalabers.length;
    return `El número total de adalabers es: ${numAdalabers}`
}
console.log(countAdalabers(adalabers));

//Función que devuelve la media de edad
function averageAge(arrAdalabers) {
    let media = 0;
    let num = 0;
    for (let i = 0; i < arrAdalabers.length; i++) {
        num += arrAdalabers[i].age;
        media = num / arrAdalabers.length;
    }
    return `La media de edad de las adalabers es: ${media}años`;
}
console.log(averageAge(adalabers));

//función que devuelve el nombre de la adalaber más joven.
function youngestOf(arrAdalabers) {
    let youngest = arrAdalabers[0].name;
    let ageRef = arrAdalabers[0].age;
    for (const student of arrAdalabers) {
        if (student.age < ageRef) {
            ageRef = student.age;
            youngest = student.name
        }
    }
    return `La adalaber más joven es: ${youngest}.`;
}
console.log(youngestOf(adalabers));

//Función uqe devuelve el número de adalabers que son diseñadoras

function countDesigners(arrAdalabers) {
    const designers = [];
    let num = 0;

    for (let i = 0; i < arrAdalabers.length; i++) {

        if (arrAdalabers[i].job === 'diseñadora') {
            designers[num] = arrAdalabers[i].name;
        }
    }
    return `Hay un total de ${designers.length} adalabers diseñadoras.`;
}
console.log(countDesigners(adalabers));