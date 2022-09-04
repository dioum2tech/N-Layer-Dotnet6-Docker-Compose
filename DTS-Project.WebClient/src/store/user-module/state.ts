import { IUser } from "@/models";
import { localStorageService } from "@/services/localStorageService";

interface IUserList {
    users: IUser[],
    user: IUser
}

let userConnected: IUser = JSON.parse(JSON.stringify(localStorageService.GetUser()));
const initialState: IUserList = {
    users: [],
    user: userConnected
}

export { IUserList, initialState }