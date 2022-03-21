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
exports.AnalyseStudentAnalyseController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const analyse_student_analyse_service_1 = require("./analyse-student-analyse.service");
const analyse_student_analyse_entity_1 = require("./analyse-student-analyse.entity");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AnalyseStudentAnalyseController = class AnalyseStudentAnalyseController {
    constructor(analyseStudentAnalyseService) {
        this.analyseStudentAnalyseService = analyseStudentAnalyseService;
    }
    async create(body) {
        const res = await this.analyseStudentAnalyseService.create(body);
        return res;
    }
    async getStudent(query) {
        const res = await this.analyseStudentAnalyseService.getStudent(query);
        return res;
    }
    async getStudentExam(query) {
        const res = await this.analyseStudentAnalyseService.getStudentExam(query);
        return res;
    }
    async getStudentCourse(query) {
        const res = await this.analyseStudentAnalyseService.getStudentCourse(query);
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiBody)({ description: '请求体', type: analyse_student_analyse_entity_1.Analysestudentanalyse }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseStudentAnalyseController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'count',
        required: false,
        description: '返回的条数',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getStudent'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseStudentAnalyseController.prototype, "getStudent", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'count',
        required: false,
        description: '返回的条数',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getStudentExam'),
    openapi.ApiResponse({ status: 200, type: [require("../student-mark/student-mark.entity").StudentsMark] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseStudentAnalyseController.prototype, "getStudentExam", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'count',
        required: false,
        description: '返回的条数',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getStudentCourse'),
    openapi.ApiResponse({ status: 200, type: [require("../students-course/students-course.entity").StudentsCourse] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnalyseStudentAnalyseController.prototype, "getStudentCourse", null);
AnalyseStudentAnalyseController = __decorate([
    (0, swagger_1.ApiTags)('分析-考生分析'),
    (0, common_1.Controller)('analyse/studentanalsye'),
    __metadata("design:paramtypes", [analyse_student_analyse_service_1.AnalyseStudentAnalyseService])
], AnalyseStudentAnalyseController);
exports.AnalyseStudentAnalyseController = AnalyseStudentAnalyseController;
//# sourceMappingURL=analyse-student-analyse.controller.js.map