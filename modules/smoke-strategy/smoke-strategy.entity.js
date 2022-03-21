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
exports.SmokeStrategy = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const paper_big_question_entity_1 = require("../paper-big-question/paper-big-question.entity");
const testBank_entity_1 = require("../testBank/testBank.entity");
let SmokeStrategy = class SmokeStrategy {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, noDifficulty: { required: true, type: () => Number }, easy: { required: true, type: () => Number }, medium: { required: true, type: () => Number }, difficult: { required: true, type: () => Number }, count: { required: true, type: () => Number }, everyScore: { required: true, type: () => Number }, sortIndex: { required: true, type: () => Number }, paperBigQuestion: { required: true, type: () => require("../paper-big-question/paper-big-question.entity").PaperBigQuestion }, testBanks: { required: true, type: () => [require("../testBank/testBank.entity").TestBank] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SmokeStrategy.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '不限难度题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SmokeStrategy.prototype, "noDifficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '简单题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SmokeStrategy.prototype, "easy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '中等题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SmokeStrategy.prototype, "medium", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '困难题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SmokeStrategy.prototype, "difficult", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '抽题数量',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SmokeStrategy.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '每题分数',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SmokeStrategy.prototype, "everyScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '排序id',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SmokeStrategy.prototype, "sortIndex", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paper_big_question_entity_1.PaperBigQuestion, (paperBigQuestion) => paperBigQuestion.questionSelectionStrategys, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", paper_big_question_entity_1.PaperBigQuestion)
], SmokeStrategy.prototype, "paperBigQuestion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => testBank_entity_1.TestBank, (testBank) => testBank.smokeStrategys),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], SmokeStrategy.prototype, "testBanks", void 0);
SmokeStrategy = __decorate([
    (0, typeorm_1.Entity)()
], SmokeStrategy);
exports.SmokeStrategy = SmokeStrategy;
//# sourceMappingURL=smoke-strategy.entity.js.map