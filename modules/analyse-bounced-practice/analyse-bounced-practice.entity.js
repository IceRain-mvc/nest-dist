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
exports.analyseBouncedPractice = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const analyse_statistical_entity_1 = require("../analyse-statistical/analyse-statistical.entity");
const swagger_1 = require("@nestjs/swagger");
let analyseBouncedPractice = class analyseBouncedPractice {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, names: { required: true, type: () => String }, startTime: { required: true, type: () => String }, endTime: { required: true, type: () => String }, when: { required: true, type: () => String }, score: { required: true, type: () => String }, passing: { required: true, type: () => String }, achievement: { required: true, type: () => String }, correct: { required: true, type: () => String }, scoring: { required: true, type: () => String }, whether: { required: true, type: () => String }, examination: { required: true, type: () => String }, state: { required: true, type: () => String }, participateNumber: { required: true, type: () => String }, stacking: { required: true, type: () => String }, Time: { required: true, type: () => Date }, question: { required: true, type: () => require("../analyse-statistical/analyse-statistical.entity").analyseStatistical } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)({ type: 'number', example: '主键唯一标识' }),
    __metadata("design:type", Number)
], analyseBouncedPractice.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '姓名' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "names", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '开始时间' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '结束时间' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '用时' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "when", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '总分' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '及格分' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "passing", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '成绩' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "achievement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '正确率' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "correct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '得分率' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "scoring", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '是否及格' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "whether", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试方式' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "examination", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '状态' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '参加次数' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "participateNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '排名' }),
    __metadata("design:type", String)
], analyseBouncedPractice.prototype, "stacking", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], analyseBouncedPractice.prototype, "Time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => analyse_statistical_entity_1.analyseStatistical, (val) => val.phones),
    __metadata("design:type", analyse_statistical_entity_1.analyseStatistical)
], analyseBouncedPractice.prototype, "question", void 0);
analyseBouncedPractice = __decorate([
    (0, typeorm_1.Entity)()
], analyseBouncedPractice);
exports.analyseBouncedPractice = analyseBouncedPractice;
//# sourceMappingURL=analyse-bounced-practice.entity.js.map