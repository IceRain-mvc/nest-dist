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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getChildAdminAll(query) {
        const res = await this.userService.getChildAdminAll(query);
        return res;
    }
    async addChildAdmin(body) {
        const res = await this.userService.addChildAdmin(body);
        return res;
    }
    async softDelete(id) {
        const res = await this.userService.softDelete(id);
        return res;
    }
    async getChildAdminOne(query) {
        const res = await this.userService.findById(query);
        return res;
    }
    async editChildAdmin(body) {
        const res = await this.userService.editChildAdmin(Object.assign({}, body));
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        description: '关键字搜索',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'date',
        required: false,
        description: '时间',
        example: {
            startTime: '2021-12-29T12:57:39.763Z',
            endTime: '2021-12-30T12:57:43.763Z',
        },
    }),
    (0, swagger_1.ApiQuery)({
        name: 'pageSize',
        required: false,
        description: '每页条数',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候，携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, common_1.Get)('getChildAdminAll'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getChildAdminAll", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: user_entity_1.User }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('addChildAdmin'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addChildAdmin", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: true,
        description: '删除数据的id',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候，携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('deleteChildAdmin'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "softDelete", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: true,
        description: '编辑时先通过id获取数据',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候，携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('getChildAdminOne'),
    openapi.ApiResponse({ status: 200, type: require("./user.entity").User }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getChildAdminOne", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候，携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('editChildAdmin'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "editChildAdmin", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('子管理员'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map