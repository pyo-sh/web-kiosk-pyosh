import React, { useState } from "react";
import { useCartDispatch, useCartState } from "@hooks/store/cart";
import { cartClear } from "@stores/cart";
import Modal from "@components/custom/Modal";
import Payment from "@components/payment";
import { AcceptButton, CancelButton, ContainerDiv } from "./CartButtons.style";

const CartButtons: React.FC = () => {
  const { products } = useCartState();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const cartDispatch = useCartDispatch();

  const clearCart = () => {
    cartDispatch(cartClear());
  };

  const openModal = () => {
    if (products.length !== 0) setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <ContainerDiv>
      <AcceptButton onClick={() => setIsOpenModal(true)}>결제하기</AcceptButton>
      <CancelButton onClick={clearCart}>비우기</CancelButton>
      <Payment isOpen={isOpenModal} closeModal={closeModal} />
    </ContainerDiv>
  );
};

export default CartButtons;
