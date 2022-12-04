import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

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

	@OneToOne (type => User, user => user.id_user)
	@JoinColumn ({name: "user", referencedColumnName: "id_user"})
	user: User;

	@Column ()
	addedDate:Date

	@Column ()
	section_icon: string
}


