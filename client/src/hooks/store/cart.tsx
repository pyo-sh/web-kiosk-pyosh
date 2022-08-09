import { createContext, Dispatch, useContext, useReducer } from "react";
import reducer from "@src/stores/cart";
import type { CartState, CartAction } from "@src/stores/cart";

type CartDispatch = Dispatch<CartAction>;
const CartStateContext = createContext<CartState | null>(null);
const CartDispatchContext = createContext<CartDispatch | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const state = useContext(CartStateContext);
  if (!state) throw new Error("Cannot find CartProvider");
  return state;
}

export function useCartDispatch() {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) throw new Error("Cannot find CartProvider");
  return dispatch;
}
