import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { CreateMenuDto } from "./dto/create-menu.dto";
import { UpdateMenuDto } from "./dto/update-menu.dto";
import { Menu } from "./entities/menu.entity";

@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private menuRepository: Repository<Menu>) {
    this.menuRepository = menuRepository;
  }

  create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const newMenu = this.menuRepository.create(createMenuDto);
    return this.menuRepository.save(newMenu);
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  async findOne(id: number): Promise<Menu> {
    const menu = await this.menuRepository.findOneBy({ id });
    if (!menu) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: "요청 오류: 해당 메뉴를 찾을 수 없습니다!",
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return menu;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const pureMenu = await this.menuRepository.findOneBy({ id });
    if (!pureMenu) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 메뉴 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.menuRepository.update(id, updateMenuDto);
    return { ...pureMenu, ...updateMenuDto };
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.menuRepository.delete({ id });
    if (result.affected <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 메뉴 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return result;
  }
}
