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
exports.GradeConfig = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const grade_config_require_entity_1 = require("../grade-config-require/grade-config-require.entity");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let GradeConfig = class GradeConfig {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, gradeConfigRequires: { required: true, type: () => [require("../grade-config-require/grade-config-require.entity").GradeConfigRequire] }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GradeConfig.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '交卷后显示成绩',
        description: '成绩相关设置',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GradeConfig.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grade_config_require_entity_1.GradeConfigRequire, (gradeConfigRequire) => gradeConfigRequire.gradeConfig),
    __metadata("design:type", Array)
], GradeConfig.prototype, "gradeConfigRequires", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exam_entity_1.Exam, (exam) => exam.gradeConfig),
    __metadata("design:type", Array)
], GradeConfig.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.gradeConfig),
    __metadata("design:type", Array)
], GradeConfig.prototype, "exercises", void 0);
GradeConfig = __decorate([
    (0, typeorm_1.Entity)()
], GradeConfig);
exports.GradeConfig = GradeConfig;
//# sourceMappingURL=grade-config.entity.js.map