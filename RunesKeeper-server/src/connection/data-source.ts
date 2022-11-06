import "reflect-metadata"
import {DataSource} from "typeorm"
import {Section} from "../entity/Section";
import {Genre} from "../entity/Genre";
import {User} from "../entity/User";
import {Book} from "../entity/Book";
import {Keeper} from "../entity/Keeper";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "RunesKeeper",
    password: "runeskeeper",
    database: "runeskeeper",
    synchronize: false,
    logging: false,
    entities: [Book, Genre, Section, Keeper, User],
})
