import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Menu } from "src/domain/menu/entities/menu.entity";
import { BillProduct } from "src/domain/bill-product/entities/bill-product.entity";
import { PersonalOption } from "src/domain/personal-option/entities/personal-option.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: "varchar", length: 20 })
  name: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column({ type: "varchar", length: 255 })
  image: string;

  @ApiProperty()
  @IsNumber()
  @Column()
  menuId: number;

  @ManyToOne((type) => Menu, (menu) => menu.products)
  menu: Menu;

  @OneToMany((type) => BillProduct, (billProduct) => billProduct.product)
  billProducts: BillProduct[];

  @OneToMany((type) => PersonalOption, (personalOption) => personalOption.product)
  personalOptions: PersonalOption[];
}
