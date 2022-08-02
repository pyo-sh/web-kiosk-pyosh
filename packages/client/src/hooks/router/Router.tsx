import React, { useEffect, useReducer } from "react";
import { defaultState } from "./state";
import type { RouterStateType } from "./state";
import { routerReducer } from "./reducer";
import type { RouterDispatchType } from "./reducer";

export const RouterStateContext = React.createContext<RouterStateType | null>(null);
export const RouterDispatchContext = React.createContext<RouterDispatchType | null>(null);

const Router = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(routerReducer, defaultState);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const pathname = e.state?.path || "/";
      dispatch({
        type: "PUSH_HISTORY",
        pathname,
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <RouterStateContext.Provider value={state}>
      <RouterDispatchContext.Provider value={dispatch}>{children}</RouterDispatchContext.Provider>
    </RouterStateContext.Provider>
  );
};

export default Router;
