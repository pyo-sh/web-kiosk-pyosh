import { Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BillProductService } from "../bill-product/bill-product.service";
import { MenuService } from "../menu/menu.service";
import { GetAllProductDto } from "./dto/get-all-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductRankService {
  private menuWithRankedProducts: GetAllProductDto[];

  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    private readonly menuService: MenuService,
    private readonly billProductService: BillProductService,
  ) {
    this.setAllProducts();
  }

  getAllProducts(): GetAllProductDto[] {
    return this.menuWithRankedProducts;
  }

  @Interval(300000)
  async setAllProducts() {
    const menus = await this.menuService.findAll();
    const products = await Promise.all(menus.map(({ id: menuId }) => this.rankProducts(menuId)));
    this.menuWithRankedProducts = menus.map((menu, i) => ({ ...menu, products: products[i] }));
  }

  async rankProducts(menuId: number): Promise<Product[]> {
    const [product, counter] = await Promise.all([
      this.productRepository.find({ where: { menuId } }),
      this.billProductService.countAllByMenuId(menuId),
    ]);

    return product.sort(({ id: aId }, { id: bId }) => {
      const aCount = counter.get(aId) || 0;
      const bCount = counter.get(bId) || 0;
      return bCount - aCount;
    });
  }
}
