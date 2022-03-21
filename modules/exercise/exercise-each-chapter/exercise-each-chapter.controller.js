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
exports.ExerciseEachChapterController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const exercise_each_chapter_service_1 = require("./exercise-each-chapter.service");
let ExerciseEachChapterController = class ExerciseEachChapterController {
    constructor(exerciseEachChapterController) {
        this.exerciseEachChapterController = exerciseEachChapterController;
    }
    addEachChapter(body) {
        return this.exerciseEachChapterController.create(body);
    }
    deleteThisStrategy(id) {
        return this.exerciseEachChapterController.deleteThisStrategy(id);
    }
    async changeScoreValue(body) {
        return this.exerciseEachChapterController.updateSingleScore(body);
    }
    getStrategyQuestionList(id) {
        return this.exerciseEachChapterController.getStrategyQuestionList(id);
    }
    saveQuestionInfoStrategy(body) {
        return this.exerciseEachChapterController.saveQuestionInfoStrategy(body);
    }
    deleteSmokeQuestion(body) {
        return this.exerciseEachChapterController.deleteSmokeQuestion(body);
    }
    infoSmoke(body) {
        return this.exerciseEachChapterController.infoSmoke(body);
    }
    bathDelete(body) {
        return this.exerciseEachChapterController.bath(body);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseEachChapterController.prototype, "addEachChapter", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseEachChapterController.prototype, "deleteThisStrategy", null);
__decorate([
    (0, common_1.Put)('change'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseEachChapterController.prototype, "changeScoreValue", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseEachChapterController.prototype, "getStrategyQuestionList", null);
__decorate([
    (0, common_1.Put)('save-ques'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseEachChapterController.prototype, "saveQuestionInfoStrategy", null);
__decorate([
    (0, common_1.Put)('del-smoke-ques'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseEachChapterController.prototype, "deleteSmokeQuestion", null);
__decorate([
    (0, common_1.Put)('info'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseEachChapterController.prototype, "infoSmoke", null);
__decorate([
    (0, common_1.Put)('bath-del'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseEachChapterController.prototype, "bathDelete", null);
ExerciseEachChapterController = __decorate([
    (0, common_1.Controller)('exercise-each-chapter'),
    __metadata("design:paramtypes", [exercise_each_chapter_service_1.ExerciseEachChapterService])
], ExerciseEachChapterController);
exports.ExerciseEachChapterController = ExerciseEachChapterController;
//# sourceMappingURL=exercise-each-chapter.controller.js.map