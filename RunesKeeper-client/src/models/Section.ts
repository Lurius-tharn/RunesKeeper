import {User} from "./User";

export interface Section {
    id_section: number;
    section_name: string;
    section_color: string;
    user:User;
    addedDate:Date;
    section_icon: string;
    addedSection?:boolean;

}
