import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { MenuModule } from "../menu/menu.module";
import { BillProductModule } from "../bill-product/bill-product.module";
import { ProductRankService } from "./product.rank.service";

@Module({
  imports: [TypeOrmModule.forFeature([Product]), MenuModule, BillProductModule],
  controllers: [ProductController],
  providers: [ProductService, ProductRankService],
  exports: [TypeOrmModule, ProductService],
})
export class ProductModule {}
