import {AppDataSource} from "../connection/data-source";
import {Keeper} from "../entity/Keeper";
import {Book} from "../entity/Book";


export const LibraryRepository = AppDataSource.getRepository(Keeper).extend({
    async getAllBooksbysection(userId: number): Promise<Keeper[]> {
        return this.createQueryBuilder("keeper")
            .innerJoinAndSelect("keeper.book", "book")
            .innerJoinAndSelect("keeper.section", "section")
            .innerJoinAndSelect("book.genre", "genre")
            .where("keeper.user = :userId", {userId}).getMany()


    },
    async getAllBooksbyAuthors(userId: number): Promise<Keeper[]> {
        return this.createQueryBuilder("keeper")
            .innerJoinAndSelect("keeper.book", "book")
            .distinct("keeper.book", true)
            .where("keeper.user = :userId", {userId})
            .orderBy("book.author")
            .getMany()


    },
    async getAllBooksByCategories(userId: number): Promise<Keeper[]> {
        return this.createQueryBuilder("keeper")
            .innerJoinAndSelect("keeper.book", "book")
            .innerJoinAndSelect("book.genre", "genre")
            .where("keeper.user = :userId", {userId})
            .orderBy("genre.name")
            .getMany()


    },
    async getAddedSectionsOfOneBook(userId: number, isbn: number) {
        return this.createQueryBuilder("keeper")
            .innerJoinAndSelect("keeper.book", "book")
            .innerJoinAndSelect("keeper.section", "section")
            .innerJoinAndSelect("book.genre", "genre")
            .where("keeper.user = :userId", {userId})
            .andWhere("book.isbn = :isbn", {isbn})
            .getMany()


    }


})

export const BookRepository = AppDataSource.getRepository(Book).extend({
    async getBookByIsbn(isbn: number): Promise<Book> {
        return this.createQueryBuilder("book")
            .innerJoinAndSelect("book.genre", "genre")
            .where("book.isbn = :isbn", {isbn})
            .getOne()

    },

    addBook(book: Book) {
        return this.createQueryBuilder()
            .insert()
            .into(Book)
            .values(book)
            .execute()
    }

})
