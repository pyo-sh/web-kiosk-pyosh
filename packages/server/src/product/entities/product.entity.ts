import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Menu } from "src/menu/entities/menu.entity";
import { BillProduct } from "src/bill-product/entities/bill-product.entity";
import { ProductPersonalOption } from "src/product-personal-option/entities/product-personal-option.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column()
  price: number;

  @Column({ type: "varchar", length: 255 })
  image: string;

  @ManyToOne((type) => Menu, (menu) => menu.products)
  menu: Menu;

  @OneToMany((type) => BillProduct, (billProduct) => billProduct.product)
  billProducts: BillProduct[];

  @OneToMany(
    (type) => ProductPersonalOption,
    (productPersonalOption) => productPersonalOption.product,
  )
  productPersonalOptions: ProductPersonalOption[];
}
