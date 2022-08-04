import { PickType } from "@nestjs/mapped-types";
import { BillProduct } from "../entities/bill-product.entity";

export class DeleteBillProductDto extends PickType(BillProduct, ["billId", "productId"] as const) {}
