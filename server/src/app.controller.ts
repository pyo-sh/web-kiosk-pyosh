import { Controller, Get, Render, Res } from "@nestjs/common";
import { Response } from "express";

@Controller()
export class AppController {
  @Get()
  @Render("index.html")
  root(@Res() res: Response) {
    return res.render("index.html");
  }
}
