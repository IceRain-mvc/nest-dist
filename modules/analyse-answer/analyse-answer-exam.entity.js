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
exports.AnalyseAnswerExam = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let AnalyseAnswerExam = class AnalyseAnswerExam {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, questionTypes: { required: false, type: () => String }, examContent: { required: false, type: () => String }, testTreePersonTitle: { required: false, type: () => String }, difficultyLevel: { required: false, type: () => String }, okanswer: { required: false, type: () => String }, answerNumber: { required: false, type: () => Number }, errorNumber: { required: false, type: () => Number }, errorProbability: { required: false, type: () => String }, rightNumber: { required: false, type: () => Number }, rightProbability: { required: false, type: () => String }, scoringProbability: { required: false, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Object)
], AnalyseAnswerExam.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '题型',
    }),
    __metadata("design:type", String)
], AnalyseAnswerExam.prototype, "questionTypes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '试题内容',
    }),
    __metadata("design:type", String)
], AnalyseAnswerExam.prototype, "examContent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '试题分类|考试分类',
    }),
    __metadata("design:type", String)
], AnalyseAnswerExam.prototype, "testTreePersonTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '难度',
    }),
    __metadata("design:type", String)
], AnalyseAnswerExam.prototype, "difficultyLevel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '答案',
    }),
    __metadata("design:type", String)
], AnalyseAnswerExam.prototype, "okanswer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '答题次数',
    }),
    __metadata("design:type", Number)
], AnalyseAnswerExam.prototype, "answerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '答错次数',
    }),
    __metadata("design:type", Number)
], AnalyseAnswerExam.prototype, "errorNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '错误率',
    }),
    __metadata("design:type", String)
], AnalyseAnswerExam.prototype, "errorProbability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '答对次数',
    }),
    __metadata("design:type", Number)
], AnalyseAnswerExam.prototype, "rightNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '正确率',
    }),
    __metadata("design:type", String)
], AnalyseAnswerExam.prototype, "rightProbability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '得分率',
    }),
    __metadata("design:type", String)
], AnalyseAnswerExam.prototype, "scoringProbability", void 0);
AnalyseAnswerExam = __decorate([
    (0, typeorm_1.Entity)()
], AnalyseAnswerExam);
exports.AnalyseAnswerExam = AnalyseAnswerExam;
//# sourceMappingURL=analyse-answer-exam.entity.js.map