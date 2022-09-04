import { IUser } from "@/models";
import { GetterTree } from "vuex";
import { IUserList } from "./state";

const getters: GetterTree<IUserList, any> = {
    users: (state): IUser[] | null => state.users as IUser[],
    user: (state): IUser | null => state.user as IUser
}

export { getters };