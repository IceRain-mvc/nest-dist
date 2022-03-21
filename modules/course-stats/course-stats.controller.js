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
exports.CourseStatsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const course_stats_entity_1 = require("./course-stats.entity");
const course_stats_service_1 = require("./course-stats.service");
let CourseStatsController = class CourseStatsController {
    constructor(courseStatsService) {
        this.courseStatsService = courseStatsService;
    }
    create(examBody) {
        return this.courseStatsService.create(examBody);
    }
    getStudyStats(params) {
        return this.courseStatsService.getStudyStats(params);
    }
    getComment(params) {
        return this.courseStatsService.getComment(params);
    }
    getAbsent(params) {
        return this.courseStatsService.getAbsent(params);
    }
    getStatsAll(params) {
        return this.courseStatsService.getStatsAll(params);
    }
    getExportAbsent(params) {
        return this.courseStatsService.getExportAbsent(params);
    }
    getStatistics(params) {
        return this.courseStatsService.getStatistics(params);
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'stats_courseId',
        required: false,
        description: '课程id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_name',
        required: false,
        description: '学生名',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_department',
        required: false,
        description: '部门',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_duration',
        required: false,
        description: '学习时长',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_number',
        required: false,
        description: '学习次数',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_credit',
        required: false,
        description: '所得学分',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_progress',
        required: false,
        description: '第n章',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_type',
        required: false,
        description: '状态',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_equipment',
        required: false,
        description: '学习设备',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_updateAt',
        required: false,
        description: '开始学习时间',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_enddateAt',
        required: false,
        description: '结束学习时间',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_account',
        required: false,
        description: '账号',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_phone',
        required: false,
        description: '手机号',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_grade',
        required: false,
        description: '考试成绩',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'stats_passexam',
        required: false,
        description: '是否通过考试',
    }),
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_stats_entity_1.CourseStats,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Post)('/statsAddStudy'),
    openapi.ApiResponse({ status: 201, type: require("./course-stats.entity").CourseStats }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseStatsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        description: '第几页',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'pageSize',
        required: false,
        description: '页/条',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'field',
        required: false,
        description: 'null',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'order',
        required: false,
        description: 'null',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'courseId',
        required: false,
        description: '课程分类',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'courseId',
        required: false,
        description: '课程分类',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'typeTitle',
        required: false,
        description: '课程状态',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'timeend',
        required: false,
        description: '筛选结束时间',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'department',
        required: false,
        description: '所属部门',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        description: '搜索',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getStats'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseStatsController.prototype, "getStudyStats", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'count',
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getComment'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseStatsController.prototype, "getComment", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'count',
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getAbsent'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseStatsController.prototype, "getAbsent", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'courseId',
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getStatsAll'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [require("../students-course/students-course.entity").StudentsCourse] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseStatsController.prototype, "getStatsAll", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'courseId',
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getExportAbsent'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseStatsController.prototype, "getExportAbsent", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'count',
        required: false,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getStatistics'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseStatsController.prototype, "getStatistics", null);
CourseStatsController = __decorate([
    (0, common_1.Controller)('course-stats'),
    (0, swagger_1.ApiTags)('课程-学习统计'),
    __metadata("design:paramtypes", [course_stats_service_1.CourseStatsService])
], CourseStatsController);
exports.CourseStatsController = CourseStatsController;
//# sourceMappingURL=course-stats.controller.js.map