import { Module } from "@nestjs/common";
import { ProductPersonalOptionService } from "./product-personal-option.service";
import { ProductPersonalOptionController } from "./product-personal-option.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductPersonalOption } from "./entities/product-personal-option.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProductPersonalOption])],
  controllers: [ProductPersonalOptionController],
  providers: [ProductPersonalOptionService],
})
export class ProductPersonalOptionModule {}
