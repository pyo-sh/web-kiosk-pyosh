import { BillType } from "@kiosk/common/types/bill";

// State
export const initialBillType: BillType = Object.freeze({
  id: -1,
  content: "",
  paymentMethod: "",
  paymentPrice: 0,
  totalPrice: 0,
});

// Types
const BILL_CLEAR = "BILL_CLEAR";
const BILL_SET = "BILL_SET";

// Actions
export const billClear = () => {
  return {
    type: BILL_CLEAR,
  };
};

export const billSet = (payload: BillType) => {
  return {
    type: BILL_SET,
    ...payload,
  };
};

export type BillAction = ReturnType<typeof billClear> | ReturnType<typeof billSet>;

// Reducer
export default function reducer(state: BillType, action: BillAction): BillType {
  switch (action.type) {
    case BILL_CLEAR:
      return { ...initialBillType };
    case BILL_SET: {
      const { type, ...bill } = action as ReturnType<typeof billSet>;
      return { ...state, ...bill };
    }
    default:
      throw new Error("Unhandled BILL Action");
  }
}
