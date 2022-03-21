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
exports.analyseStatistical = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const analyse_bounced_practice_entity_1 = require("../analyse-bounced-practice/analyse-bounced-practice.entity");
let analyseStatistical = class analyseStatistical {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, practiceStatistical: { required: true, type: () => String }, startTime: { required: true, type: () => String }, endTime: { required: true, type: () => String }, participateWay: { required: true, type: () => String }, PracticeType: { required: true, type: () => String }, participantsNumber: { required: true, type: () => String }, practiceNumber: { required: true, type: () => String }, AveragePracticeDuration: { required: true, type: () => String }, scoringAverage: { required: true, type: () => String }, accuracy: { required: true, type: () => String }, rateWrongTopic: { required: true, type: () => String }, Time: { required: true, type: () => Date }, phones: { required: true, type: () => [require("../analyse-bounced-practice/analyse-bounced-practice.entity").analyseBouncedPractice] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], analyseStatistical.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '练习名称' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "practiceStatistical", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '开始时间' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '结束时间' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '参加方式' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "participateWay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '练习类型' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "PracticeType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '参加人数' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "participantsNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '练习次数' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "practiceNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '平均练习时长' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "AveragePracticeDuration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '得分率' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "scoringAverage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '正确率' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "accuracy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '错题率' }),
    __metadata("design:type", String)
], analyseStatistical.prototype, "rateWrongTopic", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], analyseStatistical.prototype, "Time", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => analyse_bounced_practice_entity_1.analyseBouncedPractice, (val) => val.question),
    __metadata("design:type", Array)
], analyseStatistical.prototype, "phones", void 0);
analyseStatistical = __decorate([
    (0, typeorm_1.Entity)()
], analyseStatistical);
exports.analyseStatistical = analyseStatistical;
//# sourceMappingURL=analyse-statistical.entity.js.map