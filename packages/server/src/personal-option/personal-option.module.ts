import { Module } from '@nestjs/common';
import { PersonalOptionService } from './personal-option.service';
import { PersonalOptionController } from './personal-option.controller';

@Module({
  controllers: [PersonalOptionController],
  providers: [PersonalOptionService]
})
export class PersonalOptionModule {}
