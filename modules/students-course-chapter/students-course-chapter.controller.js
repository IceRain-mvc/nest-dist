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
exports.StudentsCourseChapterController = void 0;
const openapi = require("@nestjs/swagger");
const students_course_chapter_service_1 = require("./students-course-chapter.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const students_course_chapter_entity_1 = require("./students-course-chapter.entity");
let StudentsCourseChapterController = class StudentsCourseChapterController {
    constructor(studentsCourseChapterService) {
        this.studentsCourseChapterService = studentsCourseChapterService;
    }
    creatDate(createCatDto) {
        return this.studentsCourseChapterService.create(createCatDto);
    }
    getByStudentsCourseId(query) {
        return this.studentsCourseChapterService.getByStudentsCourseId(query);
    }
    getById(query) {
        console.log(query, 'query');
        return this.studentsCourseChapterService.getById(query);
    }
    updateById(data) {
        return this.studentsCourseChapterService.updateById(data);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: students_course_chapter_entity_1.StudentsCourseChapter,
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
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsCourseChapterController.prototype, "creatDate", null);
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
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [require("./students-course-chapter.entity").StudentsCourseChapter] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsCourseChapterController.prototype, "getByStudentsCourseId", null);
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
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [require("./students-course-chapter.entity").StudentsCourseChapter] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentsCourseChapterController.prototype, "getById", null);
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
        type: students_course_chapter_entity_1.StudentsCourseChapter,
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
], StudentsCourseChapterController.prototype, "updateById", null);
StudentsCourseChapterController = __decorate([
    (0, swagger_1.ApiTags)('考生课程章节统计'),
    (0, common_1.Controller)('students-course-chapter'),
    __metadata("design:paramtypes", [students_course_chapter_service_1.StudentsCourseChapterService])
], StudentsCourseChapterController);
exports.StudentsCourseChapterController = StudentsCourseChapterController;
//# sourceMappingURL=students-course-chapter.controller.js.map