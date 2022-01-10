
const bookInput = document.querySelector(".bookInput");
const buttonSubmit = document.querySelector(".buttonSubmit")
const answer = document.querySelector(".answer");


function handleEnviarLibro() {
    const favBooks = [bookInput.value];
    for (const books of favBooks) {
        console.log(`A mí también me encantó ${books}, tenemos mucho en común humana`);
    }
}


buttonSubmit.addEventListener("click", handleEnviarLibro);

