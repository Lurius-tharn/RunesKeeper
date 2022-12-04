import { ApiService } from "./api.service";
import {BooksInSection} from "../models/BooksInSection";
import {BooksInAuthor} from "../models/BooksInAuthor";
import {Keeper} from "../models/Keeper";
import {BookWithLikedSections} from "../models/BookWithLikedSections";
import {Section} from "../models/Section";
import {Book} from "../models/Books";
import {User} from "../models/User";

export class BookService {
    BASE_URL = 'books';

    constructor(private api: ApiService){}

    recupererLivresDesSections(userId:number) : Promise<Partial<BooksInSection[]>> {
        return this.api.get(this.BASE_URL+`/allBooksbysection/${userId}`);
    }

    recupererLivresDesAuteurs(userId:number) : Promise<Partial<BooksInAuthor[]>> {
        return this.api.get(this.BASE_URL+`/allBooksbyAuthor/${userId}`,);
    }
    recupererLivresDesGenres(isbn:string) : Promise<Partial<any>> {
        return this.api.get(this.BASE_URL+'/book',isbn);
    }

    recupererLivreDansSections(userId:number, isbn: string): Promise<Partial<any>> {
        return  this.api.get(this.BASE_URL + `/book/${isbn}/${userId}`)
    }

    recupererLivreParIsbn(userId:number, isbn: string): Promise<BookWithLikedSections>{
        return  this.api.get(this.BASE_URL + `/book/${isbn}/${userId}`)
    }
    enregistrerLivre(book:Keeper) : Promise<any> {
        // Plusieurs regles de gestion: si le livre existe déja en base, on l'ajoute pas,
        return this.api.post(this.BASE_URL+'/book',book);
    }

    modifierSectionPourLivre(utilisateur: number, livre:Book,section:Section) : Promise<Partial<Section[]>> {
        const keeper :any = {
            section:section,
            user:utilisateur,
            book:livre
        }
        // Plusieurs regles de gestion: ajouter le keeper ET verifier des regles : un utilisateur ne peut pas avoir un meme livre dans la section 'jai' et 'je veux'
        // endpoint de modification, de suppression

        // rechercher l'ensemble des sections pour ce livre de cet utilisateur dans la table keeper
        // effectuer les regles de gestions pour la nouvelle section
        // si ca passe, rien, ajout
        // si une contrainte, alors on supprime l'ancien champ

        //nb : si l'user clique sur une section deja dans le champs, on la supprime
        return this.api.put(this.BASE_URL+`/keeper/`,keeper);
    }

}

export const bookService: BookService = new BookService(new ApiService());
