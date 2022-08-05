import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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
    return this.billProductRepository.save(createBillProductDto);
  }

  createAll(createBillProductDtos: CreateBillProductDto[]) {
    return this.billProductRepository.save(createBillProductDtos);
  }

  findAll(): Promise<BillProduct[]> {
    return this.billProductRepository.find();
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
    await this.billProductRepository.update({ billId, productId }, updateBillProductDto);
    return { ...pureBillProduct, ...updateBillProductDto };
  }

  remove(billId: number, productId: number) {
    return this.billProductRepository.delete({ billId, productId });
  }
}
