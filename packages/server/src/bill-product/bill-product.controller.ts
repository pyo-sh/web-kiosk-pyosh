import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { BillProductService } from "./bill-product.service";
import { CreateBillProductDto } from "./dto/create-bill-product.dto";
import { DeleteBillProductDto } from "./dto/delete-bill-product.dto";
import { FindOneBillProductDto } from "./dto/findone-bill-product.dto";

@Controller("bill-product")
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

  @Get(":productId/:billId")
  findOne(@Param() ids: FindOneBillProductDto) {
    return this.billProductService.findOne(ids.billId, ids.productId);
  }

  @Delete(":productId/:billId")
  remove(@Param() ids: DeleteBillProductDto) {
    return this.billProductService.remove(ids.billId, ids.productId);
  }
}
