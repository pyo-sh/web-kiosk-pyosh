import { IsString } from "class-validator";

export class CreateMenuDto {
  @IsString()
  readonly name: string;
}
