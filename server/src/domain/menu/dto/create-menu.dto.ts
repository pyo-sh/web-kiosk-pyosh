import { PickType } from "@nestjs/swagger";
import { Menu } from "../entities/menu.entity";

export class CreateMenuDto extends PickType(Menu, ["name"] as const) {}
