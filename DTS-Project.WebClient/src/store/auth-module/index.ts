import { Module } from "vuex";
import { IUserAccount, initialState } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const auth : Module<IUserAccount, any> = {
    namespaced: true,
    state: initialState,
    mutations,
    actions,
    getters
}

export { auth }