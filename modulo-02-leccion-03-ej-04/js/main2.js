const dogData = document.querySelector(".dog");
const humanData = document.querySelector(".human")


const dogYears = '5';
let humanYears;


if (dogYears === '0') {
    humanYears = `Es un bebé`;
} else if (dogYears === '1') {
    humanYears = `15 años`;
} else if (dogYears === '2') {
    humanYears = 15 + 9;
} else if (dogYears > '2') {
    humanYears = 15 + 9 + (dogYears - '2') * 5;
}

dogData.innerHTML = dogYears;
humanData.innerHTML = humanYears;