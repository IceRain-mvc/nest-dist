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
exports.PaperBigQuestion = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const question_selection_strategy_entity_1 = require("../question-selection-strategy/question-selection-strategy.entity");
const paper_exam_entity_1 = require("../paper-exam/paper-exam.entity");
const smoke_strategy_entity_1 = require("../smoke-strategy/smoke-strategy.entity");
const testBank_entity_1 = require("../testBank/testBank.entity");
let PaperBigQuestion = class PaperBigQuestion {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, descriptionMD: { required: true, type: () => String }, count: { required: true, type: () => Number }, allScore: { required: true, type: () => Number }, sortId: { required: true, type: () => Number }, createTime: { required: true, type: () => Date }, updateTime: { required: true, type: () => Date }, questionSelectionStrategys: { required: true, type: () => [require("../question-selection-strategy/question-selection-strategy.entity").QuestionSelectionStrategy] }, paperExam: { required: true, type: () => require("../paper-exam/paper-exam.entity").PaperExam }, smokeStrategys: { required: true, type: () => [require("../smoke-strategy/smoke-strategy.entity").SmokeStrategy] }, testBanks: { required: true, type: () => [require("../testBank/testBank.entity").TestBank] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaperBigQuestion.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '第1大题',
        description: '大题名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaperBigQuestion.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '大题描述',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], PaperBigQuestion.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '大题描述md格式',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], PaperBigQuestion.prototype, "descriptionMD", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '拥有题数',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PaperBigQuestion.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '题数总分数',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PaperBigQuestion.prototype, "allScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '排序id',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaperBigQuestion.prototype, "sortId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_time',
    }),
    __metadata("design:type", Date)
], PaperBigQuestion.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_time',
    }),
    __metadata("design:type", Date)
], PaperBigQuestion.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => question_selection_strategy_entity_1.QuestionSelectionStrategy, (questionSelectionStrategy) => questionSelectionStrategy.paperBigQuestion),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], PaperBigQuestion.prototype, "questionSelectionStrategys", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paper_exam_entity_1.PaperExam, (paperExam) => paperExam.paperBigQuestions, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", paper_exam_entity_1.PaperExam)
], PaperBigQuestion.prototype, "paperExam", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => smoke_strategy_entity_1.SmokeStrategy, (smokeStrategy) => smokeStrategy.paperBigQuestion),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], PaperBigQuestion.prototype, "smokeStrategys", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => testBank_entity_1.TestBank, (testBank) => testBank.paperBigQuestions),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], PaperBigQuestion.prototype, "testBanks", void 0);
PaperBigQuestion = __decorate([
    (0, typeorm_1.Entity)()
], PaperBigQuestion);
exports.PaperBigQuestion = PaperBigQuestion;
//# sourceMappingURL=paper-big-question.entity.js.map