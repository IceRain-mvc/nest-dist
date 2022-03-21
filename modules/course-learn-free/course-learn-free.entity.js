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
exports.CourseLearnFree = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const course_entity_1 = require("../course/course.entity");
let CourseLearnFree = class CourseLearnFree {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, courseFieldName: { required: true, type: () => String }, courseFieldFormat: { required: true, type: () => Number }, courseFieldMust: { required: true, type: () => Number }, courses: { required: true, type: () => require("../course/course.entity").Course }, createAt: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseLearnFree.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '字段名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseLearnFree.prototype, "courseFieldName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '当前的课程的选项  (0,1,2,3,4,5,6,7,8)',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseLearnFree.prototype, "courseFieldFormat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '字段是否必填（0:否，1:是）',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseLearnFree.prototype, "courseFieldMust", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, (course) => course.courseFree),
    (0, typeorm_1.JoinColumn)({ name: 'course_id' }),
    __metadata("design:type", course_entity_1.Course)
], CourseLearnFree.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], CourseLearnFree.prototype, "createAt", void 0);
CourseLearnFree = __decorate([
    (0, typeorm_1.Entity)()
], CourseLearnFree);
exports.CourseLearnFree = CourseLearnFree;
//# sourceMappingURL=course-learn-free.entity.js.map