import {BookSynthesis} from "./BookSynthesis";
import {Section} from "./Section";

export interface BooksInSection {
    section:Section;
    books: BookSynthesis[]
}
