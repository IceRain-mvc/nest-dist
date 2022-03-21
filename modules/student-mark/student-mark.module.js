"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsMarkModule = void 0;
const common_1 = require("@nestjs/common");
const student_mark_controller_1 = require("./student-mark.controller");
const student_mark_service_1 = require("./student-mark.service");
const typeorm_1 = require("@nestjs/typeorm");
const student_mark_entity_1 = require("./student-mark.entity");
const students_exam_result_module_1 = require("../students-exam-result/students-exam-result.module");
const students_exam_result_service_1 = require("../students-exam-result/students-exam-result.service");
const exam_module_1 = require("../exam/exam.module");
const exam_service_1 = require("../exam/exam.service");
const tree_person_module_1 = require("../tree-person/tree-person.module");
const tree_person_service_1 = require("../tree-person/tree-person.service");
const paper_exam_service_1 = require("../paper-exam/paper-exam.service");
const paper_exam_module_1 = require("../paper-exam/paper-exam.module");
const paper_big_question_module_1 = require("../paper-big-question/paper-big-question.module");
const paper_big_question_service_1 = require("../paper-big-question/paper-big-question.service");
const question_selection_strategy_service_1 = require("../question-selection-strategy/question-selection-strategy.service");
const question_selection_strategy_module_1 = require("../question-selection-strategy/question-selection-strategy.module");
const examinee_fill_message_module_1 = require("../examinee-fill-message/examinee-fill-message.module");
const examinee_fill_message_service_1 = require("../examinee-fill-message/examinee-fill-message.service");
const exam_config_module_1 = require("../exam-config/exam-config.module");
const exam_config_service_1 = require("../exam-config/exam-config.service");
const students_module_1 = require("../students/students.module");
const smoke_strategy_module_1 = require("../smoke-strategy/smoke-strategy.module");
const students_service_1 = require("../students/students.service");
const smoke_strategy_service_1 = require("../smoke-strategy/smoke-strategy.service");
let StudentsMarkModule = class StudentsMarkModule {
};
StudentsMarkModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([student_mark_entity_1.StudentsMark]),
            students_exam_result_module_1.StudentsExamResultModule,
            exam_module_1.ExamModule,
            tree_person_module_1.TreePersonModule,
            paper_exam_module_1.PaperExamModule,
            paper_big_question_module_1.PaperBigQuestionModule,
            question_selection_strategy_module_1.QuestionSelectionStrategyModule,
            examinee_fill_message_module_1.ExamineeFillMessageModule,
            exam_config_module_1.ExamConfigModule,
            (0, common_1.forwardRef)(() => students_module_1.StudentsModule),
            smoke_strategy_module_1.SmokeStrategyModule,
        ],
        exports: [typeorm_1.TypeOrmModule, tree_person_module_1.TreePersonModule, students_service_1.StudentsService, exam_service_1.ExamService],
        controllers: [student_mark_controller_1.StudentsMarkController],
        providers: [
            student_mark_service_1.StudentsMarkService,
            students_exam_result_service_1.StudentsExamResultService,
            exam_service_1.ExamService,
            tree_person_service_1.TreePersonService,
            paper_exam_service_1.PaperExamService,
            paper_big_question_service_1.PaperBigQuestionService,
            question_selection_strategy_service_1.QuestionSelectionStrategyService,
            examinee_fill_message_service_1.ExamineeFillMessageService,
            exam_config_service_1.ExamConfigService,
            students_service_1.StudentsService,
            smoke_strategy_service_1.SmokeStrategyService,
        ],
    })
], StudentsMarkModule);
exports.StudentsMarkModule = StudentsMarkModule;
//# sourceMappingURL=student-mark.module.js.map