import { OptionSelection } from "@constants/option";
import Product from "@kiosk/common/types/product";
import React, { useReducer, useContext, createContext, Dispatch } from "react";

// State
type CartProduct = Product & {
  options: OptionSelection;
};
export type CartState = {
  products: CartProduct[];
};

// Types
const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";

// Actions
export const cartAddProduct = (product: CartProduct) => {
  return {
    type: CART_ADD_PRODUCT,
    payload: product,
  };
};

export type CartAction = ReturnType<typeof cartAddProduct>;

// Reducer
export default function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CART_ADD_PRODUCT: {
      return {
        ...state,
      };
    }
    default:
      throw new Error("Unhandled action");
  }
}
