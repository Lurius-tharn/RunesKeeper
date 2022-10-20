import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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

@Entity ({name: "genre"})
export class Genre {
	@PrimaryGeneratedColumn ()
	id_genre: number;

	@Column ()
	name: string;
}


