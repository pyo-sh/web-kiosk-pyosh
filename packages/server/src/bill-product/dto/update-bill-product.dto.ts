import { PartialType } from '@nestjs/mapped-types';
import { CreateBillProductDto } from './create-bill-product.dto';

export class UpdateBillProductDto extends PartialType(CreateBillProductDto) {}
