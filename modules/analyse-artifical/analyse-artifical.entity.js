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
exports.Artifical = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const artificalnve_entity_1 = require("../analyse_artifical_nve/artificalnve.entity");
let Artifical = class Artifical {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, authName: { required: true, type: () => String }, startTime: { required: true, type: () => String }, endTime: { required: true, type: () => String }, participation: { required: true, type: () => String }, participants: { required: true, type: () => String }, qualified: { required: true, type: () => String }, handed: { required: true, type: () => String }, not: { required: true, type: () => String }, already: { required: true, type: () => String }, Time: { required: true, type: () => Date }, phones: { required: true, type: () => [require("../analyse_artifical_nve/artificalnve.entity").ArtificalNve] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], Artifical.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试名称' }),
    __metadata("design:type", String)
], Artifical.prototype, "authName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '开始时间' }),
    __metadata("design:type", String)
], Artifical.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '结束时间' }),
    __metadata("design:type", String)
], Artifical.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '试卷类型' }),
    __metadata("design:type", String)
], Artifical.prototype, "participation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '总分' }),
    __metadata("design:type", String)
], Artifical.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '及格分数' }),
    __metadata("design:type", String)
], Artifical.prototype, "qualified", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '交卷数' }),
    __metadata("design:type", String)
], Artifical.prototype, "handed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '未评卷数' }),
    __metadata("design:type", String)
], Artifical.prototype, "not", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '已评卷数' }),
    __metadata("design:type", String)
], Artifical.prototype, "already", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], Artifical.prototype, "Time", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => artificalnve_entity_1.ArtificalNve, (question) => question.question),
    __metadata("design:type", Array)
], Artifical.prototype, "phones", void 0);
Artifical = __decorate([
    (0, typeorm_1.Entity)()
], Artifical);
exports.Artifical = Artifical;
//# sourceMappingURL=analyse-artifical.entity.js.map