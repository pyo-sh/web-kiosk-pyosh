import { PickType } from "@nestjs/mapped-types";
import { Bill } from "../entities/bill.entity";

export class CreateBillDto extends PickType(Bill, [
  "content",
  "paymentMethod",
  "paymentPrice",
  "totalPrice",
] as const) {}
