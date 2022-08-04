import { PickType } from "@nestjs/mapped-types";
import { BillProduct } from "../entities/bill-product.entity";

export class CreateBillProductDto extends PickType(BillProduct, [
  "billId",
  "productId",
  "count",
] as const) {}
