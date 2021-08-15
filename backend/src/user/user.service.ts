import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import Token from "../lib/Token";

@Injectable()
export class UserService {
  private token: Token;

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    this.token = new Token();
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async save(name: string, email: string) {
    const user = await this.userRepository.findOne({ email });

    if (user) {
      return {
        email: user.email,
        name: user.name,
        token: this.token.create(user.id),
      };
    } else {
      const newUser = await this.userRepository.save({ name, email });

      return {
        email: newUser.email,
        name: newUser.name,
        token: this.token.create(newUser.id),
      };
    }
  }
}
