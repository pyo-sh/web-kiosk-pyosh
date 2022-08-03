import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Menu } from "src/menu/entities/menu.entity";

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
}
