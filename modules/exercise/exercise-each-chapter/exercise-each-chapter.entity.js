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
exports.EachChapter = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const exercise_big_chapter_entity_1 = require("../exercise-big-chapter/exercise-big-chapter.entity");
const testBank_entity_1 = require("../../testBank/testBank.entity");
let EachChapter = class EachChapter {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, key: { required: true, type: () => Number }, name: { required: true, type: () => String }, sum: { required: true, type: () => Number }, exerBigChapter: { required: true, type: () => require("../exercise-big-chapter/exercise-big-chapter.entity").ExerBigChapter }, testBanks: { required: true, type: () => [require("../../testBank/testBank.entity").TestBank] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EachChapter.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 'key',
        description: '每章的key',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], EachChapter.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '每一章节名称',
        description: '单击修改章节名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EachChapter.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 0,
        description: '拥有题数',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], EachChapter.prototype, "sum", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_big_chapter_entity_1.ExerBigChapter, (exerBigChapter) => exerBigChapter.eachChapters, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exercise_big_chapter_entity_1.ExerBigChapter)
], EachChapter.prototype, "exerBigChapter", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => testBank_entity_1.TestBank, (testBank) => testBank.eachExerse),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], EachChapter.prototype, "testBanks", void 0);
EachChapter = __decorate([
    (0, typeorm_1.Entity)()
], EachChapter);
exports.EachChapter = EachChapter;
//# sourceMappingURL=exercise-each-chapter.entity.js.map