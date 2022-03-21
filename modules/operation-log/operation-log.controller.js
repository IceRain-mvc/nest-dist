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
exports.OperationLogController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const operation_log_entity_1 = require("./operation-log.entity");
const operation_log_service_1 = require("./operation-log.service");
let OperationLogController = class OperationLogController {
    constructor(operationLogService) {
        this.operationLogService = operationLogService;
    }
    async create(body) {
        const res = await this.operationLogService.create(body);
        return res;
    }
    getAll(query) {
        return this.operationLogService.getAll(query);
    }
    addOpreationLog(body) {
        return this.operationLogService.addOpreationLog(body);
    }
    getIP() {
        return this.operationLogService.getIP();
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: operation_log_entity_1.OperationLog,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('createOperation'),
    openapi.ApiResponse({ status: 201, type: require("./operation-log.entity").OperationLog }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OperationLogController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'operationName',
        required: false,
        description: '搜索框搜索',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getAll'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OperationLogController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('addOpreationLog'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OperationLogController.prototype, "addOpreationLog", null);
__decorate([
    (0, common_1.Get)('getIP'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OperationLogController.prototype, "getIP", null);
OperationLogController = __decorate([
    (0, swagger_1.ApiTags)('操作日志模块'),
    (0, common_1.Controller)('operationLog'),
    __metadata("design:paramtypes", [operation_log_service_1.OperationLogService])
], OperationLogController);
exports.OperationLogController = OperationLogController;
//# sourceMappingURL=operation-log.controller.js.map