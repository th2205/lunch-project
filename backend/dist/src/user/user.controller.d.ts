import { UserService } from "./user.service";
interface saveUserDto {
    data: {
        name: string;
        email: string;
    };
}
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./user.entity").UserEntity[]>;
    login(body: saveUserDto): Promise<{
        resultCode: number;
        data: {
            email: string;
            name: string;
            token: string;
        };
    } | {
        resultCode: number;
        data?: undefined;
    }>;
}
export {};
