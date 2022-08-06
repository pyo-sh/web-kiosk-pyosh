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
  create(createBillProductDto: CreateBillProductDto) {
    const newBillProduct = this.billProductRepository.create(createBillProductDto);
    return this.billProductRepository.save(newBillProduct);
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

  findOne(billId: number, productId: number): Promise<BillProduct> {
    return this.billProductRepository.findOneBy({ billId, productId });
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
