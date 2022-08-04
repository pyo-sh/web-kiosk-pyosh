import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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

  create(createPersonalOptionDto: CreatePersonalOptionDto) {
    return this.personalOptionRepository.create(createPersonalOptionDto);
  }

  findAll(): Promise<PersonalOption[]> {
    return this.personalOptionRepository.find();
  }

  findOne(id: number): Promise<PersonalOption> {
    return this.personalOptionRepository.findOneBy({ id });
  }

  update(id: number, updatePersonalOptionDto: UpdatePersonalOptionDto) {
    return this.personalOptionRepository.update(id, updatePersonalOptionDto);
  }

  remove(id: number) {
    return this.personalOptionRepository.delete({ id });
  }
}
