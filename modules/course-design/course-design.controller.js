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
exports.CourseDesignController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const course_design_service_1 = require("./course-design.service");
const course_design_entity_1 = require("./course-design.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CourseDesignController = class CourseDesignController {
    constructor(CourseDesignService) {
        this.CourseDesignService = CourseDesignService;
    }
    getChapter(item) {
        return this.CourseDesignService.getChapter(item);
    }
    addMessage(item) {
        return this.CourseDesignService.addMessage(item);
    }
    deleteMessage(item) {
        return this.CourseDesignService.deleteMessage(item);
    }
    recomposeMessage(item) {
        return this.CourseDesignService.recomposeMessage(item);
    }
    editChapterName(item) {
        return this.CourseDesignService.editChapterName(item);
    }
};
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'courseId',
        required: false,
        description: '课程id',
    }),
    (0, common_1.Get)('/design_chapter'),
    openapi.ApiResponse({ status: 200, type: [require("./course-design.entity").CourseDesign] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseDesignController.prototype, "getChapter", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_design_entity_1.CourseDesign,
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/add_chapter'),
    openapi.ApiResponse({ status: 201, type: [require("./course-design.entity").CourseDesign] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseDesignController.prototype, "addMessage", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'chapterId',
        required: false,
        description: '章节id',
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete_chapter'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseDesignController.prototype, "deleteMessage", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_design_entity_1.CourseDesign,
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/recompose_chapter'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseDesignController.prototype, "recomposeMessage", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: course_design_entity_1.CourseDesign,
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/editChapterName'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseDesignController.prototype, "editChapterName", null);
CourseDesignController = __decorate([
    (0, swagger_1.ApiTags)('课程章节'),
    (0, common_1.Controller)('course-design'),
    __metadata("design:paramtypes", [course_design_service_1.CourseDesignService])
], CourseDesignController);
exports.CourseDesignController = CourseDesignController;
//# sourceMappingURL=course-design.controller.js.map