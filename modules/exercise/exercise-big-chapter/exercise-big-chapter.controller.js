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
exports.ExerciseBigChapterController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const exercise_big_chapter_service_1 = require("./exercise-big-chapter.service");
const exercise_big_chapter_entity_1 = require("./exercise-big-chapter.entity");
let ExerciseBigChapterController = class ExerciseBigChapterController {
    constructor(exerciseBigChapter) {
        this.exerciseBigChapter = exerciseBigChapter;
    }
    create(body) {
        return this.exerciseBigChapter.create(body);
    }
    getAll() {
        return this.exerciseBigChapter.getAll();
    }
    deleteThisChapter(id) {
        return this.exerciseBigChapter.deleteThisChapter(id);
    }
    getEachChapter(id) {
        return this.exerciseBigChapter.getEachChapter(id);
    }
    saveBigQuestionTitle(body) {
        return this.exerciseBigChapter.saveBigQuestionTitle(body);
    }
    saveQuestionInfoBig(body) {
        return this.exerciseBigChapter.saveQuestionInfoBig(body);
    }
    moveToTop(body) {
        return this.exerciseBigChapter.moveToTop(body);
    }
};
__decorate([
    (0, common_1.Post)('addCgapter'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseBigChapterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getAll'),
    openapi.ApiResponse({ status: 200, type: [require("./exercise-big-chapter.entity").ExerBigChapter] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExerciseBigChapterController.prototype, "getAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseBigChapterController.prototype, "deleteThisChapter", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseBigChapterController.prototype, "getEachChapter", null);
__decorate([
    (0, common_1.Put)('save-title'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseBigChapterController.prototype, "saveBigQuestionTitle", null);
__decorate([
    (0, common_1.Put)('save-ques'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseBigChapterController.prototype, "saveQuestionInfoBig", null);
__decorate([
    (0, common_1.Put)('move-to-top'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseBigChapterController.prototype, "moveToTop", null);
ExerciseBigChapterController = __decorate([
    (0, common_1.Controller)('exercise-big-chapter'),
    __metadata("design:paramtypes", [exercise_big_chapter_service_1.ExerciseBigChapterService])
], ExerciseBigChapterController);
exports.ExerciseBigChapterController = ExerciseBigChapterController;
//# sourceMappingURL=exercise-big-chapter.controller.js.map