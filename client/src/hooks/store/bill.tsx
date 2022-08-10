import { createContext, Dispatch, useContext, useReducer } from "react";
import reducer, { initialBillType } from "@src/stores/bill";
import type { BillAction } from "@src/stores/bill";
import { BillType } from "@kiosk/common/types/bill";

type BillDispatch = Dispatch<BillAction>;
const BillStateContext = createContext<BillType | null>(null);
const BillDispatchContext = createContext<BillDispatch | null>(null);

export function BillProvider({
  children,
  Receipt,
}: {
  children: React.ReactNode;
  Receipt: React.FC<any>;
}) {
  const [state, dispatch] = useReducer(reducer, initialBillType);

  if (state.id >= 0) {
    return (
      <BillStateContext.Provider value={state}>
        <BillDispatchContext.Provider value={dispatch}>
          <Receipt />
        </BillDispatchContext.Provider>
      </BillStateContext.Provider>
    );
  }
  return (
    <BillStateContext.Provider value={state}>
      <BillDispatchContext.Provider value={dispatch}>{children}</BillDispatchContext.Provider>
    </BillStateContext.Provider>
  );
}

export function useBillState() {
  const state = useContext(BillStateContext);
  if (!state) throw new Error("Cannot find BillProvider");
  return state;
}

export function useBillDispatch() {
  const dispatch = useContext(BillDispatchContext);
  if (!dispatch) throw new Error("Cannot find BillProvider");
  return dispatch;
}
