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
exports.CourseController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const course_service_1 = require("./course.service");
const course_entity_1 = require("./course.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CourseController = class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    create(body) {
        return this.courseService.create(body);
    }
    async getAll(params) {
        const res = await this.courseService.getAll(params);
        return res;
    }
    editStar(id, updateStarDto) {
        return this.courseService.editStar(Object.assign({}, updateStarDto));
    }
    addStar(id, updateStarDto) {
        return this.courseService.addStar(Object.assign({}, updateStarDto));
    }
    deleteRecycle(id, updateStarDto) {
        return this.courseService.deleteRecycle(Object.assign({}, updateStarDto));
    }
    recoverCourse(id, updateStarDto) {
        return this.courseService.recoverCourse(Object.assign({}, updateStarDto));
    }
    deleteColumn(id, updateStarDto) {
        return this.courseService.deleteColumn(Object.assign({}, updateStarDto));
    }
    getCourseItem(params) {
        return this.courseService.getCourseItem(params);
    }
    compileCourse(fromObj) {
        return this.courseService.compileCourse(fromObj);
    }
    async changeCourseType(body) {
        return await this.courseService.changeCourseType(body);
    }
    async getBatchStudent(obj) {
        return this.courseService.getBatchStudent(obj);
    }
    async getStudentItem(obj) {
        return this.courseService.getStudentItem(obj);
    }
    countList() {
        const res = this.courseService.countList();
        return res;
    }
    autoDelete() {
        return this.courseService.autoDelete();
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_entity_1.Course,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: '创建成功',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./course.entity").Course }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        description: '页码',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'pageSize',
        required: false,
        description: '每页条数',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'order',
        required: false,
        description: '排序顺序',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'field',
        required: false,
        description: '排序方法',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'startTime',
        required: false,
        description: '筛选开始时间',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'endTime',
        required: false,
        description: '筛选结束时间',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'searchValue',
        required: false,
        description: '搜索框内容',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'searchTree',
        required: false,
        description: '树状分类内容',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'searchTree',
        required: false,
        description: '树状分类类型',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'isCourseRecycle',
        required: false,
        description: '是否为回收站数据',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'isCourseStar',
        required: false,
        description: '是否为星标课程',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'courseState',
        required: false,
        description: '根据课程时间分类',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_entity_1.Course,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '课程id',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/cancelStar'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "editStar", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_entity_1.Course,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '课程id',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/addStar'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "addStar", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_entity_1.Course,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '课程id',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/deleteRecycle'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "deleteRecycle", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_entity_1.Course,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '课程id',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/recoverCourse'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "recoverCourse", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_entity_1.Course,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '课程id',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/deleteColumn'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "deleteColumn", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getCourseItem'),
    openapi.ApiResponse({ status: 200, type: require("./course.entity").Course }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getCourseItem", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_entity_1.Course,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        required: false,
        description: '课程id',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/compileCourse'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "compileCourse", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_entity_1.Course,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'courseId',
        required: false,
        description: '课程id',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'title',
        required: false,
        description: '树状分类类型',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/changeCourseType'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "changeCourseType", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'data',
        required: true,
        description: '根据学生id获取学生数据',
        type: 'array',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getBatchStudent'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getBatchStudent", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'data',
        required: true,
        description: '根据学生id获取学生数据',
        type: 'array',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getStudentItem'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getStudentItem", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/countList'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "countList", null);
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'account',
        required: true,
        description: '学员账户数组',
        type: 'array',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/autoDelete'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "autoDelete", null);
CourseController = __decorate([
    (0, swagger_1.ApiTags)('课程'),
    (0, common_1.Controller)('course'),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map