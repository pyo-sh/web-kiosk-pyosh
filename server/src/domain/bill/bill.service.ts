import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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
    if (!pureBill) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 영수증 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.billRepository.update(id, updateBillDto);
    return this.billRepository.create({ ...pureBill, ...updateBillDto });
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.billRepository.delete({ id });
    if (result.affected <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 영수증 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.billRepository.delete({ id });
  }
}
