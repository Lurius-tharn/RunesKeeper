import {Keeper} from "../entity/Keeper";
import {BooksInSection} from "../entity/BooksInSection";
import {Book} from "../entity/Book";
import {SynthesisBook} from "../entity/SynthesisBook";
import {BooksByAuthors} from "../entity/BooksByAuthors";
import {BooksInGenre} from "../entity/BooksInCategory";
import {BookWithLikedSections} from "../entity/BookWithLikedSections";
import {isEqual} from "lodash"

export const toBooksBySections = (keepers: Keeper[]): BooksInSection[] => {
	let booksInSections: BooksInSection;
	const result = keepers.reduce (function (sections, item) {
		booksInSections = sections.find (section => isEqual(section.section, item.section));
		if (!booksInSections) {
			booksInSections = {section: item.section, books: []};
			sections.push (booksInSections);
		}
		booksInSections.books.push (toBookSynthesis (item.book));
		return sections;

	}, []);

	return result
}

export const toBooksByAuthors = (keepers: Keeper[]): BooksByAuthors[] => {
	let booksByAuthors: BooksByAuthors;
	const result = keepers.reduce (function (authors, item) {
		booksByAuthors = authors.find (author => author.authorName === item.book.author);
		if (!booksByAuthors) {
			booksByAuthors = {authorName: item.book.author, books: []};
			authors.push (booksByAuthors);
		}
		if (!booksByAuthors.books.find ((book) => toBookSynthesis (item.book).isbn === book.isbn))
			booksByAuthors.books.push (toBookSynthesis (item.book));
		return authors;

	}, []);

	return result
}

export const toBooksByGenre = (keepers: Keeper[]): BooksInGenre[] => {
	let booksInGenre: BooksInGenre;
	const result = keepers.reduce (function (books, item) {
		booksInGenre = books.find (genre => genre.genreName === item.book.genre.name);
		if (!booksInGenre) {
			booksInGenre = {genreName: item.book.genre.name, books: []};
			books.push (booksInGenre);
		}
		if (!booksInGenre.books.find ((book) => toBookSynthesis (item.book).isbn === book.isbn))
			booksInGenre.books.push (toBookSynthesis (item.book));
		return books;

	}, []);

	return result
}
export const toBookSynthesis = (book: Book): SynthesisBook => {
	return {
		author: book.author,
		isbn: book.isbn,
		nb_pages: book.nb_pages,
		published_date: book.published_date,
		publisher: book.publisher,
		subtitle: book.subtitle,
		thumbnail: book.thumbnail

	}
}

export const toBookWithLikedSections = (keepers:Keeper[]): BookWithLikedSections => {
	const likedSections = []
	keepers.forEach((keeper)=> likedSections.push(keeper.section))
	return  {
		book: keepers[0].book,
		likedSections: likedSections
	}

}
