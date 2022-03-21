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
exports.CourseDesign = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let CourseDesign = class CourseDesign {
    static _OPENAPI_METADATA_FACTORY() {
        return { chapterId: { required: true, type: () => Number }, chapterName: { required: true, type: () => String }, courseId: { required: true, type: () => String }, uids: { required: false, type: () => String }, ids: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseDesign.prototype, "chapterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'react',
        description: '当前的章节名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseDesign.prototype, "chapterName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'react',
        description: '当前的课程id',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseDesign.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'react',
        description: 'uuid',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseDesign.prototype, "uids", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseDesign.prototype, "ids", void 0);
CourseDesign = __decorate([
    (0, typeorm_1.Entity)()
], CourseDesign);
exports.CourseDesign = CourseDesign;
//# sourceMappingURL=course-design.entity.js.map