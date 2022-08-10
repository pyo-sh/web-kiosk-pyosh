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
const CART_CLEAR = "CART_CLEAR";
const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";
const CART_EDIT_COUNT = "CART_EDIT_COUNT";
const CART_DELETE_PRODUCT = "CART_DELETE_PRODUCT";

// Actions
export const cartClear = () => {
  return {
    type: CART_CLEAR,
  };
};

export const cartAddProduct = (payload: CartProduct) => {
  return {
    type: CART_ADD_PRODUCT,
    ...payload,
  };
};

export const cartEditCount = (payload: { cartIndex: number; gap: number }) => {
  return {
    type: CART_EDIT_COUNT,
    ...payload,
  };
};

export const cartDeleteProduct = (payload: { cartIndex: number }) => {
  return {
    type: CART_DELETE_PRODUCT,
    ...payload,
  };
};

export type CartAction =
  | ReturnType<typeof cartClear>
  | ReturnType<typeof cartAddProduct>
  | ReturnType<typeof cartEditCount>
  | ReturnType<typeof cartDeleteProduct>;

// Reducer
export default function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CART_CLEAR:
      return { ...initialCartType };
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
    case CART_EDIT_COUNT: {
      const { cartIndex, gap } = action as ReturnType<typeof cartEditCount>;
      const len = state.products.length;
      if (isNaN(cartIndex)) return state;
      if (0 > cartIndex || cartIndex > len) return state;

      const target = { ...state.products[cartIndex] };
      const amount = (target.count || 0) + (gap || 0);
      if (amount <= 0) return state;

      const { product, price: optionPrice } = target;
      const newTotal = state.totalPrice + (product.price + optionPrice) * gap;
      target.count = amount;

      return {
        ...state,
        totalPrice: newTotal,
        products: [
          ...state.products.slice(0, cartIndex),
          target,
          ...state.products.slice(cartIndex + 1),
        ],
      };
    }
    case CART_DELETE_PRODUCT: {
      const { cartIndex } = action as ReturnType<typeof cartDeleteProduct>;
      const len = state.products.length;
      if (isNaN(cartIndex)) return state;
      if (0 > cartIndex || cartIndex > len) return state;

      const target = state.products[cartIndex];
      const { product, price: optionPrice, count } = target;
      const newTotal = state.totalPrice - (product.price + optionPrice) * count;

      return {
        ...state,
        totalPrice: newTotal,
        products: [...state.products.slice(0, cartIndex), ...state.products.slice(cartIndex + 1)],
      };
    }
    default:
      throw new Error("Unhandled CART Action");
  }
}
