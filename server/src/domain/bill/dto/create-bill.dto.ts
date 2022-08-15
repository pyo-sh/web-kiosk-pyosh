import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsArray } from "class-validator";
import { Bill } from "../entities/bill.entity";
import { CreateBuiltProductDto } from "./create-built-product.dto";

export class CreateBillDto extends PickType(Bill, ["paymentMethod", "paymentPrice"] as const) {
  @ApiProperty()
  @IsArray()
  products: Array<CreateBuiltProductDto>;
}
