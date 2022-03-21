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
exports.AnalyseIntegralController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const analyse_integral_entity_1 = require("./analyse-integral.entity");
const analyse_integral_service_1 = require("./analyse-integral.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AnalyseIntegralController = class AnalyseIntegralController {
    constructor(analyseIntegralService) {
        this.analyseIntegralService = analyseIntegralService;
    }
    async create(data) {
        return this.analyseIntegralService.create(data);
    }
    async getAll(query) {
        return this.analyseIntegralService.getAll(query);
    }
    async clearIntegral(query) {
        return this.analyseIntegralService.clearIntegral(query);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: analyse_integral_entity_1.AnalyseIntegral,
        description: '输入需要添加的数据',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201, type: [require("./analyse-integral.entity").AnalyseIntegral] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseIntegralController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: '获取数据',
        description: '输入需要添加的数据',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getInregralAll'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseIntegralController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: '积分清零',
        description: '输入清零的id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('clearIntegral'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseIntegralController.prototype, "clearIntegral", null);
AnalyseIntegralController = __decorate([
    (0, swagger_1.ApiTags)('分析-积分分析'),
    (0, common_1.Controller)('analyse-integral'),
    __metadata("design:paramtypes", [analyse_integral_service_1.AnalyseIntegralService])
], AnalyseIntegralController);
exports.AnalyseIntegralController = AnalyseIntegralController;
//# sourceMappingURL=analyse-integral.controller.js.map