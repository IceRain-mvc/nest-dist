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
exports.AnalyseGrade = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const analyse_answer_entity_1 = require("../analyse-answer/analyse-answer.entity");
const analyse_student_analyse_entity_1 = require("../analyse-student-analyse/analyse-student-analyse.entity");
let AnalyseGrade = class AnalyseGrade {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, al_classification: { required: true, type: () => String }, al_exam_Name: { required: true, type: () => String }, al_exam_time: { required: true, type: () => String }, al_exam_start_time: { required: true, type: () => Date }, al_exam_end_time: { required: true, type: () => Date }, al_paper_type: { required: true, type: () => String }, al_test_questions_number: { required: true, type: () => Number }, al_student_answer_number: { required: true, type: () => Number }, al_test_all_correct: { required: true, type: () => String }, al_test_objective_correct: { required: true, type: () => String }, al_test_subjective_correct: { required: true, type: () => String }, al_test_all_wrong: { required: true, type: () => String }, al_test_objective_wrong: { required: true, type: () => String }, al_test_subjective_wrong: { required: true, type: () => String }, al_test_all_score: { required: true, type: () => String }, al_test_objective_score: { required: true, type: () => String }, al_test_subjective_score: { required: true, type: () => String }, agrade: { required: true, type: () => require("../analyse-answer/analyse-answer.entity").AnalyseAnswer }, al_answer: { required: true, type: () => [require("../analyse-answer/analyse-answer.entity").AnalyseAnswer] }, analysestudentanalyses: { required: true, type: () => [require("../analyse-student-analyse/analyse-student-analyse.entity").Analysestudentanalyse] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Object)
], AnalyseGrade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考试分类',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_classification", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考试名称',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_exam_Name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考试时间',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_exam_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考试开始时间',
    }),
    __metadata("design:type", Date)
], AnalyseGrade.prototype, "al_exam_start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '结束时间',
    }),
    __metadata("design:type", Date)
], AnalyseGrade.prototype, "al_exam_end_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '试卷出现形式 =》考试 | 练习 - 试卷出题形式 =》随机试卷 | 固定试卷',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_paper_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '当前试卷试题数量',
    }),
    __metadata("design:type", Number)
], AnalyseGrade.prototype, "al_test_questions_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '学员答题次数',
    }),
    __metadata("design:type", Number)
], AnalyseGrade.prototype, "al_student_answer_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '正确率(全部)',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_all_correct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '客观题正确率',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_objective_correct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '主观题正确率',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_subjective_correct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '错题率(全部)',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_all_wrong", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '客观题错误率',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_objective_wrong", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '主观题错误率',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_subjective_wrong", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '得分率(全部)',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_all_score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '客观题得分率',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_objective_score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '主观题得分率',
    }),
    __metadata("design:type", String)
], AnalyseGrade.prototype, "al_test_subjective_score", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => analyse_answer_entity_1.AnalyseAnswer, (aanswer) => aanswer.al_agrade),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '创建链接',
    }),
    __metadata("design:type", Array)
], AnalyseGrade.prototype, "al_answer", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => analyse_student_analyse_entity_1.Analysestudentanalyse, (analysestudentanalyse) => analysestudentanalyse.examalayses),
    __metadata("design:type", Array)
], AnalyseGrade.prototype, "analysestudentanalyses", void 0);
AnalyseGrade = __decorate([
    (0, typeorm_1.Entity)()
], AnalyseGrade);
exports.AnalyseGrade = AnalyseGrade;
//# sourceMappingURL=analyse-grade.entity.js.map