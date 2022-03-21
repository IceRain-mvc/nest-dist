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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLearnWayController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const course_learn_way_service_1 = require("./course-learn-way.service");
let CourseLearnWayController = class CourseLearnWayController {
    constructor(courseLearnWayService) {
        this.courseLearnWayService = courseLearnWayService;
    }
    async getAll() {
        return await this.courseLearnWayService.getAll();
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.Get)('/getAll'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [require("./course-learn-way.entity").CourseLearnWay] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseLearnWayController.prototype, "getAll", null);
CourseLearnWayController = __decorate([
    (0, common_1.Controller)('courseLearnWay'),
    (0, swagger_1.ApiTags)('课程学习方式'),
    __metadata("design:paramtypes", [course_learn_way_service_1.CourseLearnWayService])
], CourseLearnWayController);
exports.CourseLearnWayController = CourseLearnWayController;
//# sourceMappingURL=course-learn-way.controller.js.map