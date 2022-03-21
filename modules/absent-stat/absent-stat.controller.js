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
exports.AbsentStatController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const absent_stat_service_1 = require("./absent-stat.service");
const absent_stat_entity_1 = require("./absent-stat.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AbsentStatController = class AbsentStatController {
    constructor(absentStatService) {
        this.absentStatService = absentStatService;
    }
    create(body) {
        return this.absentStatService.create(body);
    }
    async getAll(params) {
        const res = await this.absentStatService.getAll(params);
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: absent_stat_entity_1.AbsentStat,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '此角色权限不足' }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./absent-stat.entity").AbsentStat }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AbsentStatController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'count',
        required: false,
        description: '返回的条数',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '此角色权限不足' }),
    (0, common_1.Get)('/getAll'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AbsentStatController.prototype, "getAll", null);
AbsentStatController = __decorate([
    (0, swagger_1.ApiTags)('分析--缺席统计'),
    (0, common_1.Controller)('absentStat'),
    __metadata("design:paramtypes", [absent_stat_service_1.AbsentStatService])
], AbsentStatController);
exports.AbsentStatController = AbsentStatController;
//# sourceMappingURL=absent-stat.controller.js.map