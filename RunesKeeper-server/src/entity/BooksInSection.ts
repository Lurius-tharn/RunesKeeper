import {SynthesisBook} from "./SynthesisBook";

/**
 * @swagger
 * components:
 *   schemas:
 *     BooksInSection:
 *       type: object
 *       properties:
 *           sectionName:
 *              type: string
 *           books:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/synthesisBook'
 * */
export class BooksInSection {
	sectionName: string;
	books: SynthesisBook[];
}
