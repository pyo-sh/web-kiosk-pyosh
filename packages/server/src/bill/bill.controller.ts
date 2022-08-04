import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from "@nestjs/common";
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";
import { BillService } from "./bill.service";
import { CreateBillDto } from "./dto/create-bill.dto";
import { UpdateBillDto } from "./dto/update-bill.dto";

@ApiTags("영수증 API")
@Controller("bill")
export class BillController {
  constructor(private readonly billService: BillService) {}

  @ApiOperation({ summary: "영수증 생성 API", description: "영수증을 생성하고 정보를 반환한다" })
  @ApiCreatedResponse({ description: "생성 성공" })
  @Post()
  async create(@Body() createBillDto: CreateBillDto, @Res() res: Response) {
    const bill = await this.billService.create(createBillDto);
    return res.status(HttpStatus.CREATED).json({ bill });
  }

  @ApiOperation({ summary: "전체 영수증 읽기 API", description: "영수증 모두 읽기" })
  @ApiOkResponse({ description: "읽기 성공" })
  @Get()
  async findAll(@Res() res: Response) {
    const bills = await this.billService.findAll();
    return res.status(HttpStatus.OK).json({ bills });
  }

  @ApiOperation({ summary: "영수증 읽기 API", description: "영수증 ID로 찾기" })
  @ApiOkResponse({ description: "읽기 성공" })
  @Get(":id")
  async findOne(@Param("id") id: string, @Res() res: Response) {
    const bill = await this.billService.findOne(+id);
    return res.status(HttpStatus.OK).json({ bill });
  }

  @ApiOperation({ summary: "영수증 수정 API", description: "영수증 수정" })
  @ApiOkResponse({ description: "수정 성공" })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateBillDto: UpdateBillDto,
    @Res() res: Response,
  ) {
    const bill = await this.billService.update(+id, updateBillDto);
    return res.status(HttpStatus.OK).json({ bill });
  }

  @ApiOperation({ summary: "영수증 삭제 API", description: "영수증 삭제" })
  @ApiNoContentResponse({ description: "삭제 성공" })
  @Delete(":id")
  async remove(@Param("id") id: string, @Res() res: Response) {
    await this.billService.remove(+id);
    return res.status(HttpStatus.NO_CONTENT).end();
  }
}
