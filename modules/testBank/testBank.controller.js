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
exports.TestBankController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const testBank_1 = require("./testBank");
const testBank_entity_1 = require("./testBank.entity");
const testBank_service_1 = require("./testBank.service");
let TestBankController = class TestBankController {
    constructor(testBankService) {
        this.testBankService = testBankService;
    }
    async create(testBankBody) {
        const res = await this.testBankService.create(testBankBody);
        return res;
    }
    async getPage(query) {
        const res = await this.testBankService.getPage(query);
        return res;
    }
    async ImportExcelGetTestBank(params) {
        const data = JSON.parse(params.data);
        const res = await this.testBankService.ImportExcelGetTestBank(data);
        return res;
    }
    async getExportTest(params) {
        const res = await this.testBankService.getExportTest(params);
        return res;
    }
    async ImportExcelAdd(body) {
        const res = await this.testBankService.ImportExcelAdd(body);
        return res;
    }
    async batchDelete(testBody) {
        const res = await this.testBankService.batchDelete(testBody);
        return res;
    }
    deleteStoreTestGroup(body) {
        return this.testBankService.deleteStoreTestGroup(body);
    }
    async removeOneData(id) {
        const res = await this.testBankService.removeOneData(id);
        return res;
    }
    async searchRepetitionData(testData) {
        const res = await this.testBankService.searchRepetitionData(testData.data);
        return res;
    }
    async BatchAddData(testBody) {
        const res = await this.testBankService.batchAdd(testBody);
        return res;
    }
    async deleteRepetition(testBody) {
        const res = await this.testBankService.deleteRepetition(testBody);
        return res;
    }
    async batchUpdate(testBody) {
        const res = await this.testBankService.batchUpdate(testBody);
        return res;
    }
    async upDateOne(upDataBody) {
        const res = await this.testBankService.upDateOne(upDataBody);
        return res;
    }
    async getOneDate(dataId) {
        const res = await this.testBankService.getOne(dataId);
        return res;
    }
    getQuestionsInStore(query) {
        return this.testBankService.getQuestionsInStore(query);
    }
    getQuestionList(query) {
        return this.testBankService.getQuestionList(query);
    }
    getQuestionTypes(query) {
        return this.testBankService.getQuestionTypes(query);
    }
    deleteStoreTest(id) {
        return this.testBankService.deleteStoreTest(id);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: testBank_entity_1.TestBank,
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
    (0, common_1.Post)('createTestBank'),
    openapi.ApiResponse({ status: 201, type: require("./testBank.entity").TestBank }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'textclassify',
        required: false,
        description: '试题分类',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'textSearch',
        required: false,
        description: '搜索框搜索',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'textType',
        required: false,
        description: '所选题型',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'textDifficulty',
        required: false,
        description: '难度',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'startTime',
        required: false,
        description: '开始时间',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'endTime',
        required: false,
        description: '结束时间',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.Get)('getPage'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "getPage", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'exisTopic',
        required: true,
        description: '输入多个试题的题目组成的数组，例如["驾驶人在下列哪种情况下不能驾驶机动车?","简述生产力对教育的作用?"]',
        type: 'array',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('ImportExcelGetTestBank'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "ImportExcelGetTestBank", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'testIdList',
        required: true,
        description: '输入多个导出试题的id,传递数组参数:["55f0f44f-747a-4cd6-a234-21daad280215","702b715b-ed00-4047-99f5-b61ca1f58079",]',
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('getExportTest'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "getExportTest", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiBody)({ description: '请求体', type: [testBank_1.TestBatchAddSwargger] }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('ImportExcelAdd'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "ImportExcelAdd", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: [testBank_1.TestBatchDeleteSwargger],
        description: '请求体',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('batchDelete'),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "batchDelete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('del-group-test'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "deleteStoreTestGroup", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '试题表的id',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "removeOneData", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'data',
        required: true,
        description: '试题的题目(请输入两个以上)',
        type: 'array',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('searchRepetitionData'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "searchRepetitionData", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: [testBank_1.TestBatchAddSwargger],
        description: '请求体',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('batchAdd'),
    openapi.ApiResponse({ status: 201, type: [Object] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "BatchAddData", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: [testBank_1.TestDeleteRepetitionSwargger],
        description: '请求体',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('deleteRepetition'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "deleteRepetition", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('batchUpdate'),
    openapi.ApiResponse({ status: 200, type: Boolean }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "batchUpdate", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('upDateOne'),
    openapi.ApiResponse({ status: 200, type: require("./testBank.entity").TestBank }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "upDateOne", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, common_1.Get)('getOne/:dataId'),
    openapi.ApiResponse({ status: 200, type: require("./testBank.entity").TestBank }),
    __param(0, (0, common_1.Param)('dataId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "getOneDate", null);
__decorate([
    (0, common_1.Get)('search-in-store'),
    openapi.ApiResponse({ status: 200, type: [require("./testBank.entity").TestBank] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestBankController.prototype, "getQuestionsInStore", null);
__decorate([
    (0, common_1.Get)('list'),
    openapi.ApiResponse({ status: 200, type: [require("./testBank.entity").TestBank] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestBankController.prototype, "getQuestionList", null);
__decorate([
    (0, common_1.Get)('type'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestBankController.prototype, "getQuestionTypes", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('delSingleTest/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestBankController.prototype, "deleteStoreTest", null);
TestBankController = __decorate([
    (0, swagger_1.ApiTags)('试题库'),
    (0, common_1.Controller)('testBank'),
    __metadata("design:paramtypes", [testBank_service_1.TestBankService])
], TestBankController);
exports.TestBankController = TestBankController;
//# sourceMappingURL=testBank.controller.js.map