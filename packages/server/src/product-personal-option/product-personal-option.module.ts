import { Module } from '@nestjs/common';
import { ProductPersonalOptionService } from './product-personal-option.service';
import { ProductPersonalOptionController } from './product-personal-option.controller';

@Module({
  controllers: [ProductPersonalOptionController],
  providers: [ProductPersonalOptionService]
})
export class ProductPersonalOptionModule {}
