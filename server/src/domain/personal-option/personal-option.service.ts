import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBillDto } from "src/domain/bill/dto/create-bill.dto";
import { arrayToObjectById } from "src/util/array";
import { DeleteResult, In, Repository } from "typeorm";
import { CreatePersonalOptionDto } from "./dto/create-personal-option.dto";
import { UpdatePersonalOptionDto } from "./dto/update-personal-option.dto";
import { PersonalOption } from "./entities/personal-option.entity";

@Injectable()
export class PersonalOptionService {
  constructor(
    @InjectRepository(PersonalOption) private personalOptionRepository: Repository<PersonalOption>,
  ) {
    this.personalOptionRepository = personalOptionRepository;
  }

  async create(createPersonalOptionDto: CreatePersonalOptionDto): Promise<PersonalOption> {
    try {
      const newPersonalOption = this.personalOptionRepository.create(createPersonalOptionDto);
      const personalOption = await this.personalOptionRepository.save(newPersonalOption);
      return personalOption;
    } catch ({ errno }) {
      if (errno === 1364) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: "요청 오류: 상품 옵션 항목에서 빠진 것이 있습니다!",
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: "서버 오류: 데이터 베이스에 오류가 있습니다. 다시 요청해주세요!",
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createAll(createPersonalOptionDtos: CreatePersonalOptionDto[]) {
    const { identifiers } = await this.personalOptionRepository
      .createQueryBuilder("personal-option")
      .insert()
      .into(PersonalOption)
      .values(createPersonalOptionDtos)
      .execute();
    return identifiers;
  }

  findAll(): Promise<PersonalOption[]> {
    return this.personalOptionRepository.find();
  }

  async findOne(id: number): Promise<PersonalOption> {
    const personalOption = await this.personalOptionRepository.findOneBy({ id });
    if (!personalOption) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: "요청 오류: 해당 상품 옵션을 찾을 수 없습니다!",
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return personalOption;
  }

  async findByProductId(productId: number): Promise<PersonalOption[]> {
    try {
      const personalOption = await this.personalOptionRepository.findBy({ productId });
      return personalOption;
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: "요청 오류: 해당 상품 옵션에 문제가 있습니다",
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findByCreateBillDto({
    products,
  }: CreateBillDto): Promise<{ [id: string]: PersonalOption }> {
    try {
      const optionIds = [
        ...products.reduce((idSet, { personalOptionIds: ids }) => {
          ids.forEach(({ id }) => {
            if (!id) throw Error("요청 오류: 상품 옵션의 ID 값이 없습니다.");
            idSet.add(id);
          });
          return idSet;
        }, new Set<number>()),
      ];
      const optionArray = await this.personalOptionRepository.find({
        where: { id: In(optionIds) },
      });

      const hasEmpty = optionArray.length !== optionIds.length;
      if (hasEmpty) throw new Error("요청 오류: 존재하지 않는 상품 번호에 접근했습니다.");

      return arrayToObjectById(optionArray);
    } catch ({ message }) {
      if (!message) message = "요청 오류: 잘못된 상품 옵션 결제 요청으로 결제가 취소됩니다";
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(
    id: number,
    updatePersonalOptionDto: UpdatePersonalOptionDto,
  ): Promise<PersonalOption> {
    const purePersonalOption = await this.personalOptionRepository.findOneBy({ id });
    if (!purePersonalOption) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 옵션 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.personalOptionRepository.update(id, updatePersonalOptionDto);
    return this.personalOptionRepository.create({
      ...purePersonalOption,
      ...updatePersonalOptionDto,
    });
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.personalOptionRepository.delete({ id });
    if (result.affected <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "요청 오류: 올바르지 않은 상품 옵션 번호입니다!",
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return result;
  }
}
