import Modal from "@components/custom/Modal";
import { PAYMENT_METHOD, PaymentMethod } from "@constants/payment";
import React from "react";

type PaymentSelectPropsType = {
  isOpen: boolean;
  closeModal: () => void;
  onClickPayment: (payment: PaymentMethod) => () => void;
};

const PaymentSelect: React.FC<PaymentSelectPropsType> = ({ onClickPayment, ...modalProps }) => {
  return (
    <Modal {...modalProps}>
      <div>
        <button onClick={onClickPayment(PAYMENT_METHOD.CASH)}>{PAYMENT_METHOD.CASH}</button>
        <button onClick={onClickPayment(PAYMENT_METHOD.CARD)}>{PAYMENT_METHOD.CARD}</button>
      </div>
    </Modal>
  );
};

export default PaymentSelect;
