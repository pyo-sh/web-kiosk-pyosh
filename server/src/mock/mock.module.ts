import { Module } from "@nestjs/common";
import { MenuModule } from "src/domain/menu/menu.module";
import { PersonalOptionModule } from "src/domain/personal-option/personal-option.module";
import { ProductModule } from "src/domain/product/product.module";
import { MockService } from "./mock.service";

@Module({
  imports: [MenuModule, ProductModule, PersonalOptionModule],
  controllers: [],
  providers: [MockService],
})
export class MockModule {}
