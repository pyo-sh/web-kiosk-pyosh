import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { getYesterdayEnd } from "src/util/date";
import { MoreThan, Repository } from "typeorm";
import { CreateBillProductDto } from "./dto/create-bill-product.dto";
import { UpdateBillProductDto } from "./dto/update-bill-product.dto";
import { BillProduct } from "./entities/bill-product.entity";

@Injectable()
export class BillProductService {
  constructor(
    @InjectRepository(BillProduct) private billProductRepository: Repository<BillProduct>,
  ) {
    this.billProductRepository = billProductRepository;
  }
  async create(createBillProductDto: CreateBillProductDto) {
    try {
      const newBillProduct = this.billProductRepository.create(createBillProductDto);
      const billProduct = await this.billProductRepository.save(newBillProduct);
      return billProduct;
    } catch ({ errno }) {
      if (errno === 1364) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: "요청 오류: 물품 주문 목록에서 빠진 것이 있습니다!",
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

  createAll(createBillProductDtos: CreateBillProductDto[]) {
    return this.billProductRepository.save(createBillProductDtos);
  }

  findAll(): Promise<BillProduct[]> {
    return this.billProductRepository.find();
  }

  async countAllByMenuId(menuId: number): Promise<Map<number, number>> {
    const yesterday = getYesterdayEnd();

    const billProducts = await this.billProductRepository.find({
      select: {
        productId: true,
        count: true,
      },
      where: {
        product: { menuId },
        createdAt: MoreThan(yesterday),
      },
    });

    return billProducts.reduce((counter, { productId, count }) => {
      const preCount = counter.get(productId) || 0;
      return counter.set(productId, preCount + count);
    }, new Map());
  }

  async findOne(billId: number, productId: number): Promise<BillProduct> {
    const billProduct = await this.billProductRepository.findOneBy({ billId, productId });
    if (!billProduct) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: "요청 오류: 해당 물품 주문 목록을 찾을 수 없습니다!",
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return billProduct;
  }

  async update(
    billId: number,
    productId: number,
    updateBillProductDto: UpdateBillProductDto,
  ): Promise<BillProduct> {
    const pureBillProduct = await this.billProductRepository.findOneBy({ billId, productId });
    if (!pureBillProduct) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 수정 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.billProductRepository.update({ billId, productId }, updateBillProductDto);
    return this.billProductRepository.create({ ...pureBillProduct, ...updateBillProductDto });
  }

  async remove(billId: number, productId: number) {
    const result = await this.billProductRepository.delete({ billId, productId });
    if (result.affected <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 상품 주문 목록 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return result;
  }
}
