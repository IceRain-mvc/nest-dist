"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperBigQuestionModule = void 0;
const common_1 = require("@nestjs/common");
const paper_big_question_controller_1 = require("./paper-big-question.controller");
const paper_big_question_service_1 = require("./paper-big-question.service");
const typeorm_1 = require("@nestjs/typeorm");
const paper_big_question_entity_1 = require("./paper-big-question.entity");
const question_selection_strategy_module_1 = require("../question-selection-strategy/question-selection-strategy.module");
const question_selection_strategy_service_1 = require("../question-selection-strategy/question-selection-strategy.service");
const paper_exam_module_1 = require("../paper-exam/paper-exam.module");
const paper_exam_service_1 = require("../paper-exam/paper-exam.service");
const smoke_strategy_module_1 = require("../smoke-strategy/smoke-strategy.module");
const smoke_strategy_service_1 = require("../smoke-strategy/smoke-strategy.service");
const testBank_module_1 = require("../testBank/testBank.module");
const testBank_service_1 = require("../testBank/testBank.service");
const tree_person_module_1 = require("../tree-person/tree-person.module");
const tree_person_service_1 = require("../tree-person/tree-person.service");
let PaperBigQuestionModule = class PaperBigQuestionModule {
};
PaperBigQuestionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([paper_big_question_entity_1.PaperBigQuestion]),
            question_selection_strategy_module_1.QuestionSelectionStrategyModule,
            (0, common_1.forwardRef)(() => testBank_module_1.TestBankModule),
            (0, common_1.forwardRef)(() => paper_exam_module_1.PaperExamModule),
            (0, common_1.forwardRef)(() => smoke_strategy_module_1.SmokeStrategyModule),
            tree_person_module_1.TreePersonModule,
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            paper_exam_module_1.PaperExamModule,
            smoke_strategy_module_1.SmokeStrategyModule,
            testBank_module_1.TestBankModule,
            paper_big_question_service_1.PaperBigQuestionService,
        ],
        controllers: [paper_big_question_controller_1.PaperBigQuestionController],
        providers: [
            paper_big_question_service_1.PaperBigQuestionService,
            question_selection_strategy_service_1.QuestionSelectionStrategyService,
            paper_exam_service_1.PaperExamService,
            smoke_strategy_service_1.SmokeStrategyService,
            testBank_service_1.TestBankService,
            tree_person_service_1.TreePersonService,
        ],
    })
], PaperBigQuestionModule);
exports.PaperBigQuestionModule = PaperBigQuestionModule;
//# sourceMappingURL=paper-big-question.module.js.map