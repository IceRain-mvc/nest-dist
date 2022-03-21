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
exports.ExamConfig = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let ExamConfig = class ExamConfig {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, passingGrade: { required: true, type: () => Number }, fullMarks: { required: true, type: () => Number }, passingMessage: { required: true, type: () => String }, passingHref: { required: true, type: () => String }, noPassingMessage: { required: true, type: () => String }, noPassingHref: { required: true, type: () => String }, startDateTime: { required: true, type: () => Date }, endDateTime: { required: true, type: () => Date }, lateEntryTime: { required: true, type: () => Number }, answerTime: { required: true, type: () => Number }, allowSubmitTime: { required: true, type: () => Number }, answerTimes: { required: true, type: () => Number }, limitAnswerTimes: { required: true, type: () => Number }, limitAnswerSeconds: { required: true, type: () => Number }, errorAnswers: { required: true, type: () => Number }, publishResultTime: { required: true, type: () => Date }, beforeFaceCertification: { required: true, type: () => Number }, faceTimes: { required: true, type: () => Number }, headPhone: { required: true, type: () => String }, timingCapturedTime: { required: true, type: () => Number }, tapTimes: { required: true, type: () => Number }, tapOutTime: { required: true, type: () => Number }, noOperationTime: { required: true, type: () => Number }, regressionGetResultAccount: { required: true, type: () => Number }, integral: { required: true, type: () => Number }, exam: { required: true, type: () => require("../exam/exam.entity").Exam }, exercise: { required: true, type: () => require("../exercise/exercises/exercise.entity").Exercise } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamConfig.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 60,
        description: '及格分数',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "passingGrade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 100,
        description: '满分',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "fullMarks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '恭喜您，成功通过本次考试！',
        description: '及格提示信息',
    }),
    (0, typeorm_1.Column)({ default: '恭喜您，成功通过本次考试！' }),
    __metadata("design:type", String)
], ExamConfig.prototype, "passingMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'https://www.baidu.com',
        description: '及格跳转路径',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], ExamConfig.prototype, "passingHref", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '很遗憾，您没有通过本次考试！',
        description: '不及格提示信息',
    }),
    (0, typeorm_1.Column)({ default: '恭喜您，成功通过本次考试！' }),
    __metadata("design:type", String)
], ExamConfig.prototype, "noPassingMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'https://www.baidu.com',
        description: '不及格跳转路径',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], ExamConfig.prototype, "noPassingHref", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'startDateTime',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], ExamConfig.prototype, "startDateTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'endDateTime',
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], ExamConfig.prototype, "endDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 15,
        description: '迟到15分钟禁止入场',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "lateEntryTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 60,
        description: '答题时间',
    }),
    (0, typeorm_1.Column)({ default: 60 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "answerTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 30,
        description: '直少答30分钟之后才可以交卷',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "allowSubmitTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 3,
        description: '可考次数',
    }),
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "answerTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 3,
        description: '每日限制答题次数',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "limitAnswerTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 15,
        description: '每题限制多少秒内作答',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "limitAnswerSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 5,
        description: '答错5道题，强制交卷',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "errorAnswers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'datetime',
        example: '2021-12-30',
        description: '成绩发布时间',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Date)
], ExamConfig.prototype, "publishResultTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 15,
        description: '可提前15分钟进行人脸识别认证',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "beforeFaceCertification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 5,
        description: '每个考生限5次人脸识别认证',
    }),
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "faceTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '13857196666',
        description: '负责人手机号',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], ExamConfig.prototype, "headPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 5,
        description: '定时抓拍时间',
    }),
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "timingCapturedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 3,
        description: '允许考生切换页面次数',
    }),
    (0, typeorm_1.Column)({ default: 3 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "tapTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 5,
        description: '超出5秒算一次切屏',
    }),
    (0, typeorm_1.Column)({ default: 5 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "tapOutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 30,
        description: '超过30秒无操作，强制交卷',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "noOperationTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 25,
        description: '漏选得分占比',
    }),
    (0, typeorm_1.Column)({ default: 25 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "regressionGetResultAccount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 10,
        description: '考试积分',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ExamConfig.prototype, "integral", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => exam_entity_1.Exam, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exam_entity_1.Exam)
], ExamConfig.prototype, "exam", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => exercise_entity_1.Exercise, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exercise_entity_1.Exercise)
], ExamConfig.prototype, "exercise", void 0);
ExamConfig = __decorate([
    (0, typeorm_1.Entity)()
], ExamConfig);
exports.ExamConfig = ExamConfig;
//# sourceMappingURL=exam-config.entity.js.map