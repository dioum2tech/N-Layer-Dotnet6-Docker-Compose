import Vue from "vue";
import Vuex from "vuex";
import { IUserAccount } from "./auth-module/state";
import { IUserList } from "./user-module/state";
import { auth } from "./auth-module";
import { userModule } from "./user-module";
import { sidebar } from "./Layout";

Vue.use(Vuex);

export interface IState {
  auth: IUserAccount,
  userModule: IUserList
}

export const store = new Vuex.Store<IState>({
  modules: {
    auth,
    sidebar,
    userModule
  },
});
