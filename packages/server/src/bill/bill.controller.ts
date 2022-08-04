import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { BillService } from "./bill.service";
import { CreateBillDto } from "./dto/create-bill.dto";
import { UpdateBillDto } from "./dto/update-bill.dto";

@ApiTags("영수증 API")
@Controller("bill")
export class BillController {
  constructor(private readonly billService: BillService) {}

  @ApiOperation({ description: "영수증 생성" })
  @Post()
  create(@Body() createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  @ApiOperation({ description: "영수증 모두 읽기" })
  @Get()
  findAll() {
    return this.billService.findAll();
  }

  @ApiOperation({ description: "영수증 ID로 찾기" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.billService.findOne(+id);
  }

  @ApiOperation({ description: "영수증 수정" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBillDto: UpdateBillDto) {
    return this.billService.update(+id, updateBillDto);
  }

  @ApiOperation({ description: "영수증 삭제" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.billService.remove(+id);
  }
}
