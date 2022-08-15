import React from "react";
import { AddButton, ContainerDiv } from "./ProductButtons.style";
import Product from "@kiosk/common/types/product";
import { useCartDispatch } from "@hooks/store/cart";
import { useOptionDispatch, useOptionState } from "@hooks/store/option";
import { cartAddProduct } from "@src/stores/cart";
import { optionPickClear } from "@src/stores/option";

type ProductButtonsPropsType = {
  product: Product;
  closeModal: () => void;
};

const ProductButtons: React.FC<ProductButtonsPropsType> = ({ product, closeModal }) => {
  const { count, optionPrice, optionContents, picks } = useOptionState();
  const cartDispatch = useCartDispatch();
  const optionDispatch = useOptionDispatch();

  const addProduct = () => {
    cartDispatch(cartAddProduct({ count, optionPrice, product, options: picks, optionContents }));
    optionDispatch(optionPickClear());
    closeModal();
  };

  return (
    <ContainerDiv>
      <AddButton onClick={addProduct}>추가</AddButton>
    </ContainerDiv>
  );
};

export default ProductButtons;
