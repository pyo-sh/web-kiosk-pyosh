import { getBill } from "@apis/bill";
import { PAYMENT_METHOD } from "@constants/payment";
import { useBillDispatch } from "@hooks/store/bill";
import { useCartState } from "@hooks/store/cart";
import { billSet } from "@stores/bill";
import React, { useEffect } from "react";

const MIN = 300;
const MAX = 700;

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

  return <div>로딩중</div>;
};

export default PaymentCard;
