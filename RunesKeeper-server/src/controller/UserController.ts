import {NextFunction, Request, Response} from "express"
import {User} from "../entity/User";
import {SectionRepository, UserRepository} from "../Repository/UserDatabaseRepository";
import * as bcrypt from 'bcrypt';
import {LibraryRepository} from "../Repository/BookDatabaseRepository";
import {Keeper} from "../entity/Keeper";
import {toBooksBySections} from "../Repository/BookDatabaseMapper";
import {Section} from "../entity/Section";

class UserController {
	private saltRounds: number;
	private bcrypt;

	constructor () {
		this.saltRounds = 10
	}

	async registerUser (request: Request, response: Response, next: NextFunction) {
		response.header("Access-Control-Allow-Origin" )
		const user: User = request.body
		bcrypt.hash (user.password, this.saltRounds, (err, encrypted) => {
			if (err)
				response.send (err);
			user.password = encrypted;
			UserRepository.registerUser (user)
				.then (() => response.json ({
					"valid": true,
					"message": "Succès !"
				})).catch ((reason) => {
				response.send (reason.sqlMessage);
			});
		})


	}

	async getUserByPseudonyme (request: Request, response: Response, next: NextFunction) {
		response.header("Access-Control-Allow-Origin" )

		const pseudonyme: string = request.params.pseudonyme;
		const password: string = request.params.password;

		UserRepository.getUser (pseudonyme).then ((user: User) => {
			if (!user) {
				return response.json ({
					"valid": false,
					"message": "pseudonyme incorrect!"
				})
			}
			bcrypt.compare (password, user.password, (error, result) => {
				if (result) {
					return response.json ({
						"valid": true,
						"message": "Succès !",
						"pseudo": pseudonyme,
						"userId": user.id_user
					})
					//Access to the home page
				} else {
					return response.json ({
						"valid": false,
						"message": "mot de passe saisie incorrect !"
					})
				}
			})
		})

	}
	 async getSectionsOfUser (request: Request, response: Response, next: NextFunction) {
		 const {userId} = request.params
		 await SectionRepository.getSectionsOfUser (parseInt (userId))
			 .then ((sections: Section[]) => {
				 return response.send ( (sections))
			 })

	 }

}

export {UserController};
