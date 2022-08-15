import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from "@nestjs/common";
import { PersonalOptionService } from "./personal-option.service";
import { CreatePersonalOptionDto } from "./dto/create-personal-option.dto";
import { UpdatePersonalOptionDto } from "./dto/update-personal-option.dto";
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";

@ApiTags("상품 옵션 API")
@Controller("personal-option")
export class PersonalOptionController {
  constructor(private readonly personalOptionService: PersonalOptionService) {}

  @ApiOperation({
    summary: "상품 옵션 생성 API",
    description: "상품 옵션을 생성하고 정보를 반환한다",
  })
  @ApiCreatedResponse({ description: "생성 성공" })
  @Post()
  async create(@Body() createPersonalOptionDto: CreatePersonalOptionDto, @Res() res: Response) {
    const personalOption = await this.personalOptionService.create(createPersonalOptionDto);
    return res.status(HttpStatus.CREATED).json({ personalOption });
  }

  @ApiOperation({ summary: "전체 상품 옵션 읽기 API", description: "상품 옵션 모두 읽기" })
  @ApiOkResponse({ description: "읽기 성공" })
  @Get()
  async findAll(@Res() res: Response) {
    const personalOptions = await this.personalOptionService.findAll();
    return res.status(HttpStatus.OK).json({ personalOptions });
  }

  @ApiOperation({ summary: "상품 옵션 읽기 API", description: "상품 ID로 상품 옵션들 찾기" })
  @ApiOkResponse({ description: "전체 읽기 성공" })
  @Get(":id")
  async findByProductId(@Param("id") productId: number, @Res() res: Response) {
    const personalOptions = await this.personalOptionService.findByProductId(+productId);
    return res.status(HttpStatus.OK).json({ personalOptions });
  }

  @ApiOperation({ summary: "상품 옵션 수정 API", description: "상품 옵션 수정" })
  @ApiOkResponse({ description: "수정 성공" })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updatePersonalOptionDto: UpdatePersonalOptionDto,
    @Res() res: Response,
  ) {
    const personalOption = await this.personalOptionService.update(+id, updatePersonalOptionDto);
    return res.status(HttpStatus.OK).json({ personalOption });
  }

  @ApiOperation({ summary: "상품 옵션 삭제 API", description: "상품 옵션 삭제" })
  @ApiNoContentResponse({ description: "삭제 성공" })
  @Delete(":id")
  async remove(@Param("id") id: string, @Res() res: Response) {
    await this.personalOptionService.remove(+id);
    return res.status(HttpStatus.NO_CONTENT).end();
  }
}
