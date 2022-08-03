import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from "typeorm";

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "varchar", length: 20 })
  paymentMethod: string;

  @Column({ type: "decimal" })
  paymentPrice: number;

  @Column({ type: "decimal" })
  totalPrice: number;

  @CreateDateColumn()
  createdAt: Date;
}
