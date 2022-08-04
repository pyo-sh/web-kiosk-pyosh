import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";

@ApiTags("상품 API")
@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: "상품 생성 API", description: "상품을 생성하고 정보를 반환한다" })
  @ApiCreatedResponse({ description: "생성 성공" })
  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Res() res: Response) {
    const product = await this.productService.create(createProductDto);
    return res.status(HttpStatus.CREATED).json({ product });
  }

  @ApiOperation({ summary: "전체 상품 읽기 API", description: "전체 상품을 읽어서 반환한다" })
  @ApiOkResponse({ description: "읽기 성공" })
  @Get()
  async findAll(@Res() res: Response) {
    const products = await this.productService.findAll();
    return res.status(HttpStatus.OK).json({ products });
  }

  @ApiOperation({ summary: "상품 읽기 API", description: "id에 해당하는 메뉴를 반환한다" })
  @ApiOkResponse({ description: "읽기 성공" })
  @Get(":id")
  async findOne(@Param("id") id: number, @Res() res: Response) {
    const product = await this.productService.findOne(+id);
    return res.status(HttpStatus.OK).json({ product });
  }

  @ApiOperation({
    summary: "상품 수정 API",
    description: "id에 해당하는 상품을 정보와 같이 바꾸고 반환한다",
  })
  @ApiOkResponse({ description: "수정 성공" })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Res() res: Response,
  ) {
    const product = await this.productService.update(+id, updateProductDto);
    return res.status(HttpStatus.OK).json({ product });
  }

  @ApiOperation({ summary: "상품 삭제 API", description: "id에 해당하는 상품을 삭제합니다" })
  @ApiNoContentResponse({ description: "삭제 성공" })
  @Delete(":id")
  async remove(@Param("id") id: string, @Res() res: Response) {
    await this.productService.remove(+id);
    return res.status(HttpStatus.NO_CONTENT).end();
  }
}
