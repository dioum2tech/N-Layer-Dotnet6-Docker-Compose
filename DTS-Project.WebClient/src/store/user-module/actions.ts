import { ActionTree, ActionContext } from "vuex";
import { IUserList } from "./state";
import { Mutations } from "./mutations";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutations-types";
import RepositoryFactory from "@/repository/factory";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IUserList, any>, "commit">;

export interface Actions {
  [ActionTypes.GETALLUSERS](context: AugmentedActionContext): void;
  [ActionTypes.GETUSER](
    context: AugmentedActionContext,
    userId: number | string
  ): void;
}

const usersRepository = RepositoryFactory.get("users");
export const actions: ActionTree<IUserList, any> = {
  [ActionTypes.GETALLUSERS]: (context): void => {
    usersRepository.getAllUsers()
    .then((response: any) => {
      console.log('Action-Users: ', response);
      context.commit(MutationTypes.UPDATE_USERSLIST, response);
    })
    .catch((error: any) => console.log(error.message));
  },
  [ActionTypes.GETUSER]: (context, userId: number | string): void => {
    usersRepository.getUser(userId)
    .then((response: any) => {
      context.commit(MutationTypes.UPDATE_GETUSER, response);
    })
    .catch((error: any) => console.log(error.message));
  },
};
