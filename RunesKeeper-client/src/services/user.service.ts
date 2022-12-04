import { ApiService } from "./api.service";

import {User} from "../models/User";
import {Section} from "../models/Section";

 class UserService {
    BASE_URL = 'users';

    constructor(private api: ApiService){}

    enregistrerNouvelUtilisateur(user:User) : Promise<Partial<any>> {
        return this.api.post(this.BASE_URL+'/registerUser', user);
    }

    recupererUtilisateurConnnection(pseudonyme:string, password: string) : Promise<Partial<any>> {
        return this.api.get(this.BASE_URL+`/getUser/${pseudonyme}/${password}`);
    }

     recupererSectionsUtilisateur(userId:number) : Promise<Partial<Section[]>> {
         return this.api.get(this.BASE_URL+`/${userId}/sections`);
     }


}

export const userService: UserService = new UserService(new ApiService());
