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
exports.ExamineeSideInformation = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let ExamineeSideInformation = class ExamineeSideInformation {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, AppLogo: { required: true, type: () => String }, AppName: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ExamineeSideInformation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '图片地址' }),
    __metadata("design:type", String)
], ExamineeSideInformation.prototype, "AppLogo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'App名称' }),
    __metadata("design:type", String)
], ExamineeSideInformation.prototype, "AppName", void 0);
ExamineeSideInformation = __decorate([
    (0, typeorm_1.Entity)()
], ExamineeSideInformation);
exports.ExamineeSideInformation = ExamineeSideInformation;
//# sourceMappingURL=examinee-side-information.entity.js.map