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
exports.QuestionSelectionStrategy = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const paper_big_question_entity_1 = require("../paper-big-question/paper-big-question.entity");
const testBank_entity_1 = require("../testBank/testBank.entity");
let QuestionSelectionStrategy = class QuestionSelectionStrategy {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, questionClassify: { required: true, type: () => String }, questionType: { required: true, type: () => Number }, noDifficulty: { required: true, type: () => Number }, easy: { required: true, type: () => Number }, medium: { required: true, type: () => Number }, difficult: { required: true, type: () => Number }, questionAllMarks: { required: true, type: () => Number }, everyScore: { required: true, type: () => Number }, sortIndex: { required: true, type: () => Number }, paperBigQuestion: { required: true, type: () => require("../paper-big-question/paper-big-question.entity").PaperBigQuestion }, testBank: { required: true, type: () => [require("../testBank/testBank.entity").TestBank] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '单选题',
        description: '试题类型',
    }),
    (0, typeorm_1.Column)({ default: '单选题' }),
    __metadata("design:type", String)
], QuestionSelectionStrategy.prototype, "questionClassify", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '试题分类',
    }),
    (0, typeorm_1.Column)({ default: 4 }),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "questionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '不限程度题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "noDifficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '容易题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "easy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '中等题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "medium", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '困难题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "difficult", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '总分',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "questionAllMarks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '每题分数',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "everyScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '排序序号',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], QuestionSelectionStrategy.prototype, "sortIndex", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paper_big_question_entity_1.PaperBigQuestion, (paperBigQuestion) => paperBigQuestion.questionSelectionStrategys, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", paper_big_question_entity_1.PaperBigQuestion)
], QuestionSelectionStrategy.prototype, "paperBigQuestion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => testBank_entity_1.TestBank, (testBank) => testBank.strategys),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QuestionSelectionStrategy.prototype, "testBank", void 0);
QuestionSelectionStrategy = __decorate([
    (0, typeorm_1.Entity)()
], QuestionSelectionStrategy);
exports.QuestionSelectionStrategy = QuestionSelectionStrategy;
//# sourceMappingURL=question-selection-strategy.entity.js.map