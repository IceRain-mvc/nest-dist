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
exports.PaperExamController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const paper_exam_service_1 = require("./paper-exam.service");
const swagger_1 = require("@nestjs/swagger");
let PaperExamController = class PaperExamController {
    constructor(paperExamService) {
        this.paperExamService = paperExamService;
    }
    create(body) {
        return this.paperExamService.create(body);
    }
    createExercise(body) {
        return this.paperExamService.createExercise(body);
    }
    createTest(body) {
        return this.paperExamService.createTest(body);
    }
    getPaperMessage(id) {
        return this.paperExamService.getPaperMessage(id);
    }
    async generateExam(id) {
        return this.paperExamService.generateExam(id);
    }
    async generatorStrategyExam(id) {
        return this.paperExamService.generatorStrategyExam(id);
    }
    async getGeneratorPaper(id) {
        return this.paperExamService.generatorPaper(id);
    }
    async getGeneratoChapter(id) {
        return this.paperExamService.generatorChapter(id);
    }
    async getBigQuestion(id) {
        return await this.paperExamService.getBigQuestion(id);
    }
    getSmallQuestionCount(paperId) {
        return this.paperExamService.strategyCount(paperId);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperExamController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('paper-exercise'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperExamController.prototype, "createExercise", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperExamController.prototype, "createTest", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaperExamController.prototype, "getPaperMessage", null);
__decorate([
    (0, common_1.Put)('ques/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperExamController.prototype, "generateExam", null);
__decorate([
    (0, common_1.Put)('generator-strategy/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperExamController.prototype, "generatorStrategyExam", null);
__decorate([
    (0, common_1.Get)('paper/:id'),
    openapi.ApiResponse({ status: 200, type: require("./paper-exam.entity").PaperExam }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperExamController.prototype, "getGeneratorPaper", null);
__decorate([
    (0, common_1.Get)('chapter/:id'),
    openapi.ApiResponse({ status: 200, type: require("./paper-exam.entity").PaperExam }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperExamController.prototype, "getGeneratoChapter", null);
__decorate([
    (0, common_1.Get)('/getQuestion'),
    openapi.ApiResponse({ status: 200, type: require("./paper-exam.entity").PaperExam }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaperExamController.prototype, "getBigQuestion", null);
__decorate([
    (0, common_1.Get)('questionCount/:paperId'),
    openapi.ApiResponse({ status: 200, type: require("./paper-exam.entity").PaperExam }),
    __param(0, (0, common_1.Param)('paperId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperExamController.prototype, "getSmallQuestionCount", null);
PaperExamController = __decorate([
    (0, swagger_1.ApiTags)('考试-试卷'),
    (0, common_1.Controller)('paper-exam'),
    __metadata("design:paramtypes", [paper_exam_service_1.PaperExamService])
], PaperExamController);
exports.PaperExamController = PaperExamController;
//# sourceMappingURL=paper-exam.controller.js.map