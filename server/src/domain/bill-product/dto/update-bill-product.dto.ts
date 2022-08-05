import { PickType } from "@nestjs/swagger";
import { BillProduct } from "../entities/bill-product.entity";

export class UpdateBillProductDto extends PickType(BillProduct, ["count"] as const) {}
