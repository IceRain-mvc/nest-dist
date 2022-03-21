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
exports.ExerciseWay = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exercise_entity_1 = require("../../exercise/exercises/exercise.entity");
let ExerciseWay = class ExerciseWay {
    static _OPENAPI_METADATA_FACTORY() {
        return { partId: { required: true, type: () => Number }, partTitle: { required: true, type: () => String }, partDescription: { required: true, type: () => String }, partType: { required: true, type: () => Number }, exercises: { required: true, type: () => [require("../exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExerciseWay.prototype, "partId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '免登录考试',
        description: '加入方式',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExerciseWay.prototype, "partTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '加入方式描述信息',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExerciseWay.prototype, "partDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '进入方式类别',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExerciseWay.prototype, "partType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.exerciseWay),
    __metadata("design:type", Array)
], ExerciseWay.prototype, "exercises", void 0);
ExerciseWay = __decorate([
    (0, typeorm_1.Entity)()
], ExerciseWay);
exports.ExerciseWay = ExerciseWay;
//# sourceMappingURL=exercise-way.entity.js.map