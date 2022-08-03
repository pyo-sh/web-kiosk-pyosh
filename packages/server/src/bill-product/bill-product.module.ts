import { Module } from '@nestjs/common';
import { BillProductService } from './bill-product.service';
import { BillProductController } from './bill-product.controller';

@Module({
  controllers: [BillProductController],
  providers: [BillProductService]
})
export class BillProductModule {}
