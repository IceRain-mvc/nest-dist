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
exports.StudentsCourse = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const students_course_chapter_entity_1 = require("../students-course-chapter/students-course-chapter.entity");
const students_course_message_entity_1 = require("../students-course-message/students-course-message.entity");
const students_entity_1 = require("../students/students.entity");
const course_entity_1 = require("../course/course.entity");
let StudentsCourse = class StudentsCourse {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, studentsId: { required: true, type: () => String }, treePerson: { required: true, type: () => String }, courseId: { required: true, type: () => Number }, learnNumber: { required: true, type: () => Number }, learnTime: { required: true, type: () => Number }, learnResult: { required: true, type: () => Number }, learnProgress: { required: true, type: () => Number }, learnFacility: { required: true, type: () => Number }, learnState: { required: true, type: () => Number }, studentsCourse_createTime: { required: true, type: () => Date }, studentsCourse_updateAt: { required: true, type: () => Date }, studentsCourseChapter: { required: true, type: () => [require("../students-course-chapter/students-course-chapter.entity").StudentsCourseChapter] }, studentsCourseMessage: { required: true, type: () => [require("../students-course-message/students-course-message.entity").StudentsCourseMessage] }, students: { required: true, type: () => require("../students/students.entity").Students }, course: { required: true, type: () => require("../course/course.entity").Course } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StudentsCourse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '用户id' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsCourse.prototype, "studentsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '部门' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], StudentsCourse.prototype, "treePerson", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '课程id' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourse.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '学习次数' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourse.prototype, "learnNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '学习时长' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourse.prototype, "learnTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '学习成绩' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourse.prototype, "learnResult", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '学习进度百分比格式0~100' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourse.prototype, "learnProgress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '学习设备0电脑 1?' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourse.prototype, "learnFacility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: '用户学习状态: 0全部, 1学习中, 2待考试 , 3未通过考试, 4已完成, 5未完成 ',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], StudentsCourse.prototype, "learnState", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'createTime',
    }),
    __metadata("design:type", Date)
], StudentsCourse.prototype, "studentsCourse_createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], StudentsCourse.prototype, "studentsCourse_updateAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => students_course_chapter_entity_1.StudentsCourseChapter, (studentsCourseChapter) => studentsCourseChapter.studentsCourse),
    __metadata("design:type", Array)
], StudentsCourse.prototype, "studentsCourseChapter", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => students_course_message_entity_1.StudentsCourseMessage, (studentsCourseMessage) => studentsCourseMessage.studentsCourse),
    __metadata("design:type", Array)
], StudentsCourse.prototype, "studentsCourseMessage", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => students_entity_1.Students, (students) => students.studentsCourse),
    __metadata("design:type", students_entity_1.Students)
], StudentsCourse.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, (course) => course.studentsCourse),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.Course)
], StudentsCourse.prototype, "course", void 0);
StudentsCourse = __decorate([
    (0, typeorm_1.Entity)()
], StudentsCourse);
exports.StudentsCourse = StudentsCourse;
//# sourceMappingURL=students-course.entity.js.map