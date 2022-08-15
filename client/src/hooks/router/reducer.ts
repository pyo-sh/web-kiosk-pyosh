import { Dispatch } from "react";
import { pathnameToPath, RouterStateType } from "./state";

export type RouterActionsType = { type: "PUSH_HISTORY"; pathname: string };
export type RouterDispatchType = Dispatch<RouterActionsType>;

export const routerReducer = (state: RouterStateType, action: RouterActionsType) => {
  switch (action.type) {
    case "PUSH_HISTORY": {
      const { pathname } = action;
      const path = pathnameToPath(pathname);
      return {
        ...state,
        pathname,
        path,
      };
    }
    default:
      return state;
  }
};
