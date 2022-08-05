import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBillDto } from "src/domain/bill/dto/create-bill.dto";
import { arrayToObjectById } from "src/util/array";
import { DeleteResult, In, Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
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

  async findByCreateBillDto({ products }: CreateBillDto): Promise<{ [id: string]: Product }> {
    const ids = [...new Set<number>(products.map(({ id }) => id))];
    const rows = await this.productRepository.find({ where: { id: In(ids) } });
    return arrayToObjectById(rows);
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