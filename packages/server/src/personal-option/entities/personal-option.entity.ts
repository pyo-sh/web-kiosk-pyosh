import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Product } from "src/product/entities/product.entity";
import { OptionType } from "src/common/enums";

@Entity()
export class PersonalOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column()
  price: number;

  @Column({ type: "enum", enum: OptionType })
  optionType: OptionType;

  @Column({ type: "varchar", length: 40 })
  category: string;

  @ManyToOne((type) => Product, (personalOption) => personalOption.personalOptions)
  product: Product;
}
