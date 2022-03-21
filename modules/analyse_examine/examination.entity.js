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
exports.Examine = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const analyse_bounced_examinee_entity_1 = require("../analyse-bounced-examinee/analyse-bounced-examinee.entity");
let Examine = class Examine {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, authName: { required: true, type: () => String }, Participation: { required: true, type: () => String }, types: { required: true, type: () => String }, participants: { required: true, type: () => String }, exercises: { required: true, type: () => String }, Average: { required: true, type: () => String }, Scoring: { required: true, type: () => String }, Correct: { required: true, type: () => String }, errors: { required: true, type: () => String }, Lowest: { required: true, type: () => String }, startTime: { required: true, type: () => String }, endTime: { required: true, type: () => String }, Time: { required: true, type: () => Date }, phones: { required: true, type: () => [require("../analyse-bounced-examinee/analyse-bounced-examinee.entity").analyseBouncedExaminees] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Examine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试名称' }),
    __metadata("design:type", String)
], Examine.prototype, "authName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试方式' }),
    __metadata("design:type", String)
], Examine.prototype, "Participation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '参加人次' }),
    __metadata("design:type", String)
], Examine.prototype, "types", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '及格人次' }),
    __metadata("design:type", String)
], Examine.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '及格率' }),
    __metadata("design:type", String)
], Examine.prototype, "exercises", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '正确率' }),
    __metadata("design:type", String)
], Examine.prototype, "Average", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '得分率' }),
    __metadata("design:type", String)
], Examine.prototype, "Scoring", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '平均分' }),
    __metadata("design:type", String)
], Examine.prototype, "Correct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '最高分' }),
    __metadata("design:type", String)
], Examine.prototype, "errors", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '最低分' }),
    __metadata("design:type", String)
], Examine.prototype, "Lowest", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '结束时间' }),
    __metadata("design:type", String)
], Examine.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '结束时间' }),
    __metadata("design:type", String)
], Examine.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], Examine.prototype, "Time", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => analyse_bounced_examinee_entity_1.analyseBouncedExaminees, (question) => question.question),
    __metadata("design:type", Array)
], Examine.prototype, "phones", void 0);
Examine = __decorate([
    (0, typeorm_1.Entity)()
], Examine);
exports.Examine = Examine;
//# sourceMappingURL=examination.entity.js.map