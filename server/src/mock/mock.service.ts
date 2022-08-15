import { Injectable } from "@nestjs/common";
import { OptionType } from "src/common/enums";
import { Menu } from "src/domain/menu/entities/menu.entity";
import { MenuService } from "src/domain/menu/menu.service";
import { PersonalOptionService } from "src/domain/personal-option/personal-option.service";
import { ProductService } from "src/domain/product/product.service";
import mockData from "./dummy/mmthcoffeeMenu.json";
import { getRepository } from "typeorm";

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
    const menus = data.map(({ name }) => ({ name }));
    await this.menuService.createAll(menus);
    const menuMaps = await this.menuService.findAll();

    await this.initProduct(data, menuMaps);
  }

  async initProduct(data, menuMaps) {
    const products = data.reduce((array, { products }, i) => {
      const menuId = menuMaps[i].id;
      const mappedProducts = products.map(({ options, ...keys }) => ({ ...keys, menuId }));
      return [...array, ...mappedProducts];
    }, []);
    await this.productService.createAll(products);
    const productMaps = await this.productService.findAll();

    await this.initOption(data, productMaps);
  }

  async initOption(data, productMaps) {
    const products = data.reduce((array, { products }) => [...array, ...products], []);
    const options = products.reduce((array, { options }, i) => {
      const productId = productMaps[i].id;
      const mappedOptions = options.map((opt) => ({ ...opt, productId }));
      return [...array, ...mappedOptions];
    }, []);

    await this.personalOptionService.createAll(options);
  }
}
