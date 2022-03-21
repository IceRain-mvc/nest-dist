import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    softDelete(id: string): Promise<{
        code: string;
        msg: string;
    }>;
    getChildAdminOne(query: any): Promise<User>;
    editChildAdmin(body: any): Promise<{
        code: string;
        msg: string;
    }>;
}
