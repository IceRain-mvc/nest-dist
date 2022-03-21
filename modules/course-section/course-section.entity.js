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
exports.CourseSection = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let CourseSection = class CourseSection {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, courseId: { required: true, type: () => String }, chapterId: { required: true, type: () => String }, serialNumber: { required: true, type: () => Number }, serialTime: { required: true, type: () => Number }, serialName: { required: true, type: () => String }, fileAddressMd: { required: true, type: () => String }, fileAddressMp4: { required: true, type: () => String }, fileName: { required: true, type: () => String }, serialContent: { required: true, type: () => String }, serialType: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseSection.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '1',
        description: '课程id',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseSection.prototype, "courseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '1',
        description: '父章节Id',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseSection.prototype, "chapterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '序列号',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseSection.prototype, "serialNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '章节学时',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseSection.prototype, "serialTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '(子章节名称)',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseSection.prototype, "serialName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '(上传的文件地址)',
    }),
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], CourseSection.prototype, "fileAddressMd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '(上传的视频音频地址地址)',
    }),
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], CourseSection.prototype, "fileAddressMp4", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '(上传的文件名)',
    }),
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], CourseSection.prototype, "fileName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '子章节内容',
    }),
    (0, typeorm_1.Column)({ length: 500, default: null }),
    __metadata("design:type", String)
], CourseSection.prototype, "serialContent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '子章节类型',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseSection.prototype, "serialType", void 0);
CourseSection = __decorate([
    (0, typeorm_1.Entity)()
], CourseSection);
exports.CourseSection = CourseSection;
//# sourceMappingURL=course-section.entity.js.map