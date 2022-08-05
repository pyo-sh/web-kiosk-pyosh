import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { CreateMenuDto } from "./dto/create-menu.dto";
import { UpdateMenuDto } from "./dto/update-menu.dto";
import { Response } from "express";
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("메뉴 API")
@Controller("menu")
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: "메뉴 생성 API", description: "메뉴 생성하고 정보를 반환한다" })
  @ApiCreatedResponse({ description: "생성 성공" })
  @Post()
  async create(@Body() createMenuDto: CreateMenuDto, @Res() res: Response) {
    const menu = await this.menuService.create(createMenuDto);
    return res.status(HttpStatus.CREATED).json({ menu });
  }

  @ApiOperation({ summary: "전체 메뉴 읽기 API", description: "전체 메뉴를 읽어서 반환한다" })
  @ApiOkResponse({ description: "읽기 성공" })
  @Get()
  async findAll(@Res() res: Response) {
    const menus = await this.menuService.findAll();
    return res.status(HttpStatus.OK).json({ menus });
  }

  @ApiOperation({ summary: "메뉴 읽기 API", description: "id에 해당하는 메뉴를 반환한다" })
  @ApiOkResponse({ description: "읽기 성공" })
  @Get(":id")
  async findOne(@Param("id") id: string, @Res() res: Response) {
    const menu = await this.menuService.findOne(+id);
    return res.status(HttpStatus.OK).json({ menu });
  }

  @ApiOperation({
    summary: "메뉴 수정 API",
    description: "id에 해당하는 메뉴를 정보와 같이 바꾸고 반환한다",
  })
  @ApiOkResponse({ description: "수정 성공" })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateMenuDto: UpdateMenuDto,
    @Res() res: Response,
  ) {
    const updatedMenu = await this.menuService.update(+id, updateMenuDto);
    return res.status(HttpStatus.OK).json({ menu: updatedMenu });
  }

  @ApiOperation({ summary: "메뉴 삭제 API", description: "id에 해당하는 메뉴를 삭제합니다" })
  @ApiNoContentResponse({ description: "삭제 성공" })
  @Delete(":id")
  async remove(@Param("id") id: string, @Res() res: Response) {
    await this.menuService.remove(+id);
    return res.status(HttpStatus.NO_CONTENT).end();
  }
}
