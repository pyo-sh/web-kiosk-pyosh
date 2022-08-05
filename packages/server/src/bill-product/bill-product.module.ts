import { Module } from "@nestjs/common";
import { BillProductService } from "./bill-product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillProduct } from "./entities/bill-product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BillProduct])],
  providers: [BillProductService],
  exports: [TypeOrmModule, BillProductService],
})
export class BillProductModule {}
