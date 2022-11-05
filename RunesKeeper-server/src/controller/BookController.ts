import {NextFunction, Request, Response} from "express"
import {BookRepository, LibraryRepository} from "../Repository/BookDatabaseRepository";
import {Keeper} from "../entity/Keeper";
import {
	toBooksByAuthors,
	toBooksByGenre,
	toBooksBySections,
	toBookWithLikedSections
} from "../Repository/BookDatabaseMapper";
import {Book} from "../entity/Book";

export class BookController {

	constructor () {
	}

	async AllBooksBySection (request: Request, response: Response, next: NextFunction) {
		const {userId} = request.params
		await LibraryRepository.getAllBooksbysection (parseInt (userId))
			.then ((books: Keeper[]) => {
				return response.send (toBooksBySections (books))
			})
	}


	async AllBooksByAuthors (request: Request, response: Response, next: NextFunction) {
		const {userId} = request.params
		await LibraryRepository.getAllBooksbyAuthors (parseInt (userId))
			.then ((books: Keeper[]) => {
				return response.send (toBooksByAuthors (books))
			})
	}

	async AllBooksByCategories (request: Request, response: Response, next: NextFunction) {
		const {userId} = request.params
		await LibraryRepository.getAllBooksByCategories (parseInt (userId)).then ((books: Keeper[]) => {
			return response.send (toBooksByGenre (books))
		})
	}

	async bookByIsbn (request: Request, response: Response, next: NextFunction) {
		const {isbn} = request.params
		await BookRepository.getBookByIsbn (parseInt (isbn)).then ((book: Book) => {
			return response.send ((book))
		})
	}

	async addedSectionsOfOneBook (request: Request, response: Response, next: NextFunction) {
		const {userId,isbn} = request.params
		await LibraryRepository.getAddedSectionsOfOneBook (parseInt (userId),parseInt(isbn)).then ((keepers: Keeper[]) => {
			return response.send ((toBookWithLikedSections(keepers)))
		})
	}

	async addBook (request: Request, response: Response, next: NextFunction) {
		const book: Book = request.body;
		await BookRepository.getBookByIsbn(book.isbn).then((bookAlreadyExist) => {
			if (!bookAlreadyExist){
				 BookRepository.addBook (book).then (() => response.json ({
					"valid": true,
					"message": "Succès !"
				})).catch ((reason) => {
					response.send (reason.sqlMessage);
				});
			}else{
				response.send ("");

			}

		})

	}
}
