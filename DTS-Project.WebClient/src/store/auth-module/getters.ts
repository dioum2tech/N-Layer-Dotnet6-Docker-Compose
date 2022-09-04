import { IUser } from "@/models";
import { GetterTree } from "vuex";
import { IUserAccount } from "./state";

const getters: GetterTree<IUserAccount, any> = {
    isLoggIn: (state): boolean => state.loggIn,
    user: (state): IUser | null => state.user as any,
    token: (state): string | null => state.token as string
}

export { getters };