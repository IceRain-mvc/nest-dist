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
exports.TestAnalysisController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const test_analysis_service_1 = require("./test-analysis.service");
let TestAnalysisController = class TestAnalysisController {
    constructor(testAnalysisService) {
        this.testAnalysisService = testAnalysisService;
    }
    async getTestQuestions(params) {
        const res = await this.testAnalysisService.getTestQuestions(params);
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'count',
        required: false,
        description: '返回的条数',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '此角色权限不足' }),
    (0, common_1.Get)('/getTestQuestions'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestAnalysisController.prototype, "getTestQuestions", null);
TestAnalysisController = __decorate([
    (0, swagger_1.ApiTags)('分析--试题分析'),
    (0, common_1.Controller)('test-analysis'),
    __metadata("design:paramtypes", [test_analysis_service_1.TestAnalysisService])
], TestAnalysisController);
exports.TestAnalysisController = TestAnalysisController;
//# sourceMappingURL=test-analysis.controller.js.map