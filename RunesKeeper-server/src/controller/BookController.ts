import {NextFunction, Request, Response} from "express"
import {BookRepository, LibraryRepository} from "../Repository/BookDatabaseRepository";
import {Keeper} from "../entity/Keeper";
import {
	toBooksByAuthors,
	toBooksByGenre,
	toBooksBySections,
	toBookWithLikedSections, toLikedSections
} from "../Repository/BookDatabaseMapper";
import {Book} from "../entity/Book";
import {SECTION_NAME} from "../constants/Sections.constants";
import {Section} from "../entity/Section";

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

	async  modifierSectionPourLivre(request: Request, response: Response, next: NextFunction) {
		// a refaire.
		const keeper:Keeper = request.body;
		await LibraryRepository.getAddedSectionsOfOneBook(keeper.user, keeper.book.isbn).then((sectionsDansLivre)=> {
			sectionsDansLivre.forEach((keep)=> {
				if (keep.section.section_name === keeper.section.section_name) {
					LibraryRepository.deleteKeeper(keep).then()
				}
				else if (keeper.section.section_name == SECTION_NAME.IWant){
					if (keep.section.section_name == SECTION_NAME.IRead || keep.section.section_name ==  SECTION_NAME.iHave ){
						LibraryRepository.deleteKeeper(keep).then( () =>  LibraryRepository.addKeeper(keeper).then())
					} else {
						LibraryRepository.addKeeper(keeper).then()

					}
				} else if(keeper.section.section_name == SECTION_NAME.iHave || keeper.section.section_name == SECTION_NAME.IRead) {

				}
				else {
					LibraryRepository.addKeeper(keeper).then()
				}
			})
			if (!sectionsDansLivre.length){
				LibraryRepository.addKeeper(keeper).then()
			}
		})
		LibraryRepository.getAddedSectionsOfOneBook (keeper.user, keeper.book.isbn).then ((sectionsDansLivre) => {
			response.send(toLikedSections (sectionsDansLivre))
		});

	}

	/***
	 *  Je donne : Une section
	 *  	Je recupere
	 *  	je veux ajouter, ou supprimer un keeper
	 *  	plus précisémment :
	 *  		-	ajouter un keeper s'il n'existe pas
						-	cas spécifiques :
							- J'ajoute une section j'aime :
									-
									-
							-J'ajoute une section J'ai, ou j'ai lu
	 *  		-	supprimer un keeper s'il existe

	 *
	 *
	 */


}
