import { MutationTree } from "vuex"
import { MutationTypes } from "./mutations-types"
import { IUserList } from "./state"
import { IUser } from "@/models/IUser"


export type Mutations<S = IUserList> = {
    [MutationTypes.UPDATE_USERSLIST] (state: S, payload: IUser[]): void,
    [MutationTypes.UPDATE_GETUSER] (state: S, payload: IUser): void,
}

export const mutations: MutationTree<IUserList> & Mutations = {
    [MutationTypes.UPDATE_USERSLIST] (state, payload: IUser[]) {
        state.users = payload
    },
    [MutationTypes.UPDATE_GETUSER] (state, payload: IUser) {
        state.user = payload;
    },
}