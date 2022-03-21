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
exports.PaperBigQuestionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const paper_big_question_service_1 = require("./paper-big-question.service");
const question_selection_strategy_service_1 = require("../question-selection-strategy/question-selection-strategy.service");
let PaperBigQuestionController = class PaperBigQuestionController {
    constructor(paperBigQuestionService, questionSelectionStrategyService) {
        this.paperBigQuestionService = paperBigQuestionService;
        this.questionSelectionStrategyService = questionSelectionStrategyService;
    }
    create(body) {
        return this.paperBigQuestionService.create(body);
    }
    deleteThisQuestion(id) {
        return this.paperBigQuestionService.deleteThisQuestion(id);
    }
    async addRandomSelectionStrategy(id) {
        const result = await this.questionSelectionStrategyService.create({ id });
        return this.paperBigQuestionService.addRandomSelectionStrategy(id, result);
    }
    async findStrategy(body) {
        return this.paperBigQuestionService.findStrategy(body);
    }
    moveToTop(body) {
        return this.paperBigQuestionService.moveToTop(body);
    }
    saveBigQuestionTitle(body) {
        return this.paperBigQuestionService.saveBigQuestionTitle(body);
    }
    getQuestionsById(id) {
        return this.paperBigQuestionService.getQuestionsById(id);
    }
    saveBigQuestionDes(body) {
        return this.paperBigQuestionService.saveBigQuestionDes(body);
    }
    saveQuestionInfoBig(body) {
        return this.paperBigQuestionService.saveQuestionInfoBig(body);
    }
    deleteSmallQuestion(body) {
        return this.paperBigQuestionService.deleteSmallQuestion(body);
    }
    getSmokeStrategy(id) {
        return this.paperBigQuestionService.getSmokeStrategy(id);
    }
    async changeScoreValue(body) {
        return this.paperBigQuestionService.updateSingleScore(body);
    }
    async changeScoreValueList(body) {
        return this.paperBigQuestionService.updateGroupScore(body);
    }
    changeQuesSort(body) {
        return this.paperBigQuestionService.changeQuesSort(body);
    }
    infoPageQuestion(body) {
        return this.paperBigQuestionService.infoPageQuestion(body);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "deleteThisQuestion", null);
__decorate([
    (0, common_1.Post)('add-strategy/:id'),
    openapi.ApiResponse({ status: 201, type: require("./paper-big-question.entity").PaperBigQuestion }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperBigQuestionController.prototype, "addRandomSelectionStrategy", null);
__decorate([
    (0, common_1.Put)('move-to-top'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "moveToTop", null);
__decorate([
    (0, common_1.Put)('save-title'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "saveBigQuestionTitle", null);
__decorate([
    (0, common_1.Get)('test-question/:id'),
    openapi.ApiResponse({ status: 200, type: require("./paper-big-question.entity").PaperBigQuestion }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "getQuestionsById", null);
__decorate([
    (0, common_1.Put)('save-description'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "saveBigQuestionDes", null);
__decorate([
    (0, common_1.Put)('save-ques'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "saveQuestionInfoBig", null);
__decorate([
    (0, common_1.Put)('delete-small-question'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "deleteSmallQuestion", null);
__decorate([
    (0, common_1.Get)('smoke-strategy/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "getSmokeStrategy", null);
__decorate([
    (0, common_1.Put)('change'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperBigQuestionController.prototype, "changeScoreValue", null);
__decorate([
    (0, common_1.Put)('change-group'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperBigQuestionController.prototype, "changeScoreValueList", null);
__decorate([
    (0, common_1.Put)('change-ques-sort'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperBigQuestionController.prototype, "changeQuesSort", null);
__decorate([
    (0, common_1.Put)('info'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperBigQuestionController.prototype, "infoPageQuestion", null);
PaperBigQuestionController = __decorate([
    (0, common_1.Controller)('paper-big-question'),
    __metadata("design:paramtypes", [paper_big_question_service_1.PaperBigQuestionService,
        question_selection_strategy_service_1.QuestionSelectionStrategyService])
], PaperBigQuestionController);
exports.PaperBigQuestionController = PaperBigQuestionController;
//# sourceMappingURL=paper-big-question.controller.js.map