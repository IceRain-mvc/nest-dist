"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcryptjs");
let UserService = class UserService {
    constructor(userRepository, configService) {
        this.userRepository = userRepository;
        this.configService = configService;
        const name = this.configService.get('ADMIN_USER', 'admin');
        const password = this.configService.get('ADMIN_PASSWD', 'admin');
        this.createUser({
            name,
            password,
            role: 'admin',
            email: '2499540877@qq.com',
        })
            .then(() => {
            console.log();
            console.log(`管理员账户创建成功，用户名：${name}，密码：${password}，请及时登录系统修改默认密码`);
            console.log();
        })
            .catch(() => {
            console.log();
            console.log(`管理员账户已经存在，用户名：${name}，密码：${password}，请及时登录系统修改默认密码`);
            console.log();
        });
    }
    async login(params) {
        const { name, password } = params;
        const existUser = await this.userRepository
            .createQueryBuilder('user')
            .where('user.name = :name', { name: name })
            .andWhere('user.isDelete=:isDelete', { isDelete: 0 })
            .getOne();
        if (!existUser ||
            !(await user_entity_1.User.comparePassword(password, existUser.password))) {
            return '账号或密码错误';
        }
        if (existUser.status === 'locked') {
            return '用户已锁定，无法登录';
        }
        const res = await this.userRepository
            .createQueryBuilder('user')
            .update(user_entity_1.User)
            .set({ loginTime: new Date() })
            .where('user.name = :name', { name: name })
            .execute();
        if (res.affected > 0) {
            return existUser;
        }
        return '登陆时间添加失败';
    }
    async createUser(user) {
        const { name, password } = user;
        if (!name || !password) {
            throw new common_1.HttpException('请输入用户名和密码', common_1.HttpStatus.BAD_REQUEST);
        }
        const existUser = await this.userRepository.findOne({ where: { name } });
        if (existUser) {
            throw new common_1.HttpException('用户已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const newUser = await this.userRepository.create(user);
        await this.userRepository.save(newUser);
        return newUser;
    }
    async findById(id) {
        return this.userRepository.findOne(id);
    }
    async findByUser(name) {
        return this.userRepository
            .createQueryBuilder('user')
            .where('user.name = :name', { name: name })
            .getOne();
    }
    async resetpwd(params) {
        if (params.originalPassword) {
            const res = bcrypt.compareSync(params.originalPassword, params.encryptPwd);
            if (!res) {
                return '原密码错误';
            }
        }
        params.password = bcrypt.hashSync(params.password, 10);
        const res = await this.userRepository
            .createQueryBuilder('user')
            .update(user_entity_1.User)
            .set({ password: params.password })
            .where('user.email = :email', { email: params.email })
            .execute();
        return res;
    }
    async getAllUser() {
        const res = await this.userRepository
            .createQueryBuilder('user')
            .where('isDelete = :isDelete', { isDelete: 0 })
            .getMany();
        return res;
    }
    async getChildAdminAll(query) {
        const { page = 1, pageSize = 10, date, search } = query;
        const start = (page - 1) * pageSize;
        let res = await this.userRepository
            .createQueryBuilder('user')
            .select([
            'user.id',
            'user.name',
            'user.email',
            'user.createAt',
            'user.status',
            'user.phoneNum',
        ])
            .orderBy(`user.createAt`, 'DESC')
            .where('user.role=:role', { role: 'teacher' })
            .andWhere('user.isDelete=:isDelete', { isDelete: false });
        if (search) {
            res = res.andWhere('user.name like :name', {
                name: `%${search}%`,
            });
        }
        const searchDate = date ? JSON.parse(date) : undefined;
        if (searchDate) {
            const { startTime, endTime } = searchDate;
            if (startTime) {
                res = res.andWhere('user.create_at >:start', {
                    start: new Date(startTime),
                });
            }
            if (endTime) {
                res = res.andWhere('user.create_at <:end', {
                    end: new Date(endTime),
                });
            }
        }
        res = res.skip(start).take(pageSize);
        const list = await res.getManyAndCount();
        if (list) {
            return {
                msg: '请求成功',
                data: list,
            };
        }
        return {
            msg: '请求失败',
            list: [[], 0],
        };
    }
    async addChildAdmin(body) {
        const name = body.name;
        const email = body.email;
        const existUser = await this.userRepository.findOne({
            where: { name, isDelete: false },
        });
        const existEmail = await this.userRepository.findOne({
            where: { email, isDelete: false },
        });
        if (existUser) {
            return {
                code: '02',
                msg: '用户已存在',
            };
        }
        if (existEmail) {
            return {
                code: '03',
                msg: '该邮箱已被绑定',
            };
        }
        body.password = bcrypt.hashSync(body.password, 10);
        await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .insert()
            .into(user_entity_1.User)
            .values(body)
            .execute();
        return {
            code: '01',
            msg: '请求成功',
        };
    }
    async softDelete(body) {
        const res = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(user_entity_1.User)
            .set({ isDelete: true })
            .where('id = :id', { id: body })
            .execute();
        if (res.affected) {
            return {
                code: '01',
                msg: '删除成功',
            };
        }
        return {
            code: '02',
            msg: '删除失败',
        };
    }
    async editChildAdmin(body) {
        try {
            if (body.password) {
                body.password = bcrypt.hashSync(body.password, 10);
            }
            await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .update(user_entity_1.User)
                .set(body)
                .where('id = :id', { id: body.id })
                .execute();
        }
        catch (error) {
            throw new common_1.HttpException('编辑失败！', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            code: '01',
            msg: '修改成功',
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map