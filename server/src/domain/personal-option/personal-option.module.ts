import { Module } from "@nestjs/common";
import { PersonalOptionService } from "./personal-option.service";
import { PersonalOptionController } from "./personal-option.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonalOption } from "./entities/personal-option.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PersonalOption])],
  controllers: [PersonalOptionController],
  providers: [PersonalOptionService],
  exports: [TypeOrmModule, PersonalOptionService],
})
export class PersonalOptionModule {}
