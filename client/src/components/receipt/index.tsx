import { PAYMENT_METHOD } from "@constants/payment";
import { useBillDispatch, useBillState } from "@hooks/store/bill";
import { billClear } from "@stores/bill";
import React from "react";

const Receipt: React.FC = () => {
  const billDispatch = useBillDispatch();
  const { id, content, paymentMethod, paymentPrice, totalPrice, createdAt } = useBillState();
  const isCash = paymentMethod === PAYMENT_METHOD.CASH;

  const clearBill = () => {
    billDispatch(billClear());
  };

  return (
    <div>
      <h2>주문번호 : {id}</h2>
      <p>{content}</p>
      <div>결제방식 : {paymentMethod}</div>
      <div>투입금액 : {paymentPrice}</div>
      <div>총 결제금액 : {totalPrice}</div>
      <div>{isCash ? `잔돈 ${Math.abs(totalPrice - paymentPrice)}` : ""}</div>
      <button onClick={clearBill}>돌아가기</button>
    </div>
  );
};

export default Receipt;
