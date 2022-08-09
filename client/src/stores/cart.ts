import { OptionSelection } from "@constants/option";
import Product from "@kiosk/common/types/product";

// State
type CartProduct = Omit<Product, "options"> & {
  count: number;
  options: OptionSelection;
};
export type CartState = CartProduct[];

// Types
const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";

// Actions
export const cartAddProduct = (payload: { product: CartProduct }) => {
  return {
    type: CART_ADD_PRODUCT,
    ...payload,
  };
};

export type CartAction = ReturnType<typeof cartAddProduct>;

// Reducer
export default function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CART_ADD_PRODUCT: {
      const { product } = action as ReturnType<typeof cartAddProduct>;
      return [...state, product];
    }
    default:
      throw new Error("Unhandled CART Action");
  }
}
