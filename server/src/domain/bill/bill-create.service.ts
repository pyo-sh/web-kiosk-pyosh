import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BillProductService } from "src/domain/bill-product/bill-product.service";
import { OptionType } from "src/common/enums";
import { PersonalOption } from "src/domain/personal-option/entities/personal-option.entity";
import { PersonalOptionService } from "src/domain/personal-option/personal-option.service";
import { ProductService } from "src/domain/product/product.service";
import { Repository } from "typeorm";
import { CreateBillDto } from "./dto/create-bill.dto";
import { CreateBuiltOptionDto } from "./dto/create-built-option.dto";
import { Bill } from "./entities/bill.entity";

@Injectable()
export class BillCreateService {
  constructor(
    @InjectRepository(Bill) private billRepository: Repository<Bill>,
    private readonly productService: ProductService,
    private readonly personalOptionService: PersonalOptionService,
    private readonly billProductService: BillProductService,
  ) {}

  async create(createBillDto: CreateBillDto) {
    const { totalPrice, content } = await this.getPriceTag(createBillDto);

    const { paymentMethod, paymentPrice } = createBillDto;
    if (totalPrice === 0 && !createBillDto.products.length) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "결제 오류: 상품을 추가해주세요",
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (paymentPrice < totalPrice) {
      console.log(totalPrice);
      throw new HttpException(
        {
          status: HttpStatus.PAYMENT_REQUIRED,
          error: "결제 오류: 물품 가격에 알맞은 결제를 행해주세요!",
        },
        HttpStatus.PAYMENT_REQUIRED,
      );
    }

    try {
      const newBill = this.billRepository.create({
        content,
        paymentMethod,
        paymentPrice,
        totalPrice,
      });

      const bill = await this.billRepository.save(newBill);

      const productCounter = this.getProductCounts(createBillDto);
      const billProducts = Array.from(productCounter).map(([productId, count]) => ({
        productId,
        billId: bill.id,
        count,
      }));
      this.billProductService.createAll(billProducts);

      return bill;
    } catch ({ errno }) {
      if (errno === 1364) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: "요청 오류: 결제 중 빠진 요청이 있습니다!",
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

  getProductCounts(createBillDto: CreateBillDto): Map<number, number> {
    const counter = new Map();

    createBillDto.products.forEach(({ id, count }) => {
      counter.set(id, (counter.get(id) || 0) + count);
    });

    return counter;
  }

  async getPriceTag(createBillDto: CreateBillDto) {
    const [products, options] = await Promise.all([
      this.productService.findByCreateBillDto(createBillDto),
      this.personalOptionService.findByCreateBillDto(createBillDto),
    ]);

    const [totalPrice, productStrings] = createBillDto.products.reduce(
      ([totalPrice, productStrings], { id, count, personalOptionIds }) => {
        if (count <= 0 || !count)
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: "요청 문제: 물품의 수량이 올바르지 않습니다!",
            },
            HttpStatus.BAD_REQUEST,
          );
        let { name: productName, price: productPrice } = products[id];
        const { optionsPrice, optionContent } = this.getOptionPriceTag(personalOptionIds, options);

        const price = (productPrice + optionsPrice) * count;
        const productInfo = `${productName}${optionContent} ${count}개 ${price}원`;

        return [totalPrice + price, [...productStrings, productInfo]];
      },
      [0, []],
    );

    const content = productStrings.join("\n");
    return { totalPrice, content };
  }

  getOptionPriceTag(
    personalOptionIds: CreateBuiltOptionDto[],
    optionRows: { [id: string]: PersonalOption },
  ) {
    const duplicateChecker = new Map();
    const [totalPrice, optionStrings] = personalOptionIds.reduce(
      ([totalPrice, optionStrings], { id: pOId, count: pOCount }) => {
        const { name, price, optionType, category } = optionRows[pOId];

        let optionPrice = 0;
        if (optionType === OptionType.RADIO) {
          if (duplicateChecker.has(category))
            throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: "요청 문제: 물품 옵션이 중복되어 들어왔습니다!",
              },
              HttpStatus.BAD_REQUEST,
            );
          duplicateChecker.set(category, name);
          optionPrice = price;
        }
        if (optionType === OptionType.COUNT) {
          if (pOCount <= 0 || !pOCount)
            throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: "요청 문제: 물품 옵션 수량이 올바르지 않습니다!",
              },
              HttpStatus.BAD_REQUEST,
            );
          optionPrice = price * pOCount;
        }
        if (optionType === OptionType.CHECK) {
          optionPrice += price;
        }

        const countInfo = pOCount ? `(${pOCount})` : "";
        const optionInfo = `${name}${countInfo}`;
        return [totalPrice + optionPrice, [...optionStrings, optionInfo]];
      },
      [0, []],
    );

    let optionContent = optionStrings.length !== 0 ? `[${optionStrings.join(", ")}]` : "";
    return { optionsPrice: totalPrice, optionContent };
  }
}
