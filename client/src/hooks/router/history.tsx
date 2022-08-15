import { useCallback, useContext } from "react";
import { RouterDispatchContext, RouterStateContext } from "./Router";

const useGetPath = () => {
  const state = useContext(RouterStateContext);

  return useCallback(() => {
    if (!state) throw new Error("Cannot find Router State");

    return state.path;
  }, [state]);
};

const useGetPathname = () => {
  const state = useContext(RouterStateContext);

  return useCallback(() => {
    if (!state) throw new Error("Cannot find Router State");

    return state.pathname;
  }, [state]);
};

const usePush = () => {
  const state = useContext(RouterStateContext);
  const dispatch = useContext(RouterDispatchContext);

  return useCallback(
    (pathname: string) => {
      if (!dispatch) throw new Error("Cannot find SampleProvider");
      if (state?.pathname === pathname) return;

      window.history.pushState("", "", pathname);
      dispatch({
        type: "PUSH_HISTORY",
        pathname,
      });
    },
    [state],
  );
};

const useHistory = () => {
  const push = usePush();
  const getPath = useGetPath();
  const getPathname = useGetPathname();

  return { push, getPath, getPathname };
};
export default useHistory;
