export enum PaymentMethod {
  Cash = "현금",
  Card = "카드",
}

export const PAYMENT_METHOD = Object.freeze({
  CASH: "현금" as PaymentMethod.Cash,
  CARD: "카드" as PaymentMethod.Card,
});

export type PaymentOptionsType = {
  id: number;
  count?: number;
};

export type PaymentProductType = {
  id: number;
  count: number;
  personalOptionIds: PaymentOptionsType[];
};

export type PaymentBodyType = {
  paymentMethod: string;
  paymentPrice: number;
  products: PaymentProductType[];
};
