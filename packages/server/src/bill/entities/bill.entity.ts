import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from "typeorm";
import { BillProduct } from "src/bill-product/entities/bill-product.entity";

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "varchar", length: 20 })
  paymentMethod: string;

  @Column({ type: "decimal" })
  paymentPrice: number;

  @Column({ type: "decimal" })
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany((type) => BillProduct, (billProduct) => billProduct.bill)
  billProducts: BillProduct[];
}
