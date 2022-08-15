import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./app.module";
import { setupSwagger } from "./config/swagger.builder";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix("api");
  app.enableCors();
  setupSwagger(app);

  app.useStaticAssets(join(__dirname, "..", "build"));
  app.setBaseViewsDir(join(__dirname, "..", "build"));
  app.setViewEngine("html");

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
