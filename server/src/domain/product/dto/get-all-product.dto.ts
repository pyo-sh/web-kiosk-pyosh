import { PickType } from "@nestjs/swagger";
import { Menu } from "src/domain/menu/entities/menu.entity";
import { Product } from "../entities/product.entity";

export class GetAllProductDto extends PickType(Menu, ["id", "name"] as const) {
  products: Product[];
}
