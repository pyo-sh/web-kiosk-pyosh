import { Injectable } from '@nestjs/common';
import { CreateBillProductDto } from './dto/create-bill-product.dto';
import { UpdateBillProductDto } from './dto/update-bill-product.dto';

@Injectable()
export class BillProductService {
  create(createBillProductDto: CreateBillProductDto) {
    return 'This action adds a new billProduct';
  }

  findAll() {
    return `This action returns all billProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billProduct`;
  }

  update(id: number, updateBillProductDto: UpdateBillProductDto) {
    return `This action updates a #${id} billProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} billProduct`;
  }
}
