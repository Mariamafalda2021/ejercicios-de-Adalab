
function workWithMovies() {
    const movies = ["Little Miss Sunshine", "Juno", "Arrival"];

    /*console.log(movies);
    ['Little Miss Sunshine', 'Juno', 'Arrival']*/

    movies.push("El Laberinto");
    /*console.log(movies);
    ['Little Miss Sunshine', 'Juno', 'Arrival', 'El Laberinto']*/

    movies[3] = "Boyhood";
    /*console.log(movies);
    ['Little Miss Sunshine', 'Juno', 'Arrival', 'Boyhood']*/

    movies[1] = "El Laberinto";

}
