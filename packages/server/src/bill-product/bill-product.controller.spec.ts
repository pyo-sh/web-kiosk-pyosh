import { Test, TestingModule } from '@nestjs/testing';
import { BillProductController } from './bill-product.controller';
import { BillProductService } from './bill-product.service';

describe('BillProductController', () => {
  let controller: BillProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillProductController],
      providers: [BillProductService],
    }).compile();

    controller = module.get<BillProductController>(BillProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
