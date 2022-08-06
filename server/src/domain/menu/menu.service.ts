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
    return this.menuRepository.save(createMenuDto);
  }

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  findOne(id: number): Promise<Menu> {
    return this.menuRepository.findOneBy({ id });
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

  remove(id: number): Promise<DeleteResult> {
    return this.menuRepository.delete({ id });
  }
}
