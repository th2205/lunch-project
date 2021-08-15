import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { ERROR_CODE } from "../../constants/errorCode";

interface saveUserDto {
  data: { name: string; email: string };
}

@Controller("/api/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  async findAll() {
    return await this.userService.findAll();
  }

  @Post("/login")
  async login(@Body() body: saveUserDto) {
    try {
      const data = await this.userService.save(body.data.name, body.data.email);

      return {
        resultCode: ERROR_CODE.SUCCESS,
        data,
      };
    } catch (e) {
      return { resultCode: ERROR_CODE.LOGIN_FALIURE };
    }
  }
}
