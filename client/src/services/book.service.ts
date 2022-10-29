import { ApiService } from "./api.service";
import {Book} from "../models/Books";
import {BooksBySections} from "../models/BooksInSections";

export class BookService {
    BASE_URL = 'books/';
 
    constructor(private api: ApiService){}

    recupererLivresDesSections(userId:number) : Promise<Partial<BooksBySections[]>> {
        return this.api.get('/books/allBooksbysection',userId);
    }

    recupererLivresDesAuteurs(userId:number) : Promise<Partial<any>> {
        return this.api.get('/books/allBooksbyAuthor',userId);
    }
    recupererLivresDesGenres(isbn:string) : Promise<Partial<any>> {
        return this.api.get('/books/book',isbn);
    }

    enregistrerLivre(book:Book) : Promise<any> {
        return this.api.post('/books/book',book);
    }

}