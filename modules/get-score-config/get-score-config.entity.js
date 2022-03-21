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
exports.GetScoreConfig = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let GetScoreConfig = class GetScoreConfig {
    static _OPENAPI_METADATA_FACTORY() {
        return { getScoreId: { required: true, type: () => Number }, getScoreRequire: { required: true, type: () => String }, getScoreDes: { required: true, type: () => String }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GetScoreConfig.prototype, "getScoreId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '按正确选项得分占比得分',
        description: '漏选得分设置',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GetScoreConfig.prototype, "getScoreRequire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '漏选得分解释',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GetScoreConfig.prototype, "getScoreDes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exam_entity_1.Exam, (exam) => exam.getScoreConfig),
    __metadata("design:type", Array)
], GetScoreConfig.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.getScoreConfig),
    __metadata("design:type", Array)
], GetScoreConfig.prototype, "exercises", void 0);
GetScoreConfig = __decorate([
    (0, typeorm_1.Entity)()
], GetScoreConfig);
exports.GetScoreConfig = GetScoreConfig;
//# sourceMappingURL=get-score-config.entity.js.map