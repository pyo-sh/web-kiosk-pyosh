import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.save(createProductDto);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  findOneByIdWithOptions(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { id },
      relations: { personalOptions: true },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const pureProduct = await this.productRepository.findOneBy({ id });
    await this.productRepository.update(id, updateProductDto);
    return { ...pureProduct, ...updateProductDto };
  }

  remove(id: number): Promise<DeleteResult> {
    return this.productRepository.delete({ id });
  }
}
