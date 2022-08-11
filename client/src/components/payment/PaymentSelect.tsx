import React from "react";
import { PAYMENT_METHOD, PaymentMethodEnum } from "@constants/payment";
import Modal from "@components/custom/Modal";
import { BtnWrapperDiv, CancelButton, ContainerDiv, PayButton } from "./PaymentSelect.style";
import MoneyIcon from "@icons/MoneyIcon";
import CardIcon from "@icons/CardIcon";
import { COLOR } from "@constants/style";

const ICON_SIZE = 52;

type PaymentSelectPropsType = {
  isOpen: boolean;
  closeModal: () => void;
  onClickPayment: (payment: PaymentMethodEnum) => () => void;
};

const PaymentSelect: React.FC<PaymentSelectPropsType> = ({
  closeModal,
  onClickPayment,
  isOpen,
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ContainerDiv>
        <BtnWrapperDiv>
          <PayButton onClick={onClickPayment(PAYMENT_METHOD.CASH)}>
            <MoneyIcon width={ICON_SIZE} height={ICON_SIZE} color={COLOR.offWhite} />
            {PAYMENT_METHOD.CASH}
          </PayButton>
          <PayButton onClick={onClickPayment(PAYMENT_METHOD.CARD)}>
            <CardIcon width={ICON_SIZE} height={ICON_SIZE} color={COLOR.offWhite} />
            {PAYMENT_METHOD.CARD}
          </PayButton>
        </BtnWrapperDiv>
        <CancelButton onClick={closeModal}>더 선택하기</CancelButton>
      </ContainerDiv>
    </Modal>
  );
};

export default PaymentSelect;
