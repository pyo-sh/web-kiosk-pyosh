import { Module } from "@nestjs/common";
import { BillProductService } from "./bill-product.service";
import { BillProductController } from "./bill-product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillProduct } from "./entities/bill-product.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BillProduct])],
  controllers: [BillProductController],
  providers: [BillProductService],
})
export class BillProductModule {}
