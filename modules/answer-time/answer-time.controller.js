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
exports.AnswerTimeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const answer_time_service_1 = require("./answer-time.service");
const answer_time_entity_1 = require("./answer-time.entity");
const swagger_1 = require("@nestjs/swagger");
let AnswerTimeController = class AnswerTimeController {
    constructor(answerTimeService) {
        this.answerTimeService = answerTimeService;
    }
    getAll() {
        return this.answerTimeService.getAll();
    }
    create(body) {
        return this.answerTimeService.create(body);
    }
    deleTextTime(answerTimeId) {
        return this.answerTimeService.deleteTextTime(answerTimeId);
    }
    update(body) {
        return this.answerTimeService.update(body);
    }
};
__decorate([
    (0, common_1.Get)('getAll'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnswerTimeController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'answerTimeRequire',
        required: true,
        description: '答题时间设置',
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
        },
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限操作' }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnswerTimeController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'answerTimeId',
        required: true,
        description: '考试-答题时间id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限操作' }),
    (0, common_1.Delete)(':answerTimeId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('answerTimeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnswerTimeController.prototype, "deleTextTime", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: answer_time_entity_1.AnswerTime,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限操作' }),
    (0, common_1.Put)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnswerTimeController.prototype, "update", null);
AnswerTimeController = __decorate([
    (0, swagger_1.ApiTags)('考试-答题时间设置'),
    (0, common_1.Controller)('answer-time'),
    __metadata("design:paramtypes", [answer_time_service_1.AnswerTimeService])
], AnswerTimeController);
exports.AnswerTimeController = AnswerTimeController;
//# sourceMappingURL=answer-time.controller.js.map