import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Genre} from "./Genre";
import {Section} from "./Section";
import {Book} from "./Book";

/**
 * @swagger
 * components:
 *   schemas:
 *     BookWithLikedSections:
 *       type: object
 *       properties:
 *           book:
 *             $ref: '#/components/schemas/Book'
 *           likedSections:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Section'
 * */

export class BookWithLikedSections {
	book: Book;
	likedSections: Section[];



}


