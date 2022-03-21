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
exports.TestOptionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const test_options_service_1 = require("./test-options.service");
const test_options_entity_1 = require("./test-options.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let TestOptionsController = class TestOptionsController {
    constructor(testOptionsService) {
        this.testOptionsService = testOptionsService;
    }
    create(body) {
        return this.testOptionsService.create(body);
    }
    getAll() {
        return this.testOptionsService.getAll();
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: test_options_entity_1.TestOptions,
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
    (0, common_1.Post)('createTestOptions'),
    openapi.ApiResponse({ status: 201, type: [require("./test-options.entity").TestOptions] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestOptionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, common_1.Get)('getAllTestOptions'),
    openapi.ApiResponse({ status: 200, type: [require("./test-options.entity").TestOptions] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestOptionsController.prototype, "getAll", null);
TestOptionsController = __decorate([
    (0, swagger_1.ApiTags)('试题选项表'),
    (0, common_1.Controller)('test-options'),
    __metadata("design:paramtypes", [test_options_service_1.TestOptionsService])
], TestOptionsController);
exports.TestOptionsController = TestOptionsController;
//# sourceMappingURL=test-options.controller.js.map