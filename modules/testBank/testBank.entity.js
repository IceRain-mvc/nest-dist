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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBank = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const test_options_entity_1 = require("../test-options/test-options.entity");
const test_questions_entity_1 = require("../test-questions/test-questions.entity");
const tree_person_entity_1 = require("../tree-person/tree-person.entity");
const paper_big_question_entity_1 = require("../paper-big-question/paper-big-question.entity");
const smoke_strategy_entity_1 = require("../smoke-strategy/smoke-strategy.entity");
const question_selection_strategy_entity_1 = require("../question-selection-strategy/question-selection-strategy.entity");
const exercise_each_chapter_entity_1 = require("../exercise/exercise-each-chapter/exercise-each-chapter.entity");
const exercise_big_chapter_entity_1 = require("../exercise/exercise-big-chapter/exercise-big-chapter.entity");
let TestBank = class TestBank {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, testOptions: { required: true, type: () => [require("../test-options/test-options.entity").TestOptions] }, testQuestions: { required: true, type: () => [require("../test-questions/test-questions.entity").TestQuestions] }, treePerson: { required: true, type: () => require("../tree-person/tree-person.entity").TreePerson }, questionTypes: { required: true, type: () => String }, examContent: { required: true, type: () => String }, okanswer: { required: true, type: () => String }, myanswer: { required: true, type: () => String }, examTypes: { required: true, type: () => String }, difficultyLevel: { required: true, type: () => String }, gradeNum: { required: true, type: () => Number }, createAt: { required: true, type: () => Date }, okanalysis: { required: true, type: () => String }, isAnswerSort: { required: true, type: () => String }, isKeyword: { required: true, type: () => String }, paperBigQuestions: { required: true, type: () => [require("../paper-big-question/paper-big-question.entity").PaperBigQuestion] }, smokeStrategys: { required: true, type: () => [require("../smoke-strategy/smoke-strategy.entity").SmokeStrategy] }, strategys: { required: true, type: () => [require("../question-selection-strategy/question-selection-strategy.entity").QuestionSelectionStrategy] }, index: { required: false, type: () => Number }, exerciseBigChapters: { required: true, type: () => [require("../exercise/exercise-big-chapter/exercise-big-chapter.entity").ExerBigChapter] }, eachExerse: { required: true, type: () => [require("../exercise/exercise-each-chapter/exercise-each-chapter.entity").EachChapter] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], TestBank.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Array',
        example: [{ options: '选择题选项', optionsContent: '选择题选项内容' }],
    }),
    (0, typeorm_1.OneToMany)(() => test_options_entity_1.TestOptions, (testOptions) => testOptions.testBank, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], TestBank.prototype, "testOptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Array',
        example: [{ score: '得分点', scoreRatio: 10 }],
    }),
    (0, typeorm_1.OneToMany)(() => test_questions_entity_1.TestQuestions, (examQuestions) => examQuestions.testBanks, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], TestBank.prototype, "testQuestions", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tree_person_entity_1.TreePerson, (treePerson) => treePerson.testBank, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tree_person_entity_1.TreePerson)
], TestBank.prototype, "treePerson", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '判断题(题型)' }),
    __metadata("design:type", String)
], TestBank.prototype, "questionTypes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '今天下雨了么(试题内容)' }),
    __metadata("design:type", String)
], TestBank.prototype, "examContent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'B(正确答案)' }),
    __metadata("design:type", String)
], TestBank.prototype, "okanswer", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], TestBank.prototype, "myanswer", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '0' }),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '试题分类' }),
    __metadata("design:type", String)
], TestBank.prototype, "examTypes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '容易(难易度)' }),
    __metadata("design:type", String)
], TestBank.prototype, "difficultyLevel", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, swagger_1.ApiProperty)({ type: 'number', example: 0 }),
    __metadata("design:type", Number)
], TestBank.prototype, "gradeNum", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], TestBank.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '答案解析' }),
    __metadata("design:type", String)
], TestBank.prototype, "okanalysis", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '0' }),
    __metadata("design:type", String)
], TestBank.prototype, "isAnswerSort", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '0' }),
    __metadata("design:type", String)
], TestBank.prototype, "isKeyword", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => paper_big_question_entity_1.PaperBigQuestion, (paperBigQuestion) => paperBigQuestion.testBanks),
    __metadata("design:type", Array)
], TestBank.prototype, "paperBigQuestions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => smoke_strategy_entity_1.SmokeStrategy, (smokeStrategy) => smokeStrategy.testBanks),
    __metadata("design:type", Array)
], TestBank.prototype, "smokeStrategys", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_selection_strategy_entity_1.QuestionSelectionStrategy, (questionSelectionStrategy) => questionSelectionStrategy.testBank),
    __metadata("design:type", Array)
], TestBank.prototype, "strategys", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercise_big_chapter_entity_1.ExerBigChapter, (exerBigChapter) => exerBigChapter.testBanks),
    __metadata("design:type", Array)
], TestBank.prototype, "exerciseBigChapters", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercise_each_chapter_entity_1.EachChapter, (eachExerse) => eachExerse.testBanks),
    __metadata("design:type", Array)
], TestBank.prototype, "eachExerse", void 0);
TestBank = __decorate([
    (0, typeorm_1.Entity)()
], TestBank);
exports.TestBank = TestBank;
//# sourceMappingURL=testBank.entity.js.map