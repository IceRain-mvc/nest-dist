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
exports.StudentsExamResult = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const student_mark_entity_1 = require("../student-mark/student-mark.entity");
let StudentsExamResult = class StudentsExamResult {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, testBankId: { required: true, type: () => String }, optional: { required: false, type: () => String }, standardAnswer: { required: false, type: () => String }, studentScore: { required: false, type: () => String }, testScores: { required: false, type: () => String }, isPass: { required: false, type: () => String }, studentsExamResultItem: { required: true, type: () => require("../student-mark/student-mark.entity").StudentsMark } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StudentsExamResult.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '试题id' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsExamResult.prototype, "testBankId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '自选答案' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsExamResult.prototype, "optional", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '标准答案' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsExamResult.prototype, "standardAnswer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '得分分数' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsExamResult.prototype, "studentScore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '试题分数' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsExamResult.prototype, "testScores", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '是否正确' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsExamResult.prototype, "isPass", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_mark_entity_1.StudentsMark, (studentsMark) => studentsMark.studentsExamResultList),
    __metadata("design:type", student_mark_entity_1.StudentsMark)
], StudentsExamResult.prototype, "studentsExamResultItem", void 0);
StudentsExamResult = __decorate([
    (0, typeorm_1.Entity)()
], StudentsExamResult);
exports.StudentsExamResult = StudentsExamResult;
//# sourceMappingURL=students-exam-result.entity.js.map