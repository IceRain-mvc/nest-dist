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
exports.OperationLog = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let OperationLog = class OperationLog {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, createAt: { required: true, type: () => Date }, operationName: { required: true, type: () => String }, IPAddress: { required: true, type: () => String }, operationType: { required: true, type: () => String }, detail: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], OperationLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], OperationLog.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '姓名' }),
    __metadata("design:type", String)
], OperationLog.prototype, "operationName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'IP地址' }),
    __metadata("design:type", String)
], OperationLog.prototype, "IPAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '操作类型' }),
    __metadata("design:type", String)
], OperationLog.prototype, "operationType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '详细内容' }),
    __metadata("design:type", String)
], OperationLog.prototype, "detail", void 0);
OperationLog = __decorate([
    (0, typeorm_1.Entity)()
], OperationLog);
exports.OperationLog = OperationLog;
//# sourceMappingURL=operation-log.entity.js.map