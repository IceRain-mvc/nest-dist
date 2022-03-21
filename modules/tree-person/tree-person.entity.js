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
exports.TreePerson = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exam_entity_1 = require("../exam/exam.entity");
const students_entity_1 = require("../students/students.entity");
const testBank_entity_1 = require("../testBank/testBank.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let TreePerson = class TreePerson {
    constructor(title = '') {
        this.title = title;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: true, type: () => String }, children: { required: true, type: () => [require("./tree-person.entity").TreePerson] }, parentId: { required: false, type: () => Number }, parent: { required: true, type: () => require("./tree-person.entity").TreePerson }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, students: { required: true, type: () => [require("../students/students.entity").Students] }, testBank: { required: true, type: () => [require("../testBank/testBank.entity").TestBank] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TreePerson.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '当前节点的名称',
        description: '当前节点的名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TreePerson.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.TreeChildren)(),
    __metadata("design:type", Array)
], TreePerson.prototype, "children", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: 1, description: '父节点的id' }),
    __metadata("design:type", Number)
], TreePerson.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.TreeParent)(),
    __metadata("design:type", TreePerson)
], TreePerson.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exam_entity_1.Exam, (exam) => exam.treePerson),
    __metadata("design:type", Array)
], TreePerson.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => students_entity_1.Students, (students) => students.treePerson),
    __metadata("design:type", Array)
], TreePerson.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => testBank_entity_1.TestBank, (testBank) => testBank.treePerson),
    __metadata("design:type", Array)
], TreePerson.prototype, "testBank", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.treePerson),
    __metadata("design:type", Array)
], TreePerson.prototype, "exercises", void 0);
TreePerson = __decorate([
    (0, typeorm_1.Tree)('closure-table'),
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], TreePerson);
exports.TreePerson = TreePerson;
//# sourceMappingURL=tree-person.entity.js.map