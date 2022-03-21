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
exports.StudentsMark = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const students_exam_result_entity_1 = require("../students-exam-result/students-exam-result.entity");
const exam_entity_1 = require("../exam/exam.entity");
let StudentsMark = class StudentsMark {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, studentId: { required: true, type: () => String }, examId: { required: true, type: () => String }, examName: { required: true, type: () => String }, startTime: { required: false, type: () => String }, endTime: { required: false, type: () => String }, grade: { required: false, type: () => String }, isPass: { required: false, type: () => String }, examination: { required: false, type: () => String }, accuracy: { required: false, type: () => String }, status: { required: false, type: () => String }, theIntegral: { required: false, type: () => String }, testRanking: { required: false, type: () => String }, beatTheNumber: { required: false, type: () => String }, beatRate: { required: false, type: () => String }, studentsExamResultList: { required: true, type: () => require("../students-exam-result/students-exam-result.entity").StudentsExamResult }, createTime: { required: true, type: () => Date }, updateTime: { required: true, type: () => Date }, question: { required: true, type: () => require("../exam/exam.entity").Exam } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StudentsMark.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考生id' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试id' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试姓名' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "examName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '开始时间' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "startTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '结束时间' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "endTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '成绩' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '是否及格' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "isPass", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试方式' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "examination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '正确率' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "accuracy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '状态' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '所得积分' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "theIntegral", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试排名' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "testRanking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '击败人数' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "beatTheNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '击败率' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsMark.prototype, "beatRate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => students_exam_result_entity_1.StudentsExamResult, (studentsExamResult) => studentsExamResult.studentsExamResultItem),
    __metadata("design:type", students_exam_result_entity_1.StudentsExamResult)
], StudentsMark.prototype, "studentsExamResultList", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'createTime',
    }),
    __metadata("design:type", Date)
], StudentsMark.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], StudentsMark.prototype, "updateTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exam_entity_1.Exam, (question) => question.phones),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exam_entity_1.Exam)
], StudentsMark.prototype, "question", void 0);
StudentsMark = __decorate([
    (0, typeorm_1.Entity)()
], StudentsMark);
exports.StudentsMark = StudentsMark;
//# sourceMappingURL=student-mark.entity.js.map