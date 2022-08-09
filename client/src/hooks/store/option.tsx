import { createContext, Dispatch, useContext, useReducer } from "react";
import reducer, { initialOptionType } from "@src/stores/option";
import type { OptionAction, OptionState } from "@src/stores/option";

type OptionDispatch = Dispatch<OptionAction>;
const OptionStateContext = createContext<OptionState | null>(null);
const OptionDispatchContext = createContext<OptionDispatch | null>(null);

export function OptionProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialOptionType);

  return (
    <OptionStateContext.Provider value={state}>
      <OptionDispatchContext.Provider value={dispatch}>{children}</OptionDispatchContext.Provider>
    </OptionStateContext.Provider>
  );
}

export function useOptionState() {
  const state = useContext(OptionStateContext);
  if (!state) throw new Error("Cannot find PickProvider");
  return state;
}

export function useOptionDispatch() {
  const dispatch = useContext(OptionDispatchContext);
  if (!dispatch) throw new Error("Cannot find PickProvider");
  return dispatch;
}
