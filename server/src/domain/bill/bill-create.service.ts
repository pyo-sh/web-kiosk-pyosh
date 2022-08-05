import { Injectable } from "@nestjs/common";
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
    if (paymentPrice < totalPrice) throw Error("Payment: Insufficient cash");

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
        if (count <= 0) throw Error("Product: Invalid Counts");
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
          if (duplicateChecker.has(category)) throw Error("Personal Option: Duplicated Radio!");
          duplicateChecker.set(category, name);
          optionPrice = price;
        }
        if (optionType === OptionType.COUNT) {
          if (pOCount <= 0) throw Error("Personal Option: Invalid Counts");
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
