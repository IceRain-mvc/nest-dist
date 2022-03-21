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
exports.ExamineeFillMessage = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let ExamineeFillMessage = class ExamineeFillMessage {
    static _OPENAPI_METADATA_FACTORY() {
        return { examineeId: { required: true, type: () => Number }, titleName: { required: true, type: () => String }, formatRequire: { required: true, type: () => String }, mandatory: { required: true, type: () => Number }, optionsValue: { required: true, type: () => String }, exam: { required: true, type: () => require("../exam/exam.entity").Exam }, exercise: { required: true, type: () => require("../exercise/exercises/exercise.entity").Exercise } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamineeFillMessage.prototype, "examineeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '姓名',
        description: '字段名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamineeFillMessage.prototype, "titleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '文本',
        description: '格式要求',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamineeFillMessage.prototype, "formatRequire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '是否为必填项',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ExamineeFillMessage.prototype, "mandatory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '下拉选value值, 值不唯一时用-分隔开',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], ExamineeFillMessage.prototype, "optionsValue", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exam_entity_1.Exam, (exam) => exam.examineeFillMessage, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exam_entity_1.Exam)
], ExamineeFillMessage.prototype, "exam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_entity_1.Exercise, (exercise) => exercise.exerciseineeFillMessages, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exercise_entity_1.Exercise)
], ExamineeFillMessage.prototype, "exercise", void 0);
ExamineeFillMessage = __decorate([
    (0, typeorm_1.Entity)()
], ExamineeFillMessage);
exports.ExamineeFillMessage = ExamineeFillMessage;
//# sourceMappingURL=examinee-fill-message.entity.js.map