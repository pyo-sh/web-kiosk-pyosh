import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBillDto } from "src/domain/bill/dto/create-bill.dto";
import { arrayToObjectById } from "src/util/array";
import { DeleteResult, In, Repository } from "typeorm";
import { CreatePersonalOptionDto } from "./dto/create-personal-option.dto";
import { UpdatePersonalOptionDto } from "./dto/update-personal-option.dto";
import { PersonalOption } from "./entities/personal-option.entity";

@Injectable()
export class PersonalOptionService {
  constructor(
    @InjectRepository(PersonalOption) private personalOptionRepository: Repository<PersonalOption>,
  ) {
    this.personalOptionRepository = personalOptionRepository;
  }

  create(createPersonalOptionDto: CreatePersonalOptionDto): Promise<PersonalOption> {
    const newPersonalOption = this.personalOptionRepository.create(createPersonalOptionDto);
    return this.personalOptionRepository.save(newPersonalOption);
  }

  findAll(): Promise<PersonalOption[]> {
    return this.personalOptionRepository.find();
  }

  async findOne(id: number): Promise<PersonalOption> {
    const personalOption = await this.personalOptionRepository.findOneBy({ id });
    if (!personalOption) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: "요청 오류: 해당 상품 옵션을 찾을 수 없습니다!",
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return personalOption;
  }

  async findByCreateBillDto({
    products,
  }: CreateBillDto): Promise<{ [id: string]: PersonalOption }> {
    const optionIds = [
      ...products.reduce((idSet, { personalOptionIds: ids }) => {
        ids.forEach(({ id }) => idSet.add(id));
        return idSet;
      }, new Set<number>()),
    ];
    const optionArray = await this.personalOptionRepository.find({ where: { id: In(optionIds) } });
    return arrayToObjectById(optionArray);
  }

  async update(
    id: number,
    updatePersonalOptionDto: UpdatePersonalOptionDto,
  ): Promise<PersonalOption> {
    const purePersonalOption = await this.personalOptionRepository.findOneBy({ id });
    if (!purePersonalOption) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 옵션 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.personalOptionRepository.update(id, updatePersonalOptionDto);
    return this.personalOptionRepository.create({
      ...purePersonalOption,
      ...updatePersonalOptionDto,
    });
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.personalOptionRepository.delete({ id });
    if (result.affected <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 상품 옵션 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return result;
  }
}
