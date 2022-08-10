import { getBill } from "@apis/bill";
import { PAYMENT_METHOD } from "@constants/payment";
import { useCartState } from "@hooks/store/cart";
import React, { useEffect, useState } from "react";

const MIN = 300;
const MAX = 700;

const PaymentCard: React.FC = () => {
  const cartState = useCartState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const successPay = async () => {
    const payment = { paymentMethod: PAYMENT_METHOD.CARD, paymentPrice: cartState.totalPrice };
    const bill = await getBill(cartState, payment);
    console.log(bill);
  };

  useEffect(() => {
    const second = Math.random() * (MAX - MIN) + MIN;
    setTimeout(async () => {
      await successPay();
      setIsLoading(false);
    }, second);
  }, []);

  if (isLoading) return <div>로딩중</div>;
  return <div>PaymentCard</div>;
};

export default PaymentCard;
