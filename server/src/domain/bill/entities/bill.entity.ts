import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { BillProduct } from "src/domain/bill-product/entities/bill-product.entity";
import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Bill {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ApiProperty()
  @IsString()
  @Column({ type: "text" })
  content: string;

  @ApiProperty()
  @IsString()
  @Column({ type: "varchar", length: 20 })
  paymentMethod: string;

  @ApiProperty()
  @IsNumber()
  @Column({ type: "decimal" })
  paymentPrice: number;

  @ApiProperty()
  @IsNumber()
  @Column({ type: "decimal" })
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany((type) => BillProduct, (billProduct) => billProduct.bill)
  billProducts: BillProduct[];
}
