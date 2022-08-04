import { PartialType } from "@nestjs/swagger";
import { CreatePersonalOptionDto } from "./create-personal-option.dto";

export class UpdatePersonalOptionDto extends PartialType(CreatePersonalOptionDto) {}
