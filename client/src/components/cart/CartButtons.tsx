import { ContainerDiv } from "@components/product/select/ProductButtons.style";
import { useCartDispatch } from "@hooks/store/cart";
import { cartClear } from "@stores/cart";
import React from "react";

const CartButtons: React.FC = () => {
  const cartDispatch = useCartDispatch();

  const clearCart = () => {
    cartDispatch(cartClear());
  };

  return (
    <ContainerDiv>
      <button onClick={clearCart}>취소</button>
      <button>추가</button>
    </ContainerDiv>
  );
};

export default CartButtons;
