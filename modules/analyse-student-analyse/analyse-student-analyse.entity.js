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
exports.Analysestudentanalyse = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const analyse_grade_entity_1 = require("../analyse-grade/analyse-grade.entity");
let Analysestudentanalyse = class Analysestudentanalyse {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, authName: { required: true, type: () => String }, department: { required: true, type: () => String }, integral: { required: true, type: () => Number }, examalayses: { required: true, type: () => [require("../analyse-grade/analyse-grade.entity").AnalyseGrade] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Analysestudentanalyse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '赵孟凡' }),
    __metadata("design:type", String)
], Analysestudentanalyse.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '123' }),
    __metadata("design:type", String)
], Analysestudentanalyse.prototype, "authName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'string', example: '2012A' }),
    __metadata("design:type", String)
], Analysestudentanalyse.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ type: 'number', example: '100' }),
    __metadata("design:type", Number)
], Analysestudentanalyse.prototype, "integral", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => analyse_grade_entity_1.AnalyseGrade, (examalayse) => examalayse.analysestudentanalyses),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Analysestudentanalyse.prototype, "examalayses", void 0);
Analysestudentanalyse = __decorate([
    (0, typeorm_1.Entity)()
], Analysestudentanalyse);
exports.Analysestudentanalyse = Analysestudentanalyse;
//# sourceMappingURL=analyse-student-analyse.entity.js.map