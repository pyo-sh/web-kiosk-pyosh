import { Entity, Column, ManyToOne, CreateDateColumn, PrimaryColumn } from "typeorm";
import { Bill } from "src/domain/bill/entities/bill.entity";
import { Product } from "src/domain/product/entities/product.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

@Entity()
export class BillProduct {
  @ApiProperty()
  @IsNumber()
  @PrimaryColumn({ type: "int" })
  billId: number;

  @ApiProperty()
  @IsNumber()
  @PrimaryColumn({ type: "int" })
  productId: number;

  @ApiProperty()
  @IsNumber()
  @Column({ type: "int" })
  count: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne((type) => Bill, (bill) => bill.billProducts)
  bill: Bill;

  @ManyToOne((type) => Product, (product) => product.billProducts)
  product: Product;
}
