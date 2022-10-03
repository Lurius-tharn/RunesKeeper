import { ApiService } from "./api.service";

export class BookService {
    BASE_URL = 'books/';
 
    constructor(private api: ApiService){}

    recupererLivresDesSections(userId:number) : Promise<Partial<any>> {
        return this.api.get('allBooksInSections',userId);
    }
}