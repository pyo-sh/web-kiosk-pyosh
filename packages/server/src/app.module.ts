import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { validateEnv } from "./config/env.validation";
import { MenuModule } from "./menu/menu.module";
import { ProductModule } from "./product/product.module";
import { PersonalOptionModule } from "./personal-option/personal-option.module";
import { BillModule } from "./bill/bill.module";
import { BillProductModule } from "./bill-product/bill-product.module";
import { Environment } from "./common/enums";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get("DB_HOST"),
        port: +configService.get("DB_PORT"),
        username: configService.get("DB_USER"),
        password: configService.get("DB_PASS"),
        database: configService.get("DB_NAME"),
        synchronize: configService.get("NODE_ENV") === Environment.Development,
        namingStrategy: new SnakeNamingStrategy(),
        logging: true,
        autoLoadEntities: true,
        dropSchema: true,
      }),
    }),
    MenuModule,
    ProductModule,
    PersonalOptionModule,
    BillModule,
    BillProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
