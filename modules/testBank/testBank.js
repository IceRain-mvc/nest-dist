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
exports.TestBatchDeleteSwargger = exports.TestDeleteRepetitionSwargger = exports.TestBatchAddSwargger = void 0;
const swagger_1 = require("@nestjs/swagger");
class TestBatchAddSwargger {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '判断题(题型)' }),
    __metadata("design:type", String)
], TestBatchAddSwargger.prototype, "questionTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '今天下雨了么(试题内容)' }),
    __metadata("design:type", String)
], TestBatchAddSwargger.prototype, "examContent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '试题分类' }),
    __metadata("design:type", String)
], TestBatchAddSwargger.prototype, "examTypes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: 'B(正确答案)' }),
    __metadata("design:type", String)
], TestBatchAddSwargger.prototype, "okanswer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '容易(难易度)' }),
    __metadata("design:type", String)
], TestBatchAddSwargger.prototype, "difficultyLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: 0 }),
    __metadata("design:type", Number)
], TestBatchAddSwargger.prototype, "gradeNum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Array',
        example: [{ options: '选择题选项', optionsContent: '选择题选项内容' }],
    }),
    __metadata("design:type", Array)
], TestBatchAddSwargger.prototype, "testOptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Array',
        example: [{ score: '得分点', scoreRatio: 10 }],
    }),
    __metadata("design:type", Array)
], TestBatchAddSwargger.prototype, "testGapFilling", void 0);
exports.TestBatchAddSwargger = TestBatchAddSwargger;
class TestDeleteRepetitionSwargger {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '今天下雨了么(试题内容)' }),
    __metadata("design:type", String)
], TestDeleteRepetitionSwargger.prototype, "examContent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '第几条数据' }),
    __metadata("design:type", String)
], TestDeleteRepetitionSwargger.prototype, "index", void 0);
exports.TestDeleteRepetitionSwargger = TestDeleteRepetitionSwargger;
class TestBatchDeleteSwargger {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '试题表的id' }),
    __metadata("design:type", String)
], TestBatchDeleteSwargger.prototype, "id", void 0);
exports.TestBatchDeleteSwargger = TestBatchDeleteSwargger;
//# sourceMappingURL=testBank.js.map