import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Product } from "src/product/entities/product.entity";
import { PersonalOption } from "src/personal-option/entities/personal-option.entity";

@Entity()
export class ProductPersonalOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "varchar", length: 40 })
  kind: string;

  @ManyToOne((type) => Product, (product) => product.productPersonalOptions)
  product: Product;

  @ManyToOne((type) => PersonalOption, (personalOption) => personalOption.productPersonalOptions)
  personalOption: PersonalOption;
}
