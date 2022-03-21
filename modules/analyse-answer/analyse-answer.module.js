"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseAnswerModule = void 0;
const common_1 = require("@nestjs/common");
const analyse_answer_controller_1 = require("./analyse-answer.controller");
const analyse_answer_service_1 = require("./analyse-answer.service");
const analyse_answer_entity_1 = require("./analyse-answer.entity");
const analyse_answer_exam_entity_1 = require("./analyse-answer-exam.entity");
const typeorm_1 = require("@nestjs/typeorm");
const paper_exam_module_1 = require("../paper-exam/paper-exam.module");
const paper_exam_service_1 = require("../paper-exam/paper-exam.service");
const paper_big_question_module_1 = require("../paper-big-question/paper-big-question.module");
const paper_big_question_service_1 = require("../paper-big-question/paper-big-question.service");
let AnalyseAnswerModule = class AnalyseAnswerModule {
};
AnalyseAnswerModule = __decorate([
    (0, common_1.Module)({
        controllers: [analyse_answer_controller_1.AnalyseAnswerController],
        providers: [analyse_answer_service_1.AnalyseAnswerService, paper_exam_service_1.PaperExamService, paper_big_question_service_1.PaperBigQuestionService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([analyse_answer_entity_1.AnalyseAnswer, analyse_answer_exam_entity_1.AnalyseAnswerExam]),
            paper_exam_module_1.PaperExamModule,
            paper_big_question_module_1.PaperBigQuestionModule,
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], AnalyseAnswerModule);
exports.AnalyseAnswerModule = AnalyseAnswerModule;
//# sourceMappingURL=analyse-answer.module.js.map