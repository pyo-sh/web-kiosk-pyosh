import { PaymentMethod } from "@constants/payment";
import { BillType } from "@kiosk/common/types/bill";
import { CartState } from "@stores/cart";
import { refineCart } from "@utils/cartRefactor";
import axios from "axios";

export async function getBill(
  cartState: CartState,
  payment: { paymentMethod: PaymentMethod; paymentPrice: number },
): Promise<any> {
  const body = refineCart(cartState, payment);
  const {
    data: { bill },
  }: { data: { bill: BillType } } = await axios.post("/bill", body);
  return bill;
}
