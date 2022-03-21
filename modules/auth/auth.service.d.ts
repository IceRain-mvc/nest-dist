import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/modules/user/user.service';
import { ConfigService } from '@nestjs/config';
import { User } from '@/modules/user/user.entity';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    createToken(user: Partial<User>): string;
    login(user: Partial<User>): Promise<"账号或密码错误" | "用户已锁定，无法登录" | "登陆时间添加失败" | (User & {
        token: string;
    })>;
    validateUser(payload: User): Promise<User>;
    getDataByName(payload: User): Promise<User>;
    resetpwd(payload: any): Promise<import("typeorm").UpdateResult | "原密码错误">;
    getAllUser(): Promise<User[]>;
}
