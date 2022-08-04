import { PickType } from "@nestjs/mapped-types";
import { PersonalOption } from "../entities/personal-option.entity";

export class CreatePersonalOptionDto extends PickType(PersonalOption, [
  "name",
  "price",
  "optionType",
  "category",
  "productId",
] as const) {}
