import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalOptionDto } from './create-personal-option.dto';

export class UpdatePersonalOptionDto extends PartialType(CreatePersonalOptionDto) {}
