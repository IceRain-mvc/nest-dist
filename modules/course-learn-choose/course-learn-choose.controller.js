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
exports.CourseLearnChooseController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const course_learn_choose_entity_1 = require("./course-learn-choose.entity");
const course_learn_choose_service_1 = require("./course-learn-choose.service");
let CourseLearnChooseController = class CourseLearnChooseController {
    constructor(courseLearnChooseService) {
        this.courseLearnChooseService = courseLearnChooseService;
    }
    create(body) {
        return this.courseLearnChooseService.create(body);
    }
    updataFree(data) {
        return this.courseLearnChooseService.updataChoose(data);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_learn_choose_entity_1.CourseLearnChoose,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: [require("./course-learn-choose.entity").CourseLearnChoose] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseLearnChooseController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'token',
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    openapi.ApiResponse({ status: 200, type: [require("./course-learn-choose.entity").CourseLearnChoose] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseLearnChooseController.prototype, "updataFree", null);
CourseLearnChooseController = __decorate([
    (0, swagger_1.ApiTags)('课程学习方式学员'),
    (0, common_1.Controller)('course-learn-choose'),
    __metadata("design:paramtypes", [course_learn_choose_service_1.CourseLearnChooseService])
], CourseLearnChooseController);
exports.CourseLearnChooseController = CourseLearnChooseController;
//# sourceMappingURL=course-learn-choose.controller.js.map