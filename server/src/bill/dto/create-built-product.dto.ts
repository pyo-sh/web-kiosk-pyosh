import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsArray, IsNumber } from "class-validator";
import { Product } from "src/product/entities/product.entity";
import { CreateBuiltOptionDto } from "./create-built-option.dto";

export class CreateBuiltProductDto extends PickType(Product, ["id"] as const) {
  @ApiProperty()
  @IsNumber()
  count: number;

  @ApiProperty()
  @IsArray()
  personalOptionIds: Array<CreateBuiltOptionDto>;
}
