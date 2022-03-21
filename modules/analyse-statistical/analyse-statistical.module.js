"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseStatisticalModule = void 0;
const common_1 = require("@nestjs/common");
const analyse_statistical_controller_1 = require("./analyse-statistical.controller");
const analyse_statistical_service_1 = require("./analyse-statistical.service");
const typeorm_1 = require("@nestjs/typeorm");
const analyse_statistical_entity_1 = require("./analyse-statistical.entity");
let AnalyseStatisticalModule = class AnalyseStatisticalModule {
};
AnalyseStatisticalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([analyse_statistical_entity_1.analyseStatistical])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [analyse_statistical_controller_1.AnalyseStatisticalController],
        providers: [analyse_statistical_service_1.AnalyseStatisticalService],
    })
], AnalyseStatisticalModule);
exports.AnalyseStatisticalModule = AnalyseStatisticalModule;
//# sourceMappingURL=analyse-statistical.module.js.map