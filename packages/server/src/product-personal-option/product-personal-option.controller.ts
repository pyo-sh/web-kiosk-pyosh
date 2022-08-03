import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductPersonalOptionService } from './product-personal-option.service';
import { CreateProductPersonalOptionDto } from './dto/create-product-personal-option.dto';
import { UpdateProductPersonalOptionDto } from './dto/update-product-personal-option.dto';

@Controller('product-personal-option')
export class ProductPersonalOptionController {
  constructor(private readonly productPersonalOptionService: ProductPersonalOptionService) {}

  @Post()
  create(@Body() createProductPersonalOptionDto: CreateProductPersonalOptionDto) {
    return this.productPersonalOptionService.create(createProductPersonalOptionDto);
  }

  @Get()
  findAll() {
    return this.productPersonalOptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPersonalOptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductPersonalOptionDto: UpdateProductPersonalOptionDto) {
    return this.productPersonalOptionService.update(+id, updateProductPersonalOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPersonalOptionService.remove(+id);
  }
}
