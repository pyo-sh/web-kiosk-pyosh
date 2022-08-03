import { PartialType } from '@nestjs/mapped-types';
import { CreateProductPersonalOptionDto } from './create-product-personal-option.dto';

export class UpdateProductPersonalOptionDto extends PartialType(CreateProductPersonalOptionDto) {}
