import { Book } from "./Books";

export interface BooksBySections{
    section:string;
    books: Book[]
}