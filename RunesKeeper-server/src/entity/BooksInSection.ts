import {SynthesisBook} from "./SynthesisBook";
import {Section} from "./Section";

/**
 * @swagger
 * components:
 *   schemas:
 *     BooksInSection:
 *       type: object
 *       properties:
 *           section:
 *              $ref: '#/components/schemas/Section'
 *           books:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/synthesisBook'
 * */
export class BooksInSection {
	section: Section;
	books: SynthesisBook[];
}
