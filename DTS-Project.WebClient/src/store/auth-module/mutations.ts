import { MutationTree } from "vuex"
import { MutationTypes } from "./mutations-types"
import { IUserAccount, initialState } from "./state"
import { IUser } from "@/models/IUser"


export type Mutations<S = IUserAccount> = {
    [MutationTypes.LOGIN_SUCCESS] (state: S, payload: IUser): void,
    [MutationTypes.SAVE_TOKEN] (state: S, payload: string): void,
    [MutationTypes.LOGIN_FAILURE] (state: S): void,
    [MutationTypes.REGISTER_SUCCESS] (state: S): void,
    [MutationTypes.REGISTER_FAILURE] (state: S): void,
}

export const mutations: MutationTree<IUserAccount> & Mutations = {
    [MutationTypes.LOGIN_SUCCESS] (state, payload: IUser) {
        state.user = payload
        state.loggIn = payload.isAuthenticated;
        console.log("ResponseLogin: ", payload)
    },
    [MutationTypes.SAVE_TOKEN] (state, token: string) {
        state.token = token;
    },
    [MutationTypes.LOGIN_FAILURE] (state) {
        state.loggIn = initialState.loggIn;
        state.user =  initialState.user;
    },
    [MutationTypes.REGISTER_SUCCESS] (state) {
        state.loggIn = true;
    },
    [MutationTypes.REGISTER_FAILURE] (state) {
        state.loggIn = initialState.loggIn;
    }
}