import { Injectable } from "@nestjs/common";
import { OptionType } from "src/common/enums";
import { Menu } from "src/domain/menu/entities/menu.entity";
import { MenuService } from "src/domain/menu/menu.service";
import { PersonalOptionService } from "src/domain/personal-option/personal-option.service";
import { ProductService } from "src/domain/product/product.service";
import mockData from "./dummy/mmthcoffeeMenu.json";

@Injectable()
export class MockService {
  constructor(
    private readonly productService: ProductService,
    private readonly personalOptionService: PersonalOptionService,
    private readonly menuService: MenuService,
  ) {
    console.log("Creating Mock Data...");
    this.initMenu(mockData)
      .then(() => {
        console.log("Mock Data Create Completed!");
        process.exit(1);
      })
      .catch((e) => {
        console.error(e);
        process.exit(1);
      });
  }

  async initMenu({ data }) {
    for (const menu of data) {
      const { id: menuId } = await this.menuService.create(menu);
      await this.initProduct(menu, menuId);
    }
  }
  async initProduct({ products }, menuId) {
    for (const product of products) {
      const { id: productId } = await this.productService.create({ ...product, menuId });
      await this.initOption(product, productId);
    }
  }
  async initOption({ options }, productId) {
    for (const option of options) {
      const { optionType } = option;
      await this.personalOptionService.create({ ...option, optionType, productId });
    }
  }
}
