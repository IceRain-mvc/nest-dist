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
exports.AntiCheatingConfig = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let AntiCheatingConfig = class AntiCheatingConfig {
    static _OPENAPI_METADATA_FACTORY() {
        return { antiCheatingId: { required: true, type: () => Number }, antiCheatingTitle: { required: true, type: () => String }, antiCheatingDes: { required: true, type: () => String }, antiCheatingType: { required: true, type: () => String }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AntiCheatingConfig.prototype, "antiCheatingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '考试前，进行人脸识别身份验证',
        description: '防作弊设置你选项',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AntiCheatingConfig.prototype, "antiCheatingTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '具体描述',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], AntiCheatingConfig.prototype, "antiCheatingDes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'testBefore',
        description: '控制前端渲染类型',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], AntiCheatingConfig.prototype, "antiCheatingType", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_entity_1.Exam, (exam) => exam.antiCheatingConfigs),
    __metadata("design:type", Array)
], AntiCheatingConfig.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.antiCheatingConfigs),
    __metadata("design:type", Array)
], AntiCheatingConfig.prototype, "exercises", void 0);
AntiCheatingConfig = __decorate([
    (0, typeorm_1.Entity)()
], AntiCheatingConfig);
exports.AntiCheatingConfig = AntiCheatingConfig;
//# sourceMappingURL=anti-cheating-config.entity.js.map