import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "./User";
import {Book} from "./Book";
import {Section} from "./Section";

/**
 * @swagger
 * components:
 *   schemas:
 *     Keeper:
 *       type: object
 *       properties:
 *           user:
 *             type: integer
 *           book:
 *             type: string
 *           section:
 *             type: string
 *           keep_date:
 *             type: string
 * */

@Entity ({name: "keeper"})
export class Keeper {

	@OneToOne (type => User, user => user.id_user)
	@PrimaryColumn ()
	@JoinColumn ({name: "user", referencedColumnName: "id_user"})
	user: User;

	@OneToOne ((type) => Book, (book) => book.id_book)
	@JoinColumn ({name: "book", referencedColumnName: "id_book"})
	@PrimaryColumn ()
	book: Book;

	@OneToOne (type => Section, section => section.id_section)
	@JoinColumn ({name: 'section', referencedColumnName: "id_section"})
	@PrimaryColumn ()
	section: Section;

	@Column ()
	keep_date: string;

}


