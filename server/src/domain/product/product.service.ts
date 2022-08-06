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

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const newProduct = this.productRepository.create(createProductDto);
      const product = await this.productRepository.save(newProduct);
      return product;
    } catch ({ errno }) {
      if (errno === 1364) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: "요청 오류: 상품 항목에서 빠진 것이 있습니다!",
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: "서버 오류: 데이터 베이스에 오류가 있습니다. 다시 요청해주세요!",
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
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
    try {
      const ids = [...new Set<number>(products.map(({ id }) => id))];
      const rows = await this.productRepository.find({ where: { id: In(ids) } });

      const hasEmpty = ids.length !== rows.length;
      if (hasEmpty) throw new Error("요청 오류: 존재하지 않는 상품 번호에 접근했습니다.");

      return arrayToObjectById(rows);
    } catch ({ message }) {
      if (!message) message = "요청 오류: 잘못된 상품 결제 요청으로 결제가 취소됩니다";
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
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
