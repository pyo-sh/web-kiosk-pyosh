import { useCartDispatch } from "@hooks/store/cart";
import { useOptionDispatch, useOptionState } from "@hooks/store/option";
import Product from "@kiosk/common/types/product";
import { cartAddProduct } from "@src/stores/cart";
import { optionPickClear } from "@src/stores/option";
import React from "react";
import { ContainerDiv } from "./ProductButtons.style";

type ProductButtonsPropsType = {
  product: Product;
  closeModal: () => void;
};

const ProductButtons: React.FC<ProductButtonsPropsType> = ({ product, closeModal }) => {
  const { count, picks } = useOptionState();
  const cartDispatch = useCartDispatch();
  const optionDispatch = useOptionDispatch();

  const addProduct = () => {
    const newProduct = { ...product, count, options: picks };
    cartDispatch(cartAddProduct(newProduct));
    optionDispatch(optionPickClear());
    closeModal();
  };

  return (
    <ContainerDiv>
      <button onClick={closeModal}>취소</button>
      <button onClick={addProduct}>추가</button>
    </ContainerDiv>
  );
};

export default ProductButtons;