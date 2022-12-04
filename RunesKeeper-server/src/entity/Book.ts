import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Genre} from "./Genre";

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *           id:
 *             type: integer
 *           title:
 *             type: string
 *           subtitle:
 *             type: string
 *           publisher:
 *             type: string
 *           nb_pages:
 *            type: integer
 *           published_date:
 *             type: string
 *           resume:
 *             type: string
 *           author:
 *             type: string
 *           genre:
 *             type: integer
 *           thumbnail:
 *            type: integer
 *           isbn:
 *             type: string
 *           genreName:
 *             type: string
 * */

@Entity ({name: "book"})
export class Book {
	@PrimaryGeneratedColumn ()
	id_book: number;

	@Column ()
	title: string;

	@Column ()
	subtitle: string;

	@Column ()
	publisher: string;

	@Column ()
	nb_pages: number;

	@Column ()
	published_date: string;

	@Column ()
	resume: string;

	@Column ()
	author: string;

	@OneToOne (type => Genre, genre => genre.id_genre)
	@JoinColumn ({name: 'genre', referencedColumnName: "id_genre"})
	genre: Genre;

	@Column ()
	thumbnail: string;

	@Column ()
	isbn: number;

}


