import {AppDataSource} from "../connection/data-source";
import {User} from "../entity/User";


export const UserRepository = AppDataSource.getRepository (User).extend ({
	async getUser (pseudo: string): Promise<User> {
		return this.findOneBy ({pseudonyme: pseudo})


	},
	async registerUser (user: User) {
		return this.createQueryBuilder ()
			.insert ()
			.into (User)
			.values (user)
			.execute ()

	},
})

