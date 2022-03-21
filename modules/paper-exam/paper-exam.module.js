"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperExamModule = void 0;
const common_1 = require("@nestjs/common");
const paper_exam_controller_1 = require("./paper-exam.controller");
const paper_exam_service_1 = require("./paper-exam.service");
const typeorm_1 = require("@nestjs/typeorm");
const paper_exam_entity_1 = require("./paper-exam.entity");
const paper_big_question_module_1 = require("../paper-big-question/paper-big-question.module");
const paper_big_question_service_1 = require("../paper-big-question/paper-big-question.service");
const exercise_big_chapter_module_1 = require("../exercise/exercise-big-chapter/exercise-big-chapter.module");
const exercise_big_chapter_service_1 = require("../exercise/exercise-big-chapter/exercise-big-chapter.service");
const exercise_each_chapter_module_1 = require("../exercise/exercise-each-chapter/exercise-each-chapter.module");
const exercise_each_chapter_service_1 = require("../exercise/exercise-each-chapter/exercise-each-chapter.service");
let PaperExamModule = class PaperExamModule {
};
PaperExamModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([paper_exam_entity_1.PaperExam]),
            (0, common_1.forwardRef)(() => paper_big_question_module_1.PaperBigQuestionModule),
            exercise_each_chapter_module_1.ExerciseEachChapterModule,
            exercise_big_chapter_module_1.ExerciseBigChapterModule,
        ],
        exports: [typeorm_1.TypeOrmModule, paper_exam_service_1.PaperExamService, exercise_big_chapter_service_1.ExerciseBigChapterService],
        controllers: [paper_exam_controller_1.PaperExamController],
        providers: [
            paper_exam_service_1.PaperExamService,
            paper_big_question_service_1.PaperBigQuestionService,
            exercise_big_chapter_service_1.ExerciseBigChapterService,
            exercise_each_chapter_service_1.ExerciseEachChapterService,
        ],
    })
], PaperExamModule);
exports.PaperExamModule = PaperExamModule;
//# sourceMappingURL=paper-exam.module.js.map