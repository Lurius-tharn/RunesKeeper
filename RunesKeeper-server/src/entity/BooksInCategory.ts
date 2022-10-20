import {SynthesisBook} from "./SynthesisBook";

/**
 * @swagger
 * components:
 *   schemas:
 *     BooksInGenre:
 *       type: object
 *       properties:
 *           genreName:
 *              type: string
 *           books:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Book'
 * */
export class BooksInGenre {
	genreName: string;
	books: SynthesisBook[];
}