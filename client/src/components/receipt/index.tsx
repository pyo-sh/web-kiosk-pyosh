import { PAYMENT_METHOD } from "@constants/payment";
import { useBillDispatch, useBillState } from "@hooks/store/bill";
import { billClear } from "@stores/bill";
import React from "react";
import { BackButton, BillDiv, ContainerDiv, InfoDiv, InfoSpan, TitleH1 } from "./index.style";

const Receipt: React.FC = () => {
  const billDispatch = useBillDispatch();
  const { id, content, paymentMethod, paymentPrice, totalPrice, createdAt } = useBillState();
  const isCash = paymentMethod === PAYMENT_METHOD.CASH;

  const clearBill = () => {
    billDispatch(billClear());
  };

  return (
    <ContainerDiv>
      <BillDiv>
        <TitleH1>주문번호 : {id}</TitleH1>
        <p>{content}</p>
        <InfoDiv>
          <InfoSpan>결제방식 : {paymentMethod}</InfoSpan>
          <InfoSpan>투입금액 : {paymentPrice}</InfoSpan>
          <InfoSpan>총 결제금액 : {totalPrice}</InfoSpan>
          <InfoSpan>{isCash ? `잔돈 ${Math.abs(totalPrice - paymentPrice)}` : ""}</InfoSpan>
        </InfoDiv>
      </BillDiv>
      <BackButton onClick={clearBill}>돌아가기</BackButton>
    </ContainerDiv>
  );
};

export default Receipt;
