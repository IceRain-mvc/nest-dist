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
exports.Course = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const course_learn_free_entity_1 = require("../course-learn-free/course-learn-free.entity");
const course_learn_choose_entity_1 = require("../course-learn-choose/course-learn-choose.entity");
const students_course_entity_1 = require("../students-course/students-course.entity");
let Course = class Course {
    static _OPENAPI_METADATA_FACTORY() {
        return { courseId: { required: true, type: () => Number }, courseName: { required: true, type: () => String }, courseType: { required: true, type: () => String }, courseStart: { required: true, type: () => String }, courseEnd: { required: true, type: () => String }, deleteAt: { required: true, type: () => Date }, courseSynopsis: { required: false, type: () => String }, courseStyle: { required: true, type: () => Number }, courseNotice: { required: false, type: () => String }, courseTarget: { required: false, type: () => String }, courseStar: { required: true, type: () => Number }, courseRecycle: { required: true, type: () => Number }, coursePeriod: { required: true, type: () => Number }, courseAnswer: { required: true, type: () => Number }, courseComment: { required: true, type: () => Number }, courseFieldCommand: { required: true, type: () => String }, courseCompleteCondition: { required: true, type: () => Number }, courseExam: { required: true, type: () => String }, courseSetUp: { required: true, type: () => Number }, courseLearningTerminal: { required: true, type: () => Number }, courseWechat: { required: true, type: () => Number }, courseAudit: { required: true, type: () => Number }, courseCreditHour: { required: true, type: () => String }, examId: { required: true, type: () => String }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, courseFree: { required: true, type: () => [require("../course-learn-free/course-learn-free.entity").CourseLearnFree] }, courseChoose: { required: true, type: () => [require("../course-learn-choose/course-learn-choose.entity").CourseLearnChoose] }, finishNum: { required: true, type: () => Number }, participants: { required: true, type: () => Number }, unfinishNum: { required: true, type: () => Number }, passRate: { required: true, type: () => String }, studentsCourse: { required: true, type: () => [require("../students-course/students-course.entity").StudentsCourse] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Course.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'react',
        description: '当前的课程名称',
    }),
    (0, typeorm_1.Column)({ default: 'undifined' }),
    __metadata("design:type", String)
], Course.prototype, "courseName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '课程分类',
        description: '当前课程分类',
    }),
    (0, typeorm_1.Column)({ default: '课程分类' }),
    __metadata("design:type", String)
], Course.prototype, "courseType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '12345687654',
        description: '当前的课程的开始时间',
    }),
    (0, typeorm_1.Column)({ default: '12673458905' }),
    __metadata("design:type", String)
], Course.prototype, "courseStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '1347554326',
        description: '当前的课程的结束时间',
    }),
    (0, typeorm_1.Column)({ default: '12673458905' }),
    __metadata("design:type", String)
], Course.prototype, "courseEnd", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '当前的课程默认被删除时间',
        name: 'delete_at',
    }),
    __metadata("design:type", Date)
], Course.prototype, "deleteAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '当前的课程简介',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Course.prototype, "courseSynopsis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '学员学习方式   0,1,2',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "courseStyle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '当前课程的须知',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Course.prototype, "courseNotice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '当前课程的目标',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Course.prototype, "courseTarget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '是否为星标课程   0:是,1:不是',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "courseStar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '是否为回收站课程',
    }),
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Course.prototype, "courseRecycle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 60,
        description: '设置学员最少学习时长',
    }),
    (0, typeorm_1.Column)({ default: 60 }),
    __metadata("design:type", Number)
], Course.prototype, "coursePeriod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '课程是否允许答疑',
    }),
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Course.prototype, "courseAnswer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '课程是否允许评论',
    }),
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Course.prototype, "courseComment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '课程有没有口令  (如果学员学习方式不为2则该参数为null，反之有值)',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Course.prototype, "courseFieldCommand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '课程完成条件',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "courseCompleteCondition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '',
        description: '课程创建考试   (如果课程完成条件不为2则该参数为null，反之有值)',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Course.prototype, "courseExam", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '学时设置',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "courseSetUp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '学习终端',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "courseLearningTerminal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '学习终端(课件保护)',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "courseWechat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '是否需要人工审核   （0:是，1:不是）',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "courseAudit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '0.0',
        description: '课程学分',
    }),
    (0, typeorm_1.Column)({ default: '0.0' }),
    __metadata("design:type", String)
], Course.prototype, "courseCreditHour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '考试ID',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Course.prototype, "examId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], Course.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], Course.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_learn_free_entity_1.CourseLearnFree, (courseLearnFree) => courseLearnFree.courses),
    __metadata("design:type", Array)
], Course.prototype, "courseFree", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_learn_choose_entity_1.CourseLearnChoose, (courseLearnChoose) => courseLearnChoose.courses),
    __metadata("design:type", Array)
], Course.prototype, "courseChoose", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => students_course_entity_1.StudentsCourse, (studentsCourse) => studentsCourse.course),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", Array)
], Course.prototype, "studentsCourse", void 0);
Course = __decorate([
    (0, typeorm_1.Entity)()
], Course);
exports.Course = Course;
//# sourceMappingURL=course.entity.js.map