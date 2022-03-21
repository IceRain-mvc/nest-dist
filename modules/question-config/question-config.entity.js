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
exports.QuestionConfig = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let QuestionConfig = class QuestionConfig {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, questionConfigTitle: { required: true, type: () => String }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuestionConfig.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '必须答完所有试题才可提交试卷',
        description: '试题要求',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionConfig.prototype, "questionConfigTitle", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_entity_1.Exam, (exam) => exam.questionConfigs),
    __metadata("design:type", Array)
], QuestionConfig.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.questionConfigs),
    __metadata("design:type", Array)
], QuestionConfig.prototype, "exercises", void 0);
QuestionConfig = __decorate([
    (0, typeorm_1.Entity)()
], QuestionConfig);
exports.QuestionConfig = QuestionConfig;
//# sourceMappingURL=question-config.entity.js.map