import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
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
    return this.personalOptionRepository.save(createPersonalOptionDto);
  }

  findAll(): Promise<PersonalOption[]> {
    return this.personalOptionRepository.find();
  }

  findOne(id: number): Promise<PersonalOption> {
    return this.personalOptionRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePersonalOptionDto: UpdatePersonalOptionDto,
  ): Promise<PersonalOption> {
    const purePersonalOption = await this.personalOptionRepository.findOneBy({ id });
    await this.personalOptionRepository.update(id, updatePersonalOptionDto);
    return { ...purePersonalOption, ...updatePersonalOptionDto };
  }

  remove(id: number): Promise<DeleteResult> {
    return this.personalOptionRepository.delete({ id });
  }
}
