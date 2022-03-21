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
exports.AnalyseLearningController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const analyse_learning_service_1 = require("./analyse-learning.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
(0, swagger_1.ApiTags)('分析-培训学习');
let AnalyseLearningController = class AnalyseLearningController {
    constructor(analyseLearningService) {
        this.analyseLearningService = analyseLearningService;
    }
    async getAll(params) {
        const res = await this.analyseLearningService.getAll(params);
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getAll'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseLearningController.prototype, "getAll", null);
AnalyseLearningController = __decorate([
    (0, common_1.Controller)('analyse/learning'),
    __metadata("design:paramtypes", [analyse_learning_service_1.AnalyseLearningService])
], AnalyseLearningController);
exports.AnalyseLearningController = AnalyseLearningController;
//# sourceMappingURL=analyse-learning.controller.js.map