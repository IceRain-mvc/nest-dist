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
exports.AnalyseAnswer = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const analyse_grade_entity_1 = require("../analyse-grade/analyse-grade.entity");
let AnalyseAnswer = class AnalyseAnswer {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, al_exam_type: { required: true, type: () => String }, al_exam_content: { required: true, type: () => String }, al_exam_startTime: { required: true, type: () => Date }, al_exam_endTime: { required: true, type: () => Date }, al_exam_question_type: { required: true, type: () => String }, al_exam_question_classification: { required: true, type: () => String }, al_exam_question_difficulty: { required: true, type: () => String }, al_exam_answer: { required: true, type: () => String }, al_agrade: { required: true, type: () => require("../analyse-grade/analyse-grade.entity").AnalyseGrade }, al_student_question_num: { required: true, type: () => Number }, al_student_error_num: { required: true, type: () => Number }, al_student_error_probability: { required: true, type: () => String }, al_student_correct_num: { required: true, type: () => Number }, al_student_correct_probability: { required: true, type: () => String }, al_student_score_probability: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Object)
], AnalyseAnswer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '单选',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_exam_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '1+1=?',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_exam_content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2021/12/2 8:30:00' }),
    __metadata("design:type", Date)
], AnalyseAnswer.prototype, "al_exam_startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2021/12/5 8:30:00' }),
    __metadata("design:type", Date)
], AnalyseAnswer.prototype, "al_exam_endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '多选',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_exam_question_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考试',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_exam_question_classification", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '容易',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_exam_question_difficulty", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '答案',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_exam_answer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => analyse_grade_entity_1.AnalyseGrade, (agrade) => agrade.al_answer),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '多对一 试卷id',
    }),
    __metadata("design:type", analyse_grade_entity_1.AnalyseGrade)
], AnalyseAnswer.prototype, "al_agrade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '1',
    }),
    __metadata("design:type", Number)
], AnalyseAnswer.prototype, "al_student_question_num", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '0',
    }),
    __metadata("design:type", Number)
], AnalyseAnswer.prototype, "al_student_error_num", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '0',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_student_error_probability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '1',
    }),
    __metadata("design:type", Number)
], AnalyseAnswer.prototype, "al_student_correct_num", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '100%',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_student_correct_probability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '得分率',
    }),
    __metadata("design:type", String)
], AnalyseAnswer.prototype, "al_student_score_probability", void 0);
AnalyseAnswer = __decorate([
    (0, typeorm_1.Entity)()
], AnalyseAnswer);
exports.AnalyseAnswer = AnalyseAnswer;
//# sourceMappingURL=analyse-answer.entity.js.map