const ACCESS_KEY = "OX89mBdXuJxVJT6MBbJpY-OYA7k9DHg0_Bb92L5dqDk"

export const getImages = async (query) => {
    console.log(query);
    const imagesURLS = []
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=4`)
    const data = await response.json()
    if(data.results.length === 4) {
        data.results.map(image => {
            imagesURLS.push(image.urls.regular)
        })
        return imagesURLS
    } else {
        console.log("No se han encontrado imagenes");
        return null;
    }
}