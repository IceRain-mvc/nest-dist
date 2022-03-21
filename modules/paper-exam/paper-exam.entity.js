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
exports.PaperExam = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const paper_big_question_entity_1 = require("../paper-big-question/paper-big-question.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
const exercise_big_chapter_entity_1 = require("../exercise/exercise-big-chapter/exercise-big-chapter.entity");
let PaperExam = class PaperExam {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, paperType: { required: true, type: () => Number }, paperTitle: { required: true, type: () => String }, questionCount: { required: true, type: () => Number }, fullMarks: { required: true, type: () => Number }, seted: { required: true, type: () => Number }, createTime: { required: true, type: () => Date }, updateTime: { required: true, type: () => Date }, exam: { required: true, type: () => require("../exam/exam.entity").Exam }, exercise: { required: true, type: () => require("../exercise/exercises/exercise.entity").Exercise }, paperBigQuestions: { required: true, type: () => [require("../paper-big-question/paper-big-question.entity").PaperBigQuestion] }, exerBigChapters: { required: true, type: () => [require("../exercise/exercise-big-chapter/exercise-big-chapter.entity").ExerBigChapter] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaperExam.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '试卷类型',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaperExam.prototype, "paperType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '固定试卷',
        description: '类型名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaperExam.prototype, "paperTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '试卷题数',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PaperExam.prototype, "questionCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '题目总分数',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PaperExam.prototype, "fullMarks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '考试是否已经设置过',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PaperExam.prototype, "seted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_time',
    }),
    __metadata("design:type", Date)
], PaperExam.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_time',
    }),
    __metadata("design:type", Date)
], PaperExam.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => exam_entity_1.Exam, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exam_entity_1.Exam)
], PaperExam.prototype, "exam", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => exercise_entity_1.Exercise, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exercise_entity_1.Exercise)
], PaperExam.prototype, "exercise", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => paper_big_question_entity_1.PaperBigQuestion, (paperBigQuestion) => paperBigQuestion.paperExam),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], PaperExam.prototype, "paperBigQuestions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_big_chapter_entity_1.ExerBigChapter, (exerBigChapter) => exerBigChapter.paperExam),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], PaperExam.prototype, "exerBigChapters", void 0);
PaperExam = __decorate([
    (0, typeorm_1.Entity)()
], PaperExam);
exports.PaperExam = PaperExam;
//# sourceMappingURL=paper-exam.entity.js.map