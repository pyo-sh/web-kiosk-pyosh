import { Module } from "@nestjs/common";
import { BillService } from "./bill.service";
import { BillController } from "./bill.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bill } from "./entities/bill.entity";
import { BillProductModule } from "src/domain/bill-product/bill-product.module";
import { ProductModule } from "src/domain/product/product.module";
import { PersonalOptionModule } from "src/domain/personal-option/personal-option.module";
import { BillCreateService } from "./bill-create.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Bill]),
    BillProductModule,
    ProductModule,
    PersonalOptionModule,
  ],
  controllers: [BillController],
  providers: [BillService, BillCreateService],
})
export class BillModule {}
