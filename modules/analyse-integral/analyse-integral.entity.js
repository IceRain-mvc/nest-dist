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
exports.AnalyseIntegral = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let AnalyseIntegral = class AnalyseIntegral {
    static _OPENAPI_METADATA_FACTORY() {
        return { ali_id: { required: true, type: () => Object }, al_student_name: { required: true, type: () => String }, al_student_account: { required: true, type: () => String }, al_student_department: { required: true, type: () => String }, al_student_register: { required: true, type: () => Date }, al_student_start: { required: true, type: () => Number }, al_total_integral: { required: true, type: () => Number }, al_exam_integral: { required: true, type: () => Number }, al_exercise_integral: { required: true, type: () => Number }, al_train_integral: { required: true, type: () => Number }, al_test_integral: { required: true, type: () => String }, al_test_grade: { required: true, type: () => String }, al_test_student_grade: { required: true, type: () => String }, al_test_student_integral: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Object)
], AnalyseIntegral.prototype, "ali_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考生姓名',
    }),
    __metadata("design:type", String)
], AnalyseIntegral.prototype, "al_student_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考生账号',
    }),
    __metadata("design:type", String)
], AnalyseIntegral.prototype, "al_student_account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '所属部门',
    }),
    __metadata("design:type", String)
], AnalyseIntegral.prototype, "al_student_department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考生注册时间',
    }),
    __metadata("design:type", Date)
], AnalyseIntegral.prototype, "al_student_register", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '考生状态  0禁用 1激活 ',
    }),
    __metadata("design:type", Number)
], AnalyseIntegral.prototype, "al_student_start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '所得总积分',
    }),
    __metadata("design:type", Number)
], AnalyseIntegral.prototype, "al_total_integral", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '考试总积分',
    }),
    __metadata("design:type", Number)
], AnalyseIntegral.prototype, "al_exam_integral", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '练习总积分',
    }),
    __metadata("design:type", Number)
], AnalyseIntegral.prototype, "al_exercise_integral", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '培训总积分',
    }),
    __metadata("design:type", Number)
], AnalyseIntegral.prototype, "al_train_integral", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '试卷总积分',
    }),
    __metadata("design:type", String)
], AnalyseIntegral.prototype, "al_test_integral", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '试卷总分数',
    }),
    __metadata("design:type", String)
], AnalyseIntegral.prototype, "al_test_grade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '试卷学生得分',
    }),
    __metadata("design:type", String)
], AnalyseIntegral.prototype, "al_test_student_grade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '试卷学生积分',
    }),
    __metadata("design:type", String)
], AnalyseIntegral.prototype, "al_test_student_integral", void 0);
AnalyseIntegral = __decorate([
    (0, typeorm_1.Entity)({ name: 'analyse-integral' })
], AnalyseIntegral);
exports.AnalyseIntegral = AnalyseIntegral;
//# sourceMappingURL=analyse-integral.entity.js.map