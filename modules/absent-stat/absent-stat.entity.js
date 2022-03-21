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
exports.AbsentStat = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let AbsentStat = class AbsentStat {
    static _OPENAPI_METADATA_FACTORY() {
        return { absentStat_id: { required: true, type: () => String }, absentStat_name: { required: true, type: () => String }, absentStat_type: { required: true, type: () => String }, absentStat_startTime: { required: true, type: () => Date }, absentStat_endTime: { required: true, type: () => Date }, absentStat_joinNumber: { required: true, type: () => String }, absentStat_alreadyNumber: { required: true, type: () => String }, absentStat_noJoinNumber: { required: true, type: () => String }, absentStat_createAt: { required: true, type: () => Date }, absentStat_updateAt: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], AbsentStat.prototype, "absentStat_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '一个考试名称' }),
    __metadata("design:type", String)
], AbsentStat.prototype, "absentStat_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '考试' }),
    __metadata("design:type", String)
], AbsentStat.prototype, "absentStat_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2021/12/2 8:30:00' }),
    __metadata("design:type", Date)
], AbsentStat.prototype, "absentStat_startTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2021/12/5 8:30:00' }),
    __metadata("design:type", Date)
], AbsentStat.prototype, "absentStat_endTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '5' }),
    __metadata("design:type", String)
], AbsentStat.prototype, "absentStat_joinNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2' }),
    __metadata("design:type", String)
], AbsentStat.prototype, "absentStat_alreadyNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '3' }),
    __metadata("design:type", String)
], AbsentStat.prototype, "absentStat_noJoinNumber", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], AbsentStat.prototype, "absentStat_createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], AbsentStat.prototype, "absentStat_updateAt", void 0);
AbsentStat = __decorate([
    (0, typeorm_1.Entity)()
], AbsentStat);
exports.AbsentStat = AbsentStat;
//# sourceMappingURL=absent-stat.entity.js.map