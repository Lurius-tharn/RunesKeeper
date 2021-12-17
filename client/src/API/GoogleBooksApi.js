const API_TOKEN = ""

export function getFilmsFromApiWithSearchedText (text) {
    //const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    const url = 'https://www.googleapis.com/books/v1/volumes?q='+ text+'&key=' + API_TOKEN  
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function getImageFromapi(name)