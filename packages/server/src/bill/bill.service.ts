import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { UpdateBillDto } from "./dto/update-bill.dto";
import { Bill } from "./entities/bill.entity";

@Injectable()
export class BillService {
  constructor(@InjectRepository(Bill) private billRepository: Repository<Bill>) {
    this.billRepository = billRepository;
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
    return this.billRepository.create({ ...pureBill, ...updateBillDto });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.billRepository.delete({ id });
  }
}
