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
exports.PaperModeRequire = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const paper_mode_entity_1 = require("../paper-mode/paper-mode.entity");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let PaperModeRequire = class PaperModeRequire {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, require: { required: true, type: () => String }, requireDescription: { required: true, type: () => String }, value: { required: true, type: () => String }, paperMode: { required: true, type: () => require("../paper-mode/paper-mode.entity").PaperMode }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaperModeRequire.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '限时答题，每题限input秒作答，否则自动进入下一题',
        description: '试卷模式要求',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaperModeRequire.prototype, "require", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '用于限定每题作答时间，超过设置时间自动滑动下一题，不可回退查看',
        description: '描述',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaperModeRequire.prototype, "requireDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'exam_config.limitTimeAnswer',
        description: '页面渲染字段',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaperModeRequire.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paper_mode_entity_1.PaperMode, (paperModes) => paperModes.paperModeRequires),
    __metadata("design:type", paper_mode_entity_1.PaperMode)
], PaperModeRequire.prototype, "paperMode", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_entity_1.Exam, (exam) => exam.paperModeRequires),
    __metadata("design:type", Array)
], PaperModeRequire.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.paperModeRequires),
    __metadata("design:type", Array)
], PaperModeRequire.prototype, "exercises", void 0);
PaperModeRequire = __decorate([
    (0, typeorm_1.Entity)()
], PaperModeRequire);
exports.PaperModeRequire = PaperModeRequire;
//# sourceMappingURL=paper-mode-require.entity.js.map