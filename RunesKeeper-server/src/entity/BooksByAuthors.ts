import {SynthesisBook} from "./SynthesisBook";

/**
 * @swagger
 * components:
 *   schemas:
 *     BooksByAuthors:
 *       type: object
 *       properties:
 *           authorName:
 *              type: string
 *           books:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/synthesisBook'
 * */
export class BooksByAuthors {
	authorName: string;
	books: SynthesisBook[];
}
