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
exports.ExerBigChapter = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const paper_exam_entity_1 = require("../../paper-exam/paper-exam.entity");
const exercise_each_chapter_entity_1 = require("../exercise-each-chapter/exercise-each-chapter.entity");
const swagger_1 = require("@nestjs/swagger");
const testBank_entity_1 = require("../../testBank/testBank.entity");
let ExerBigChapter = class ExerBigChapter {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, sortId: { required: true, type: () => Number }, createTime: { required: true, type: () => Date }, updateTime: { required: true, type: () => Date }, eachChapters: { required: true, type: () => [require("../exercise-each-chapter/exercise-each-chapter.entity").EachChapter] }, paperExam: { required: true, type: () => require("../../paper-exam/paper-exam.entity").PaperExam }, testBanks: { required: true, type: () => [require("../../testBank/testBank.entity").TestBank] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExerBigChapter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '第1章',
        description: '大题名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExerBigChapter.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '排序id',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExerBigChapter.prototype, "sortId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_time',
    }),
    __metadata("design:type", Date)
], ExerBigChapter.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_time',
    }),
    __metadata("design:type", Date)
], ExerBigChapter.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_each_chapter_entity_1.EachChapter, (eachChapter) => eachChapter.exerBigChapter),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], ExerBigChapter.prototype, "eachChapters", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paper_exam_entity_1.PaperExam, (paperExam) => paperExam.exerBigChapters, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", paper_exam_entity_1.PaperExam)
], ExerBigChapter.prototype, "paperExam", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => testBank_entity_1.TestBank, (testBank) => testBank.exerciseBigChapters),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ExerBigChapter.prototype, "testBanks", void 0);
ExerBigChapter = __decorate([
    (0, typeorm_1.Entity)()
], ExerBigChapter);
exports.ExerBigChapter = ExerBigChapter;
//# sourceMappingURL=exercise-big-chapter.entity.js.map