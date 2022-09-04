import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

interface ILayout {
    drawer: boolean
}

const initialState: ILayout = {
    drawer: true
}

enum MutationTypes {
    CHANGE_DRAWER = "CHANGE_DRAWER"
}

type Mutations<S = ILayout> = {
    [MutationTypes.CHANGE_DRAWER] (state: S, payload: boolean): void,
}

const mutations: MutationTree<ILayout> & Mutations = {
    [MutationTypes.CHANGE_DRAWER] (state, payload: boolean) {
        state.drawer = payload
    }
}

const actions: ActionTree<ILayout, any> = {
    // Requests
    [MutationTypes.CHANGE_DRAWER](context, drawer: boolean): void {
        context.commit(MutationTypes.CHANGE_DRAWER, drawer)
    }
}

const getters: GetterTree<ILayout, any> = {
    drawer: (state): boolean => state.drawer
}

const sidebar: Module<ILayout, any> = {
    namespaced: true,
    state: initialState,
    mutations,
    actions,
    getters
}

export { sidebar, MutationTypes }