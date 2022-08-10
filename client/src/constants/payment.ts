export enum PaymentMethod {
  Cash = "현금",
  Card = "카드",
}

export const PAYMENT_METHOD = Object.freeze({
  CASH: "현금" as PaymentMethod.Cash,
  CARD: "카드" as PaymentMethod.Card,
});
