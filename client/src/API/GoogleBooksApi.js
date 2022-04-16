const API_TOKEN = ""

const getGoogleBooksApiWithSearchedText  = (text) => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + text + '&key=' + API_TOKEN
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}


export default getGoogleBooksApiWithSearchedText(name)

