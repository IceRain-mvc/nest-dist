"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamModule = void 0;
const common_1 = require("@nestjs/common");
const exam_controller_1 = require("./exam.controller");
const exam_service_1 = require("./exam.service");
const typeorm_1 = require("@nestjs/typeorm");
const exam_entity_1 = require("./exam.entity");
const exam_config_module_1 = require("../exam-config/exam-config.module");
const exam_config_service_1 = require("../exam-config/exam-config.service");
const examinee_fill_message_module_1 = require("../examinee-fill-message/examinee-fill-message.module");
const examinee_fill_message_service_1 = require("../examinee-fill-message/examinee-fill-message.service");
const tree_person_module_1 = require("../tree-person/tree-person.module");
const tree_person_service_1 = require("../tree-person/tree-person.service");
const students_module_1 = require("../students/students.module");
const students_service_1 = require("../students/students.service");
const paper_big_question_module_1 = require("../paper-big-question/paper-big-question.module");
const paper_big_question_service_1 = require("../paper-big-question/paper-big-question.service");
const paper_exam_module_1 = require("../paper-exam/paper-exam.module");
const paper_exam_service_1 = require("../paper-exam/paper-exam.service");
const smoke_strategy_module_1 = require("../smoke-strategy/smoke-strategy.module");
const smoke_strategy_service_1 = require("../smoke-strategy/smoke-strategy.service");
const question_selection_strategy_module_1 = require("../question-selection-strategy/question-selection-strategy.module");
const question_selection_strategy_service_1 = require("../question-selection-strategy/question-selection-strategy.service");
let ExamModule = class ExamModule {
};
ExamModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([exam_entity_1.Exam]),
            exam_config_module_1.ExamConfigModule,
            examinee_fill_message_module_1.ExamineeFillMessageModule,
            tree_person_module_1.TreePersonModule,
            (0, common_1.forwardRef)(() => students_module_1.StudentsModule),
            paper_big_question_module_1.PaperBigQuestionModule,
            paper_exam_module_1.PaperExamModule,
            smoke_strategy_module_1.SmokeStrategyModule,
            question_selection_strategy_module_1.QuestionSelectionStrategyModule,
        ],
        exports: [typeorm_1.TypeOrmModule, tree_person_module_1.TreePersonModule, students_service_1.StudentsService, exam_service_1.ExamService],
        controllers: [exam_controller_1.ExamController],
        providers: [
            exam_service_1.ExamService,
            exam_config_service_1.ExamConfigService,
            examinee_fill_message_service_1.ExamineeFillMessageService,
            tree_person_service_1.TreePersonService,
            students_service_1.StudentsService,
            paper_big_question_service_1.PaperBigQuestionService,
            paper_exam_service_1.PaperExamService,
            smoke_strategy_service_1.SmokeStrategyService,
            question_selection_strategy_service_1.QuestionSelectionStrategyService,
        ],
    })
], ExamModule);
exports.ExamModule = ExamModule;
//# sourceMappingURL=exam.module.js.map