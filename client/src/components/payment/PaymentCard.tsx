import React, { useEffect } from "react";
import { useBillDispatch } from "@hooks/store/bill";
import { useCartState } from "@hooks/store/cart";
import { PAYMENT_METHOD } from "@constants/payment";
import { billSet } from "@stores/bill";
import { getBill } from "@apis/bill";
import { ClockLoaderDiv, ContainerDiv } from "./PaymentCard.style";

const MIN = 3000;
const MAX = 7000;

const PaymentCard: React.FC<{ closeModal: () => void }> = () => {
  const billDispatch = useBillDispatch();
  const cartState = useCartState();

  const successPay = async () => {
    const payment = { paymentMethod: PAYMENT_METHOD.CARD, paymentPrice: cartState.totalPrice };
    const bill = await getBill(cartState, payment);
    billDispatch(billSet(bill));
  };

  useEffect(() => {
    const second = Math.random() * (MAX - MIN) + MIN;
    setTimeout(async () => {
      await successPay();
    }, second);
  }, []);

  return (
    <ContainerDiv>
      <ClockLoaderDiv></ClockLoaderDiv>
    </ContainerDiv>
  );
};

export default PaymentCard;
