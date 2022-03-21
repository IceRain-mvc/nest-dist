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
exports.StudentsCourseMessage = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const students_course_entity_1 = require("../students-course/students-course.entity");
let StudentsCourseMessage = class StudentsCourseMessage {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, studentsCourseId: { required: true, type: () => String }, courseFieldName: { required: true, type: () => String }, courseFieldFormat: { required: true, type: () => Number }, courseFieldContent: { required: true, type: () => String }, studentsCourse: { required: true, type: () => require("../students-course/students-course.entity").StudentsCourse }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentsCourseMessage.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '学生端课程的id',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentsCourseMessage.prototype, "studentsCourseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '字段名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentsCourseMessage.prototype, "courseFieldName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '当前的课程的选项  (0,1,2,3,4,5,6,7,8)',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], StudentsCourseMessage.prototype, "courseFieldFormat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '字段值',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentsCourseMessage.prototype, "courseFieldContent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => students_course_entity_1.StudentsCourse, (studentsCourse) => studentsCourse.studentsCourseMessage),
    __metadata("design:type", students_course_entity_1.StudentsCourse)
], StudentsCourseMessage.prototype, "studentsCourse", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], StudentsCourseMessage.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], StudentsCourseMessage.prototype, "updateAt", void 0);
StudentsCourseMessage = __decorate([
    (0, typeorm_1.Entity)()
], StudentsCourseMessage);
exports.StudentsCourseMessage = StudentsCourseMessage;
//# sourceMappingURL=students-course-message.entity.js.map