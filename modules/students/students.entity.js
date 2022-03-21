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
exports.Students = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const tree_person_entity_1 = require("../tree-person/tree-person.entity");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
const students_course_entity_1 = require("../students-course/students-course.entity");
let Students = class Students {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, studentName: { required: true, type: () => String }, password: { required: false, type: () => String }, studentNumber: { required: true, type: () => String }, avatar: { required: false, type: () => String }, studentPhone: { required: false, type: () => String }, eMail: { required: false, type: () => String }, studentId: { required: false, type: () => String }, studentSex: { required: false, type: () => Number }, studentState: { required: false, type: () => String }, remark: { required: false, type: () => String }, createTime: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, treePerson: { required: true, type: () => require("../tree-person/tree-person.entity").TreePerson }, exams: { required: true, type: () => [require("../exam/exam.entity").Exam] }, exercises: { required: true, type: () => [require("../exercise/exercises/exercise.entity").Exercise] }, studentsCourse: { required: true, type: () => [require("../students-course/students-course.entity").StudentsCourse] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Students.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '用户名' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Students.prototype, "studentName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '密码' }),
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], Students.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '账号' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Students.prototype, "studentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], Students.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '电话' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Students.prototype, "studentPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '邮箱' }),
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], Students.prototype, "eMail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '证件号码' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Students.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], Students.prototype, "studentSex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '状态' }),
    (0, typeorm_1.Column)('simple-enum', { enum: ['active', 'locked'], default: 'active' }),
    __metadata("design:type", String)
], Students.prototype, "studentState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '备注' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Students.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'createTime',
    }),
    __metadata("design:type", Date)
], Students.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], Students.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tree_person_entity_1.TreePerson, (treePerson) => treePerson.students),
    __metadata("design:type", tree_person_entity_1.TreePerson)
], Students.prototype, "treePerson", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_entity_1.Exam, (exam) => exam.students),
    __metadata("design:type", Array)
], Students.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exercise_entity_1.Exercise, (exercise) => exercise.students),
    __metadata("design:type", Array)
], Students.prototype, "exercises", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => students_course_entity_1.StudentsCourse, (studentsCourse) => studentsCourse.students),
    __metadata("design:type", Array)
], Students.prototype, "studentsCourse", void 0);
Students = __decorate([
    (0, typeorm_1.Entity)()
], Students);
exports.Students = Students;
//# sourceMappingURL=students.entity.js.map