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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../user/user.entity");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    createToken(user) {
        return this.jwtService.sign(user);
    }
    async login(user) {
        const data = await this.userService.login(user);
        if (typeof data === 'string') {
            return data;
        }
        const token = this.createToken({
            id: data.id,
            name: data.name,
            email: data.email,
            role: data.role,
        });
        if (token) {
            return Object.assign(data, { token });
        }
        throw new common_1.HttpException('对不起，暂无授权', common_1.HttpStatus.UNAUTHORIZED);
    }
    async validateUser(payload) {
        const user = await this.userService.findById(payload.id);
        return user;
    }
    async getDataByName(payload) {
        const user = await this.userService.findByUser(payload.name);
        return user;
    }
    async resetpwd(payload) {
        const user = await this.userService.resetpwd(payload);
        return user;
    }
    async getAllUser() {
        const res = await this.userService.getAllUser();
        return res;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map