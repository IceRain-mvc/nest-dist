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
exports.CourseLearnFreeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const course_learn_free_entity_1 = require("./course-learn-free.entity");
const course_learn_free_service_1 = require("./course-learn-free.service");
let CourseLearnFreeController = class CourseLearnFreeController {
    constructor(courseLearnFreeService) {
        this.courseLearnFreeService = courseLearnFreeService;
    }
    create(body) {
        return this.courseLearnFreeService.create(body);
    }
    updataFree(data) {
        return this.courseLearnFreeService.updataFree(data);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_learn_free_entity_1.CourseLearnFree,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: [require("./course-learn-free.entity").CourseLearnFree] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseLearnFreeController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_learn_free_entity_1.CourseLearnFree,
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    openapi.ApiResponse({ status: 200, type: [require("./course-learn-free.entity").CourseLearnFree] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseLearnFreeController.prototype, "updataFree", null);
CourseLearnFreeController = __decorate([
    (0, swagger_1.ApiTags)('课程学员免登陆学习'),
    (0, common_1.Controller)('course-learn-free'),
    __metadata("design:paramtypes", [course_learn_free_service_1.CourseLearnFreeService])
], CourseLearnFreeController);
exports.CourseLearnFreeController = CourseLearnFreeController;
//# sourceMappingURL=course-learn-free.controller.js.map