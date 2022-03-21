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
exports.AnalyseBouncedExamineesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const analyse_bounced_examinee_entity_1 = require("./analyse-bounced-examinee.entity");
const analyse_bounced_examinee_service_1 = require("./analyse-bounced-examinee.service");
let AnalyseBouncedExamineesController = class AnalyseBouncedExamineesController {
    constructor(bouncedService) {
        this.bouncedService = bouncedService;
    }
    async create(examBody) {
        const res = await this.bouncedService.create(examBody);
        return res;
    }
    async getAll(query) {
        const res = await this.bouncedService.getAll(query);
        return res;
    }
    async getUpdate(examBody) {
        const res = await this.bouncedService.Update(examBody);
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: analyse_bounced_examinee_entity_1.analyseBouncedExaminees,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: false,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseBouncedExamineesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '获取失败',
    }),
    (0, common_1.Get)('/getAll'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseBouncedExamineesController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: analyse_bounced_examinee_entity_1.analyseBouncedExaminees,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: false,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '修改成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Put)('/getUpdate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseBouncedExamineesController.prototype, "getUpdate", null);
AnalyseBouncedExamineesController = __decorate([
    (0, common_1.Controller)('analyseBounced'),
    (0, swagger_1.ApiTags)('考试成绩弹框模块'),
    __metadata("design:paramtypes", [analyse_bounced_examinee_service_1.AnalyseBouncedExamineesService])
], AnalyseBouncedExamineesController);
exports.AnalyseBouncedExamineesController = AnalyseBouncedExamineesController;
//# sourceMappingURL=analyse-bounced-examinee.controller.js.map