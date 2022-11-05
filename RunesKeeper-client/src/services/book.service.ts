import { ApiService } from "./api.service";
import {Book} from "../models/Books";
import {BooksInSection} from "../models/BooksInSection";
import {BooksInAuthor} from "../models/BooksInAuthor";
import {Keeper} from "../models/Keeper";

export class BookService {
    BASE_URL = 'books';

    constructor(private api: ApiService){}

    recupererLivresDesSections(userId:number) : Promise<Partial<BooksInSection[]>> {
        return this.api.get(this.BASE_URL+`/allBooksbysection/${userId}`);
    }

    recupererLivresDesAuteurs(userId:number) : Promise<Partial<BooksInAuthor[]>> {
        return this.api.get(this.BASE_URL+'/allBooksbyAuthor',userId);
    }
    recupererLivresDesGenres(isbn:string) : Promise<Partial<any>> {
        return this.api.get(this.BASE_URL+'/book',isbn);
    }

    recupererLivreDansSections(userId:number, isbn: string): Promise<Partial<any>> {
        return  this.api.get(this.BASE_URL + `/book/${isbn}/${userId}`)
    }

    enregistrerLivre(book:Keeper) : Promise<any> {
        // Plusieurs regles de gestion: si le livre existe déja en base, on l'ajoute pas, juste la section avec le keeper
        return this.api.post(this.BASE_URL+'/book',book);
    }

}

export const bookService: BookService = new BookService(new ApiService());
