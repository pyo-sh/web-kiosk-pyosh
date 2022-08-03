import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product } from "src/product/entities/product.entity";

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @OneToMany((type) => Product, (product) => product.menu)
  products: Product[];
}
