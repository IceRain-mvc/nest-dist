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
exports.StudentsCourseMessageController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const students_course_message_entity_1 = require("./students-course-message.entity");
const students_course_message_service_1 = require("./students-course-message.service");
let StudentsCourseMessageController = class StudentsCourseMessageController {
    constructor(studentsCourseMessageService) {
        this.studentsCourseMessageService = studentsCourseMessageService;
    }
    create(body) {
        return this.studentsCourseMessageService.create(body);
    }
    getByStudentsCourseId(query) {
        return this.studentsCourseMessageService.getByStudentsCourseId(query);
    }
    getById(query) {
        return this.studentsCourseMessageService.getById(query);
    }
    updateById(body) {
        return this.studentsCourseMessageService.updateById(body);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: students_course_message_entity_1.StudentsCourseMessage,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsCourseMessageController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'studentsCourseId',
        required: true,
        description: '学生端课程id',
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
    (0, common_1.Get)('/getStudentsCourseId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [require("./students-course-message.entity").StudentsCourseMessage] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsCourseMessageController.prototype, "getByStudentsCourseId", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'studentsId',
        required: true,
        description: '考生id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'courseId',
        required: true,
        description: '课程id',
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
    (0, common_1.Get)('/getById'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [require("./students-course-message.entity").StudentsCourseMessage] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsCourseMessageController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'studentsId',
        required: true,
        description: '考生id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'courseId',
        required: true,
        description: '课程id',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: students_course_message_entity_1.StudentsCourseMessage,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Put)('/updateById'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsCourseMessageController.prototype, "updateById", null);
StudentsCourseMessageController = __decorate([
    (0, swagger_1.ApiTags)('考生课程登录存储个人信息'),
    (0, common_1.Controller)('students-course-message'),
    __metadata("design:paramtypes", [students_course_message_service_1.StudentsCourseMessageService])
], StudentsCourseMessageController);
exports.StudentsCourseMessageController = StudentsCourseMessageController;
//# sourceMappingURL=students-course-message.controller.js.map