import { IsEnum, IsNumber, IsString } from "class-validator";
import { OptionType } from "src/common/enums";

export class CreatePersonalOptionDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsEnum(OptionType)
  optionType: OptionType;

  @IsString()
  category: string;

  @IsNumber()
  productId: number;
}
