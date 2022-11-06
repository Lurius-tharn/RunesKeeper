import {Genre} from "./Genre";

export interface Book {
    id_book: number,
    title: string;
    subtitle: string;
    publisher: string;
    nb_pages: number;
    published_date: string;
    resume: string;
    author: string;
    genre: Genre;
    thumbnail: string;
    isbn: string;

}
