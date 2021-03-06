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
exports.AnalyseAnswerController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const analyse_answer_service_1 = require("./analyse-answer.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AnalyseAnswerController = class AnalyseAnswerController {
    constructor(analyseAnswerService) {
        this.analyseAnswerService = analyseAnswerService;
    }
    async getExamData(query) {
        const res = await this.analyseAnswerService.getExamPaper(query);
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({
        description: '试题页查询 获取数据',
        type: '试题页查询 获取数据',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getExamData'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseAnswerController.prototype, "getExamData", null);
AnalyseAnswerController = __decorate([
    (0, swagger_1.ApiTags)('分析-试题分析'),
    (0, common_1.Controller)('analyse-answer'),
    __metadata("design:paramtypes", [analyse_answer_service_1.AnalyseAnswerService])
], AnalyseAnswerController);
exports.AnalyseAnswerController = AnalyseAnswerController;
//# sourceMappingURL=analyse-answer.controller.js.map