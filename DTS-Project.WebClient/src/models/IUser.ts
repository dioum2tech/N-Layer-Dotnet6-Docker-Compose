import { IRole } from "@/models";

export interface IUser {
    Id: string;
    email: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    phone: number;
    age: string;
    roles: string[];
    token: string;
    isAuthenticated: boolean;
}
