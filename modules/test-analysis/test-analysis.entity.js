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
exports.TestAnalysis = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let TestAnalysis = class TestAnalysis {
    static _OPENAPI_METADATA_FACTORY() {
        return { absentStat_id: { required: true, type: () => String }, absentStat_createAt: { required: true, type: () => Date }, absentStat_updateAt: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], TestAnalysis.prototype, "absentStat_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], TestAnalysis.prototype, "absentStat_createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], TestAnalysis.prototype, "absentStat_updateAt", void 0);
TestAnalysis = __decorate([
    (0, typeorm_1.Entity)()
], TestAnalysis);
exports.TestAnalysis = TestAnalysis;
//# sourceMappingURL=test-analysis.entity.js.map