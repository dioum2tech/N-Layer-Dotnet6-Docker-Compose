import { config } from "@/constants/config";
import { IUser } from "@/models";

const SaveToken = (token: string) => localStorage.setItem(config.TOKEN, token);
const GetToken = (): string | null => localStorage.getItem(config.TOKEN);
const RemoveToken = () => localStorage.removeItem(config.TOKEN);

const SaveUser = (user: IUser) => localStorage.setItem(config.USER_CONNECTED, JSON.stringify(user));
const GetUser = (): string | null => localStorage.getItem(config.USER_CONNECTED);
const RemoveUser = () => localStorage.removeItem(config.USER_CONNECTED);

export const localStorageService = { SaveToken, GetToken, RemoveToken, SaveUser, GetUser, RemoveUser };
