import { Entity, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { Bill } from "src/bill/entities/bill.entity";
import { Product } from "src/product/entities/product.entity";

@Entity()
export class BillProduct {
  @Column()
  count: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne((type) => Bill, (bill) => bill.billProducts)
  bill: Bill;

  @ManyToOne((type) => Product, (product) => product.billProducts)
  product: Product;
}
