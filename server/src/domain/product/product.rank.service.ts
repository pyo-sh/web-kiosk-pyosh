import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BillProductService } from "../bill-product/bill-product.service";
import { MenuService } from "../menu/menu.service";
import { GetAllProductDto } from "./dto/get-all-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductRankService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    private readonly menuService: MenuService,
    private readonly billProductService: BillProductService,
  ) {}

  async getAllProducts(): Promise<GetAllProductDto[]> {
    const menus = await this.menuService.findAll();
    const products = await Promise.all(menus.map(({ id: menuId }) => this.rankProducts(menuId)));
    const allProducts: GetAllProductDto[] = menus.map((menu, i) => ({
      ...menu,
      products: products[i],
    }));
    return allProducts;
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
