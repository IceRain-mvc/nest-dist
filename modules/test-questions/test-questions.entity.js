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
exports.TestQuestions = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const testBank_entity_1 = require("../testBank/testBank.entity");
let TestQuestions = class TestQuestions {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, testBanks: { required: true, type: () => require("../testBank/testBank.entity").TestBank }, score: { required: true, type: () => String }, scoreRatio: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], TestQuestions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => testBank_entity_1.TestBank, (testBank) => testBank.testQuestions, {
        onDelete: 'CASCADE',
    }),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '关联id' }),
    __metadata("design:type", testBank_entity_1.TestBank)
], TestQuestions.prototype, "testBanks", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '得分点' }),
    __metadata("design:type", String)
], TestQuestions.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '得分比例' }),
    __metadata("design:type", String)
], TestQuestions.prototype, "scoreRatio", void 0);
TestQuestions = __decorate([
    (0, typeorm_1.Entity)()
], TestQuestions);
exports.TestQuestions = TestQuestions;
//# sourceMappingURL=test-questions.entity.js.map