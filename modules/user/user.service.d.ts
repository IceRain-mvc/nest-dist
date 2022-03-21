import { User } from './user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class UserService {
    private readonly userRepository;
    private readonly configService;
    constructor(userRepository: Repository<User>, configService: ConfigService);
    login(params: Partial<User>): Promise<User | "账号或密码错误" | "用户已锁定，无法登录" | "登陆时间添加失败">;
    createUser(user: Partial<User>): Promise<User>;
    findById(id: any): Promise<User>;
    findByUser(name: any): Promise<User>;
    resetpwd(params: any): Promise<import("typeorm").UpdateResult | "原密码错误">;
    getAllUser(): Promise<User[]>;
    getChildAdminAll(query: any): Promise<{
        msg: string;
        data: [User[], number];
        list?: undefined;
    } | {
        msg: string;
        list: (number | any[])[];
        data?: undefined;
    }>;
    addChildAdmin(body: any): Promise<{
        code: string;
        msg: string;
    }>;
    softDelete(body: any): Promise<{
        code: string;
        msg: string;
    }>;
    editChildAdmin(body: any): Promise<{
        code: string;
        msg: string;
    }>;
}
