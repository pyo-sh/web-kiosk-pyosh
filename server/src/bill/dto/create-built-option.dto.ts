import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";
import { PersonalOption } from "src/personal-option/entities/personal-option.entity";

export class CreateBuiltOptionDto extends PickType(PersonalOption, ["id"] as const) {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  count?: number;
}
