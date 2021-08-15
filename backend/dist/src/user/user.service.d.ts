import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
export declare class UserService {
    private readonly userRepository;
    private token;
    constructor(userRepository: Repository<UserEntity>);
    findAll(): Promise<UserEntity[]>;
    save(name: string, email: string): Promise<{
        email: string;
        name: string;
        token: string;
    }>;
}
