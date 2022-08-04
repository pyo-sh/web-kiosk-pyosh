import { IsNumber } from "class-validator";

export class CreateBillProductDto {
  @IsNumber()
  readonly billId: number;

  @IsNumber()
  readonly productId: number;

  @IsNumber()
  readonly count: number;
}
