import React, { useState } from "react";
import { PaymentMethodEnum, PAYMENT_METHOD } from "@constants/payment";
import PaymentSelect from "./PaymentSelect";
import PaymentCash from "./PaymentCash";
import PaymentCard from "./PaymentCard";
import Modal from "@components/custom/Modal";

type PaymentPropsType = {
  isOpen: boolean;
  closeModal: () => void;
};

const selectProcess = (payment: PaymentMethodEnum) => {
  switch (payment) {
    case PAYMENT_METHOD.CASH:
      return PaymentCash;
    case PAYMENT_METHOD.CARD:
      return PaymentCard;
    default:
      return () => <></>;
  }
};

const Payment: React.FC<PaymentPropsType> = ({ isOpen, closeModal }) => {
  const [payment, setPayment] = useState<PaymentMethodEnum | undefined>(undefined);

  const onClickPayment = (payment: PaymentMethodEnum) => () => {
    setPayment(payment);
  };

  const onClose = () => {
    setPayment(undefined);
    closeModal();
  };

  if (!payment) return <PaymentSelect {...{ isOpen, closeModal: onClose, onClickPayment }} />;

  const PaymentProcess = selectProcess(payment);
  return (
    <Modal isOpen={isOpen}>
      <PaymentProcess closeModal={onClose} />
    </Modal>
  );
};

export default Payment;
