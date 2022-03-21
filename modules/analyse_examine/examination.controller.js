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
exports.ExaminationController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const examination_service_1 = require("./examination.service");
const examination_entity_1 = require("./examination.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ExaminationController = class ExaminationController {
    constructor(examService) {
        this.examService = examService;
    }
    async create(examBody) {
        const res = await this.examService.create(examBody);
        return res;
    }
    async getAll(query) {
        const res = await this.examService.getAll(query);
        return res;
    }
    async findData(params) {
        const res = await this.examService.getExamLists(params);
        return res;
    }
    getExamMulti(query) {
        return this.examService.getExamMulti(query);
    }
    getStudentMark(query) {
        return this.examService.getStudentMark(query);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: examination_entity_1.Examine,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: false,
        description: '新增的数据',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExaminationController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getAll'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExaminationController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        description: '要查找的信息',
        type: '获取数据',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.Get)('/findData'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExaminationController.prototype, "findData", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        description: '要查找的信息',
        type: '获取数据',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.Get)('/getExamMulti'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExaminationController.prototype, "getExamMulti", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        description: '要查找的信息',
        type: '获取数据',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.Get)('/getStudentMark'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExaminationController.prototype, "getStudentMark", null);
ExaminationController = __decorate([
    (0, swagger_1.ApiTags)('考试成绩模块'),
    (0, common_1.Controller)('analyseExamine'),
    __metadata("design:paramtypes", [examination_service_1.ExaminationService])
], ExaminationController);
exports.ExaminationController = ExaminationController;
//# sourceMappingURL=examination.controller.js.map