import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CreateBillDto } from "./dto/create-bill.dto";
import { UpdateBillDto } from "./dto/update-bill.dto";
import { Bill } from "./entities/bill.entity";

@Injectable()
export class BillService {
  constructor(@InjectRepository(Bill) private billRepository: Repository<Bill>) {
    this.billRepository = billRepository;
  }

  create(createBillDto: CreateBillDto): Promise<Bill> {
    return this.billRepository.save(createBillDto);
  }

  findAll(): Promise<Bill[]> {
    return this.billRepository.find();
  }

  findOne(id: number): Promise<Bill> {
    return this.billRepository.findOneBy({ id });
  }

  async update(id: number, updateBillDto: UpdateBillDto): Promise<Bill> {
    const pureBill = await this.billRepository.findOneBy({ id });
    await this.billRepository.update(id, updateBillDto);
    return { ...pureBill, ...updateBillDto };
  }

  remove(id: number): Promise<DeleteResult> {
    return this.billRepository.delete({ id });
  }
}
