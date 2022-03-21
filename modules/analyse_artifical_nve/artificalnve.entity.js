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
exports.ArtificalNve = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const examination_entity_1 = require("../analyse_examine/examination.entity");
let ArtificalNve = class ArtificalNve {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, account: { required: true, type: () => String }, names: { required: true, type: () => String }, department: { required: true, type: () => String }, startTime: { required: true, type: () => String }, endTime: { required: true, type: () => String }, useTime: { required: true, type: () => String }, score: { required: true, type: () => String }, passing: { required: true, type: () => String }, achievement: { required: true, type: () => String }, whether: { required: true, type: () => String }, ranking: { required: true, type: () => String }, cut: { required: true, type: () => String }, correct: { required: true, type: () => String }, state: { required: true, type: () => String }, Time: { required: true, type: () => Date }, question: { required: true, type: () => require("../analyse_examine/examination.entity").Examine } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ type: 'number', example: '主键唯一标识' }),
    __metadata("design:type", Number)
], ArtificalNve.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '账号' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '姓名' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "names", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '所属部门' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '开始时间' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '交卷时间' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '用时' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "useTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '客观题得分' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '主观题得分' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "passing", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '成绩' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "achievement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '是否及格' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "whether", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '排名' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "ranking", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '切屏次数' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "cut", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '评语' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "correct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '状态' }),
    __metadata("design:type", String)
], ArtificalNve.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], ArtificalNve.prototype, "Time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => examination_entity_1.Examine, (question) => question.phones),
    __metadata("design:type", examination_entity_1.Examine)
], ArtificalNve.prototype, "question", void 0);
ArtificalNve = __decorate([
    (0, typeorm_1.Entity)()
], ArtificalNve);
exports.ArtificalNve = ArtificalNve;
//# sourceMappingURL=artificalnve.entity.js.map