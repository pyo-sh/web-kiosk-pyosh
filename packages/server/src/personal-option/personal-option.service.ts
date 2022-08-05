import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBillDto } from "src/bill/dto/create-bill.dto";
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

  findOne(id: number): Promise<PersonalOption> {
    return this.personalOptionRepository.findOneBy({ id });
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
    await this.personalOptionRepository.update(id, updatePersonalOptionDto);
    return this.personalOptionRepository.create({
      ...purePersonalOption,
      ...updatePersonalOptionDto,
    });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.personalOptionRepository.delete({ id });
  }
}
