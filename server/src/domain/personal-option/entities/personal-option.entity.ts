import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Product } from "src/domain/product/entities/product.entity";
import { OptionType } from "src/common/enums";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";

@Entity()
export class PersonalOption {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ApiProperty()
  @IsString()
  @Column({ type: "varchar", length: 20 })
  name: string;

  @ApiProperty()
  @IsNumber()
  @Column({ type: "decimal" })
  price: number;

  @ApiProperty()
  @IsEnum(OptionType)
  @Column({ type: "enum", enum: OptionType })
  optionType: OptionType;

  @ApiProperty()
  @IsString()
  @Column({ type: "varchar", length: 40 })
  category: string;

  @ApiProperty()
  @IsNumber()
  @Column({ type: "int" })
  productId: number;

  @ManyToOne((type) => Product, (personalOption) => personalOption.personalOptions)
  product: Product;
}
