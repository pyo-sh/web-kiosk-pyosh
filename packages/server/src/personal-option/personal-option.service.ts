import { Injectable } from '@nestjs/common';
import { CreatePersonalOptionDto } from './dto/create-personal-option.dto';
import { UpdatePersonalOptionDto } from './dto/update-personal-option.dto';

@Injectable()
export class PersonalOptionService {
  create(createPersonalOptionDto: CreatePersonalOptionDto) {
    return 'This action adds a new personalOption';
  }

  findAll() {
    return `This action returns all personalOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalOption`;
  }

  update(id: number, updatePersonalOptionDto: UpdatePersonalOptionDto) {
    return `This action updates a #${id} personalOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalOption`;
  }
}
