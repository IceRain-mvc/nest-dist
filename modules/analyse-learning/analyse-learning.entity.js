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
exports.Analyselearning = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Analyselearning = class Analyselearning {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, courseTitle: { required: true, type: () => String }, stackedSystem: { required: true, type: () => String }, finishCondition: { required: true, type: () => String }, joinNum: { required: true, type: () => Number }, finishNum: { required: true, type: () => Number }, unfinishNum: { required: true, type: () => Number }, passingRate: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Analyselearning.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '实训1' }),
    __metadata("design:type", String)
], Analyselearning.prototype, "courseTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '安排学习' }),
    __metadata("design:type", String)
], Analyselearning.prototype, "stackedSystem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '通过课程考试' }),
    __metadata("design:type", String)
], Analyselearning.prototype, "finishCondition", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'number', example: 1 }),
    __metadata("design:type", Number)
], Analyselearning.prototype, "joinNum", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'number', example: 1 }),
    __metadata("design:type", Number)
], Analyselearning.prototype, "finishNum", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'number', example: 0 }),
    __metadata("design:type", Number)
], Analyselearning.prototype, "unfinishNum", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '100%' }),
    __metadata("design:type", String)
], Analyselearning.prototype, "passingRate", void 0);
Analyselearning = __decorate([
    (0, typeorm_1.Entity)()
], Analyselearning);
exports.Analyselearning = Analyselearning;
//# sourceMappingURL=analyse-learning.entity.js.map