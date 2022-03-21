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
exports.ExamineeFillMessageController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const examinee_fill_message_service_1 = require("./examinee-fill-message.service");
const swagger_1 = require("@nestjs/swagger");
const examinee_fill_message_entity_1 = require("./examinee-fill-message.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ExamineeFillMessageController = class ExamineeFillMessageController {
    constructor(examineeFillMessageService) {
        this.examineeFillMessageService = examineeFillMessageService;
    }
    create(body, examId) {
        return this.examineeFillMessageService.create(body, examId);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: examinee_fill_message_entity_1.ExamineeFillMessage,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ExamineeFillMessageController.prototype, "create", null);
ExamineeFillMessageController = __decorate([
    (0, swagger_1.ApiTags)('考试-考生信息'),
    (0, common_1.Controller)('examinee-fill-message'),
    __metadata("design:paramtypes", [examinee_fill_message_service_1.ExamineeFillMessageService])
], ExamineeFillMessageController);
exports.ExamineeFillMessageController = ExamineeFillMessageController;
//# sourceMappingURL=examinee-fill-message.controller.js.map