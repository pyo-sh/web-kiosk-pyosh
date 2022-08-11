import React, { useEffect, useState } from "react";
import { PAYMENT_METHOD } from "@constants/payment";
import { useBillDispatch } from "@hooks/store/bill";
import { useCartState } from "@hooks/store/cart";
import { billSet } from "@stores/bill";
import { getBill } from "@apis/bill";

const CASH_PAYS = [100, 500, 1000, 5000, 10000, 50000];

const PaymentCash: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [paymentPrice, setPaymentPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const billDispatch = useBillDispatch();
  const cartState = useCartState();

  const successPay = async () => {
    const payment = { paymentMethod: PAYMENT_METHOD.CASH, paymentPrice };
    const bill = await getBill(cartState, payment);
    billDispatch(billSet(bill));
  };

  const onClickList = (amount: number) => () => {
    setPaymentPrice((prev) => prev + amount);
  };

  useEffect(() => {
    if (paymentPrice >= cartState.totalPrice) {
      setIsLoading(true);
      successPay();
    }
  }, [paymentPrice]);

  if (isLoading) return <div>로딩중</div>;

  return (
    <div>
      <ul>
        {CASH_PAYS.map((pay) => (
          <li key={`pay-${pay}`} onClick={onClickList(pay)}>
            {pay}
          </li>
        ))}
      </ul>
      <div>주문 금액 : {cartState.totalPrice}</div>
      <div>투입 금액 : {paymentPrice}</div>
      <button onClick={closeModal}>뒤로가기</button>
    </div>
  );
};

export default PaymentCash;
