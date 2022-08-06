import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: "요청 오류: 해당 상품을 찾을 수 없습니다!",
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return product;
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
    if (!pureProduct) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 옵션 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.productRepository.update(id, updateProductDto);
    return { ...pureProduct, ...updateProductDto };
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.productRepository.delete({ id });
    if (result.affected <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 상품 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return result;
  }
}
