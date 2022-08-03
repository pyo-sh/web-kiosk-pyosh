import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProductPersonalOption } from "src/product-personal-option/entities/product-personal-option.entity";

@Entity()
export class PersonalOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column({ type: "varchar", length: 40 })
  category: string;

  @OneToMany(
    (type) => ProductPersonalOption,
    (productPersonalOption) => productPersonalOption.personalOption,
  )
  productPersonalOptions: ProductPersonalOption[];
}
