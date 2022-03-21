import { AuthService } from '@/modules/auth/auth.service';
import { User } from '@/modules/user/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: any): Promise<"账号或密码错误" | "用户已锁定，无法登录" | "登陆时间添加失败" | (User & {
        token: string;
    })>;
    getDataByName(name: any): Promise<User>;
    resetpwd(params: any): Promise<import("typeorm").UpdateResult | "原密码错误">;
    getAllUser(): Promise<User[]>;
}
