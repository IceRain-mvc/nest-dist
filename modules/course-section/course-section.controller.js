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
exports.CourseSectionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const course_section_entity_1 = require("./course-section.entity");
const course_section_service_1 = require("./course-section.service");
let CourseSectionController = class CourseSectionController {
    constructor(CourseSectionService) {
        this.CourseSectionService = CourseSectionService;
    }
    createCourseSection(body) {
        console.log(body);
        return this.CourseSectionService.create(body);
    }
    getChapter(data) {
        console.log(data, '我是data');
        return this.CourseSectionService.getChapter(data);
    }
    deChapterData(data) {
        console.log(data);
        return this.CourseSectionService.deChapterData(data);
    }
    redactChapter(data) {
        console.log(data);
        return this.CourseSectionService.redactChapter(data);
    }
    getCourseSections(data) {
        console.log(data);
        return this.CourseSectionService.getCourseSections(data);
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '子章节id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'chapterId',
        required: false,
        description: '父章节Id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialNumber',
        required: false,
        description: '序列号',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialTime',
        required: false,
        description: '章节学时',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialName',
        required: false,
        description: '子章节名称',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'fileAddressMd',
        required: false,
        description: '上传的文件地址',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'fileAddressMp4',
        required: false,
        description: '上传的视频音频地址地址',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'fileName',
        required: false,
        description: '上传的文件名',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialContent',
        required: false,
        description: '子章节内容',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialType',
        required: false,
        description: '子章节类型',
    }),
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_section_entity_1.CourseSection,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/saveData'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseSectionController.prototype, "createCourseSection", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.Get)('/chapterChildren'),
    openapi.ApiResponse({ status: 200, type: [require("./course-section.entity").CourseSection] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseSectionController.prototype, "getChapter", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '子章节id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'chapterId',
        required: false,
        description: '父章节Id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/deChapterData'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseSectionController.prototype, "deChapterData", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '子章节id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'chapterId',
        required: false,
        description: '父章节Id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialNumber',
        required: false,
        description: '序列号',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialTime',
        required: false,
        description: '章节学时',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialName',
        required: false,
        description: '子章节名称',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'fileAddressMd',
        required: false,
        description: '上传的文件地址',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'fileAddressMp4',
        required: false,
        description: '上传的视频音频地址地址',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'fileName',
        required: false,
        description: '上传的文件名',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialContent',
        required: false,
        description: '子章节内容',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'serialType',
        required: false,
        description: '子章节类型',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/editorCourseSection'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseSectionController.prototype, "redactChapter", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'courseId',
        required: false,
        description: '章节id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: '角色无权限' }),
    (0, common_1.Get)('/getCourseSections'),
    openapi.ApiResponse({ status: 200, type: require("./course-section.entity").CourseSection }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseSectionController.prototype, "getCourseSections", null);
CourseSectionController = __decorate([
    (0, swagger_1.ApiTags)('上传文件'),
    (0, common_1.Controller)('uploadFile'),
    __metadata("design:paramtypes", [course_section_service_1.CourseSectionService])
], CourseSectionController);
exports.CourseSectionController = CourseSectionController;
//# sourceMappingURL=course-section.controller.js.map