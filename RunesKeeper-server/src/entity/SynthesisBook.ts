/**
 * @swagger
 * components:
 *   schemas:
 *     synthesisBook:
 *       type: object
 *       properties:
 *           subtitle:
 *             type: string
 *           publisher:
 *             type: string
 *           nb_pages:
 *            type: integer
 *           published_date:
 *             type: string
 *           author:
 *             type: string
 *           thumbnail:
 *            type: integer
 *           isbn:
 *             type: string
 * */
export class SynthesisBook {
	subtitle: string;
	publisher: string;
	nb_pages: number;
	published_date: string;
	author: string;
	thumbnail: string;
	isbn: number;
}