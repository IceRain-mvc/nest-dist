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
exports.AnalyseGradeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const analyse_grade_entity_1 = require("./analyse-grade.entity");
const analyse_grade_service_1 = require("./analyse-grade.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AnalyseGradeController = class AnalyseGradeController {
    constructor(analyseGradeService) {
        this.analyseGradeService = analyseGradeService;
    }
    async create(data) {
        return this.analyseGradeService.create(data);
    }
    async findData(parmas) {
        const res = await this.analyseGradeService.getStudentExamList(parmas);
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: analyse_grade_entity_1.AnalyseGrade,
        description: '登录请求体',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201, type: [require("./analyse-grade.entity").AnalyseGrade] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseGradeController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        description: '要查找的信息',
        type: '获取数据',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('findData'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseGradeController.prototype, "findData", null);
AnalyseGradeController = __decorate([
    (0, swagger_1.ApiTags)('分析-成绩分析'),
    (0, common_1.Controller)('analyse-grade'),
    __metadata("design:paramtypes", [analyse_grade_service_1.AnalyseGradeService])
], AnalyseGradeController);
exports.AnalyseGradeController = AnalyseGradeController;
//# sourceMappingURL=analyse-grade.controller.js.map