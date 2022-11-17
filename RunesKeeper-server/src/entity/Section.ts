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

@Entity ({name: "section"})
export class Section {
	@PrimaryGeneratedColumn ()
	id_section: number;

	@Column ()
	section_name: string;
	@Column ()
	section_color: string;
}


