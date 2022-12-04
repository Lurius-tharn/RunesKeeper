import {AppDataSource} from "../connection/data-source";
import {User} from "../entity/User";
import {Section} from "../entity/Section";


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

export const SectionRepository = AppDataSource.getRepository(Section).extend({
	async getSectionsOfUser(userId: number): Promise<Section[]> {
		return this.createQueryBuilder("section")
			.where("section.user = :userId", {userId})
			.orWhere("section.user IS NULL")
			.orderBy("section.id_section")
			.getMany()

	},
})


