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
exports.PaperMode = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const paper_mode_require_entity_1 = require("../paper-mode-require/paper-mode-require.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let PaperMode = class PaperMode {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, description: { required: true, type: () => String }, paperType: { required: true, type: () => Number }, abstract: { required: true, type: () => String }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, paperModeRequires: { required: true, type: () => [require("../paper-mode-require/paper-mode-require.entity").PaperModeRequire] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaperMode.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '整卷模式',
        description: '标题',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaperMode.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '描述',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PaperMode.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '渲染预览类型',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaperMode.prototype, "paperType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '摘要',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], PaperMode.prototype, "abstract", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exam_entity_1.Exam, (exam) => exam.paperMode),
    __metadata("design:type", Array)
], PaperMode.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => paper_mode_require_entity_1.PaperModeRequire, (paperModeRequire) => paperModeRequire.paperMode),
    __metadata("design:type", Array)
], PaperMode.prototype, "paperModeRequires", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.paperMode),
    __metadata("design:type", Array)
], PaperMode.prototype, "exercises", void 0);
PaperMode = __decorate([
    (0, typeorm_1.Entity)()
], PaperMode);
exports.PaperMode = PaperMode;
//# sourceMappingURL=paper-mode.entity.js.map