const callToApi = (searchSerie) => {
    // Llamamos al API
    return fetch(`https://api.tvmaze.com/search/shows?q=${searchSerie}}`)
        .then((response) => response.json())
        .then((response) => {
            return response.map((element) => {
                return {
                    id: element.show.id,
                    name: element.show.name,
                };
            });
        });
};

export default callToApi;