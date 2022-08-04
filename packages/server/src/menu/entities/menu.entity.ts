import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product } from "src/product/entities/product.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString()
  @Column({ type: "varchar", length: 20 })
  name: string;

  @OneToMany((type) => Product, (product) => product.menu)
  products: Product[];
}
