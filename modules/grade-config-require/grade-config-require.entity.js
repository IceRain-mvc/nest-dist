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
exports.GradeConfigRequire = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const grade_config_entity_1 = require("../grade-config/grade-config.entity");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let GradeConfigRequire = class GradeConfigRequire {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, gradeTitle: { required: true, type: () => String }, gradeConfig: { required: true, type: () => require("../grade-config/grade-config.entity").GradeConfig }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GradeConfigRequire.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '显示成绩二维码，待手工发布后可扫码查询',
        description: '成绩查看相关设置',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GradeConfigRequire.prototype, "gradeTitle", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grade_config_entity_1.GradeConfig, (gradeConfig) => gradeConfig.gradeConfigRequires),
    __metadata("design:type", grade_config_entity_1.GradeConfig)
], GradeConfigRequire.prototype, "gradeConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_entity_1.Exam, (exam) => exam.gradeConfigRequires),
    __metadata("design:type", Array)
], GradeConfigRequire.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.gradeConfigRequires),
    __metadata("design:type", Array)
], GradeConfigRequire.prototype, "exercises", void 0);
GradeConfigRequire = __decorate([
    (0, typeorm_1.Entity)()
], GradeConfigRequire);
exports.GradeConfigRequire = GradeConfigRequire;
//# sourceMappingURL=grade-config-require.entity.js.map