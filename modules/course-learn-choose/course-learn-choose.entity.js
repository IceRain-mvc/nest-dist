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
exports.CourseLearnChoose = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const course_entity_1 = require("../course/course.entity");
let CourseLearnChoose = class CourseLearnChoose {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, courseStudent: { required: true, type: () => String }, courseDepartment: { required: true, type: () => String }, createAt: { required: true, type: () => Date }, courses: { required: true, type: () => require("../course/course.entity").Course } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseLearnChoose.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '学员账户',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], CourseLearnChoose.prototype, "courseStudent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '选择部门',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], CourseLearnChoose.prototype, "courseDepartment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], CourseLearnChoose.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, (course) => course.courseChoose),
    (0, typeorm_1.JoinColumn)({ name: 'course_id' }),
    __metadata("design:type", course_entity_1.Course)
], CourseLearnChoose.prototype, "courses", void 0);
CourseLearnChoose = __decorate([
    (0, typeorm_1.Entity)()
], CourseLearnChoose);
exports.CourseLearnChoose = CourseLearnChoose;
//# sourceMappingURL=course-learn-choose.entity.js.map