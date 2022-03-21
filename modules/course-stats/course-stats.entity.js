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
exports.CourseStats = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let CourseStats = class CourseStats {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, stats_courseId: { required: true, type: () => String }, stats_name: { required: true, type: () => String }, stats_department: { required: true, type: () => String }, stats_duration: { required: true, type: () => String }, stats_number: { required: true, type: () => String }, stats_credit: { required: true, type: () => String }, stats_progress: { required: true, type: () => String }, stats_type: { required: true, type: () => String }, stats_equipment: { required: true, type: () => String }, stats_updateAt: { required: true, type: () => String }, stats_enddateAt: { required: true, type: () => String }, stats_account: { required: true, type: () => String }, stats_phone: { required: true, type: () => String }, stats_grade: { required: true, type: () => String }, stats_passexam: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CourseStats.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_courseId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '小赵老师' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '振涛' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_credit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '第一章' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_progress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '1' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'PC' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_equipment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2021-12-17 00:00:00' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_updateAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2021-12-17 23:59:59' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_enddateAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '60' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_grade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '通过考试' }),
    __metadata("design:type", String)
], CourseStats.prototype, "stats_passexam", void 0);
CourseStats = __decorate([
    (0, typeorm_1.Entity)()
], CourseStats);
exports.CourseStats = CourseStats;
//# sourceMappingURL=course-stats.entity.js.map