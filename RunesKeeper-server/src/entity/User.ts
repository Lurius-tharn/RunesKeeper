import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *           id_user:
 *             type: integer
 *           pseudonyme:
 *             type: string
 *           email:
 *             type: string
 *           password:
 *             type: string
 * */
@Entity ()
export class User {

	@PrimaryGeneratedColumn ()
	id_user: number

	@Column ()
	pseudonyme: string

	@Column ()
	email: string

	@Column ()
	password: string

}
