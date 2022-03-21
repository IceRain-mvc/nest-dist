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
exports.ArtificalController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const analyse_artifical_service_1 = require("./analyse-artifical.service");
const analyse_artifical_entity_1 = require("./analyse-artifical.entity");
const analyse_bounced_examinee_entity_1 = require("../analyse-bounced-examinee/analyse-bounced-examinee.entity");
let ArtificalController = class ArtificalController {
    constructor(examService) {
        this.examService = examService;
    }
    async create(artBoby) {
        const res = await this.examService.create(artBoby);
        return res;
    }
    async getAll(query) {
        const res = await this.examService.getAll(query);
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: analyse_artifical_entity_1.Artifical,
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
], ArtificalController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'id', required: false, description: '成绩id' }),
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
], ArtificalController.prototype, "getAll", null);
ArtificalController = __decorate([
    (0, common_1.Controller)('manual'),
    (0, swagger_1.ApiTags)('人工判卷模块'),
    __metadata("design:paramtypes", [analyse_artifical_service_1.ArtificalService])
], ArtificalController);
exports.ArtificalController = ArtificalController;
//# sourceMappingURL=analyse-artifical.controller.js.map