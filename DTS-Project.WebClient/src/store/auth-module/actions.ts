import { ActionTree, ActionContext } from "vuex";
import { IUserAccount } from "./state";
import { Mutations } from "./mutations";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutations-types";
import RepositoryFactory from "@/repository/factory";
import { IUser } from "@/models/IUser";
import { localStorageService } from "@/services/localStorageService";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IUserAccount, any>, "commit">;

const authRepository = RepositoryFactory.get("auth");

export interface Actions {
  [ActionTypes.LOGIN](context: AugmentedActionContext, payload: IUser): void;
  [ActionTypes.SAVE_TOKEN](
    context: AugmentedActionContext,
    token: string
  ): void;
}

export const actions: ActionTree<IUserAccount, any> = {
  [ActionTypes.LOGIN]: (context, payload: IUser): void => {
    localStorageService.SaveToken(payload.token);
    localStorageService.SaveUser(payload);
    context.commit(MutationTypes.LOGIN_SUCCESS, payload);
  },
  [ActionTypes.SAVE_TOKEN]: (context, token: string): void => {
    context.commit(MutationTypes.SAVE_TOKEN, token);
  },
};
