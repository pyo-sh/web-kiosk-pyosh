export type BillType = {
  id: number;
  content: string;
  paymentMethod: string;
  paymentPrice: number;
  totalPrice: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};
