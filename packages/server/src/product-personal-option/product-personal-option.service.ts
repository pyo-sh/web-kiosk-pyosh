import { Injectable } from "@nestjs/common";
import { CreateProductPersonalOptionDto } from "./dto/create-product-personal-option.dto";
import { UpdateProductPersonalOptionDto } from "./dto/update-product-personal-option.dto";

@Injectable()
export class ProductPersonalOptionService {
  create(createProductPersonalOptionDto: CreateProductPersonalOptionDto) {
    return "This action adds a new productPersonalOption";
  }

  findAll() {
    return `This action returns all productPersonalOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productPersonalOption`;
  }

  update(id: number, updateProductPersonalOptionDto: UpdateProductPersonalOptionDto) {
    return `This action updates a #${id} productPersonalOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPersonalOption`;
  }
}
