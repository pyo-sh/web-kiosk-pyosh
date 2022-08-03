import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalOptionService } from './personal-option.service';
import { CreatePersonalOptionDto } from './dto/create-personal-option.dto';
import { UpdatePersonalOptionDto } from './dto/update-personal-option.dto';

@Controller('personal-option')
export class PersonalOptionController {
  constructor(private readonly personalOptionService: PersonalOptionService) {}

  @Post()
  create(@Body() createPersonalOptionDto: CreatePersonalOptionDto) {
    return this.personalOptionService.create(createPersonalOptionDto);
  }

  @Get()
  findAll() {
    return this.personalOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalOptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalOptionDto: UpdatePersonalOptionDto) {
    return this.personalOptionService.update(+id, updatePersonalOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalOptionService.remove(+id);
  }
}
