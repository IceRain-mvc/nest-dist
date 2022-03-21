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
exports.AnswerEquipment = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const answer_equipment_require_entity_1 = require("../answer-equipment-require/answer-equipment-require.entity");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let AnswerEquipment = class AnswerEquipment {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, answerEquipmentRequires: { required: true, type: () => [require("../answer-equipment-require/answer-equipment-require.entity").AnswerEquipmentRequire] }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AnswerEquipment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '不限制（所有终端可参加）',
        description: '设备要求',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AnswerEquipment.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_equipment_require_entity_1.AnswerEquipmentRequire, (answerEquipmentRequire) => answerEquipmentRequire.answerEquipment),
    __metadata("design:type", Array)
], AnswerEquipment.prototype, "answerEquipmentRequires", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exam_entity_1.Exam, (exam) => exam.answerEquipment),
    __metadata("design:type", Array)
], AnswerEquipment.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.answerEquipment),
    __metadata("design:type", Array)
], AnswerEquipment.prototype, "exercises", void 0);
AnswerEquipment = __decorate([
    (0, typeorm_1.Entity)()
], AnswerEquipment);
exports.AnswerEquipment = AnswerEquipment;
//# sourceMappingURL=answer-equipment.entity.js.map