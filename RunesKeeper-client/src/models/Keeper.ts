import {User} from "./User";
import {Book} from "./Books";
import {Section} from "./Section";

export interface Keeper {
    user:User;
    book:Book;
    section:Section;
}
