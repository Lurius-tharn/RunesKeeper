import {Genre} from "./Genre";

export interface BookSynthesis{
    subtitle:string;
    publisher:string;
    nb_pages:number;
    published_date:string;
    author:string;
    genre:Genre;
    thumbnail:string;
    isbn:string;
}
