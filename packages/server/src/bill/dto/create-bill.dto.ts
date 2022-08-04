import { IsNumber, IsString } from "class-validator";

export class CreateBillDto {
  @IsString()
  readonly content: string;

  @IsString()
  readonly paymentMethod: string;

  @IsNumber()
  readonly paymentPrice: number;

  @IsNumber()
  readonly totalPrice: number;
}
