const API_TOKEN = ""

const getGoogleBooksApiWithSearchedText  = (text) => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + text + '&key=' + API_TOKEN
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}


/**
 * 
 * 
 *  intitle: Returns results where the text following this keyword is found in the title.
    inauthor: Returns results where the text following this keyword is found in the author.
    inpublisher: Returns results where the text following this keyword is found in the publisher.
    subject: Returns results where the text following this keyword is listed in the category list of the volume.
    isbn: Returns results where the text following this keyword is the ISBN number.
 * 
 * GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:hobb+isbn:11313131131331&key=yourAPIKey
 * 
 * 
 * orderBy = relevance
 * langRestrict:fr
 */

export default getGoogleBooksApiWithSearchedText(name)

