import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillProductService } from './bill-product.service';
import { CreateBillProductDto } from './dto/create-bill-product.dto';
import { UpdateBillProductDto } from './dto/update-bill-product.dto';

@Controller('bill-product')
export class BillProductController {
  constructor(private readonly billProductService: BillProductService) {}

  @Post()
  create(@Body() createBillProductDto: CreateBillProductDto) {
    return this.billProductService.create(createBillProductDto);
  }

  @Get()
  findAll() {
    return this.billProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillProductDto: UpdateBillProductDto) {
    return this.billProductService.update(+id, updateBillProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billProductService.remove(+id);
  }
}
