import { PickType } from "@nestjs/mapped-types";
import { BillProduct } from "../entities/bill-product.entity";

export class FindOneBillProductDto extends PickType(BillProduct, [
  "billId",
  "productId",
] as const) {}
