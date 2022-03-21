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
exports.StudentsCourseChapter = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const students_course_entity_1 = require("../students-course/students-course.entity");
let StudentsCourseChapter = class StudentsCourseChapter {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, studentsCourseId: { required: true, type: () => String }, sectionId: { required: true, type: () => Number }, chapterName: { required: true, type: () => String }, sectionName: { required: true, type: () => String }, learnTime: { required: true, type: () => Number }, learnProgress: { required: true, type: () => Number }, createTime: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, studentsCourse: { required: true, type: () => require("../students-course/students-course.entity").StudentsCourse } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentsCourseChapter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '学生端课程id' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsCourseChapter.prototype, "studentsCourseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '学生端课程章节id' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourseChapter.prototype, "sectionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '章名称' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsCourseChapter.prototype, "chapterName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '节名称' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsCourseChapter.prototype, "sectionName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '学习时长:毫秒格式' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourseChapter.prototype, "learnTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '学习进度百分比形式0~100' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourseChapter.prototype, "learnProgress", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间:首次学习时间',
        name: 'createTime',
    }),
    __metadata("design:type", Date)
], StudentsCourseChapter.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间:最近学习时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], StudentsCourseChapter.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => students_course_entity_1.StudentsCourse, (studentsCourse) => studentsCourse.studentsCourseChapter),
    __metadata("design:type", students_course_entity_1.StudentsCourse)
], StudentsCourseChapter.prototype, "studentsCourse", void 0);
StudentsCourseChapter = __decorate([
    (0, typeorm_1.Entity)()
], StudentsCourseChapter);
exports.StudentsCourseChapter = StudentsCourseChapter;
//# sourceMappingURL=students-course-chapter.entity.js.map