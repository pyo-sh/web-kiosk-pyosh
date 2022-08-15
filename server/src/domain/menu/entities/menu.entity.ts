import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Product } from "src/domain/product/entities/product.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

@Entity()
export class Menu {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ApiProperty()
  @IsString()
  @Column({ type: "varchar", length: 20 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany((type) => Product, (product) => product.menu)
  products: Product[];
}
