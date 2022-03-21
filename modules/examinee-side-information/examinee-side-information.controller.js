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
exports.ExamineeSideInformationController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const examinee_side_information_service_1 = require("./examinee-side-information.service");
const examinee_side_information_entity_1 = require("./examinee-side-information.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ExamineeSideInformationController = class ExamineeSideInformationController {
    constructor(examineeSideInformationService) {
        this.examineeSideInformationService = examineeSideInformationService;
    }
    createAppMessage(body) {
        return this.examineeSideInformationService.createAppMessage(body);
    }
    updataAppMessage(body) {
        return this.examineeSideInformationService.updataAppMessage(body);
    }
    getAppMessage() {
        return this.examineeSideInformationService.getAppMessage();
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: examinee_side_information_entity_1.ExamineeSideInformation,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('createAppMessage'),
    openapi.ApiResponse({ status: 201, type: [require("./examinee-side-information.entity").ExamineeSideInformation] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExamineeSideInformationController.prototype, "createAppMessage", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'AppName',
        required: true,
        description: 'app的名字',
    }),
    (0, swagger_1.ApiParam)({
        name: 'AppLogo',
        required: true,
        description: 'appLogo的地址',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('updataAppMessage'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExamineeSideInformationController.prototype, "updataAppMessage", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.Get)('getAppMessage'),
    openapi.ApiResponse({ status: 200, type: [require("./examinee-side-information.entity").ExamineeSideInformation] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExamineeSideInformationController.prototype, "getAppMessage", null);
ExamineeSideInformationController = __decorate([
    (0, swagger_1.ApiTags)('试题选项表'),
    (0, common_1.Controller)('examineeSideInformation'),
    __metadata("design:paramtypes", [examinee_side_information_service_1.ExamineeSideInformationService])
], ExamineeSideInformationController);
exports.ExamineeSideInformationController = ExamineeSideInformationController;
//# sourceMappingURL=examinee-side-information.controller.js.map