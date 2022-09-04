import { IUser } from "@/models/IUser";
import { localStorageService } from "@/services/localStorageService";

interface IUserAccount {
  loggIn: boolean,
  token: string,
  user: IUser
}

let userConnected: IUser = JSON.parse(JSON.stringify(localStorageService.GetUser()));

const initialState: IUserAccount = {
  loggIn: (JSON.stringify(localStorageService.GetToken()) !== "null")? true : false,
  token: JSON.stringify(localStorageService.GetToken()),
  user: userConnected
}

export { IUserAccount, initialState };