import { OptionSelection } from "@constants/option";
import Product from "@kiosk/common/types/product";

// State
type CartProduct = {
  count: number;
  price: number;
  product: Omit<Product, "options">;
  options: OptionSelection;
  optionContent: string;
};
export type CartState = {
  totalPrice: number;
  products: CartProduct[];
};
export const initialCartType = Object.freeze({
  totalPrice: 0,
  products: [],
});

// Types
const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";

// Actions
export const cartAddProduct = (payload: {
  count: number;
  price: number;
  product: Omit<Product, "options">;
  options: OptionSelection;
  optionContent: string;
}) => {
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
      const { type, ...newProduct } = action as ReturnType<typeof cartAddProduct>;
      const { product, price: optionPrice, count } = newProduct;
      const newTotal = state.totalPrice + (product.price + optionPrice) * count;
      return {
        ...state,
        totalPrice: newTotal,
        products: [...state.products, newProduct],
      };
    }
    default:
      throw new Error("Unhandled CART Action");
  }
}
