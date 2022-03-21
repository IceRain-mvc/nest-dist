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
exports.TestGapFilling = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let TestGapFilling = class TestGapFilling {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, gapFillingAnswer: { required: true, type: () => String }, isAnswerSort: { required: true, type: () => Boolean }, isKeyword: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], TestGapFilling.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '填空题答案' }),
    __metadata("design:type", String)
], TestGapFilling.prototype, "gapFillingAnswer", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)({ type: 'bollean', example: '判分时不区分答案先后顺序' }),
    __metadata("design:type", Boolean)
], TestGapFilling.prototype, "isAnswerSort", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)({ type: 'bollean', example: '匹配答案的部分关键字就可得分' }),
    __metadata("design:type", Boolean)
], TestGapFilling.prototype, "isKeyword", void 0);
TestGapFilling = __decorate([
    (0, typeorm_1.Entity)()
], TestGapFilling);
exports.TestGapFilling = TestGapFilling;
//# sourceMappingURL=test-gap-filling.entity.js.map