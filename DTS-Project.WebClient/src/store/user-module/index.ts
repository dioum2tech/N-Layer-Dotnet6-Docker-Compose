import { Module } from "vuex";
import { IUserList, initialState } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const userModule : Module<IUserList, any> = {
    namespaced: true,
    state: initialState,
    mutations,
    actions,
    getters
}

export { userModule }