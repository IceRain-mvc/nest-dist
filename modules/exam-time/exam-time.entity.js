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
exports.ExamTime = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let ExamTime = class ExamTime {
    static _OPENAPI_METADATA_FACTORY() {
        return { examTimeId: { required: true, type: () => Number }, examTimeRequire: { required: true, type: () => String }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamTime.prototype, "examTimeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '超过考试时间强制交卷',
        description: '考试时间相关要求',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamTime.prototype, "examTimeRequire", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_entity_1.Exam, (exam) => exam.examTimes),
    __metadata("design:type", Array)
], ExamTime.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.exerciseTimes),
    __metadata("design:type", Array)
], ExamTime.prototype, "exercises", void 0);
ExamTime = __decorate([
    (0, typeorm_1.Entity)()
], ExamTime);
exports.ExamTime = ExamTime;
//# sourceMappingURL=exam-time.entity.js.map