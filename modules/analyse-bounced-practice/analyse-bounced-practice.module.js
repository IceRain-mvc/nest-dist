"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseBouncedPracticeModule = void 0;
const common_1 = require("@nestjs/common");
const analyse_bounced_practice_service_1 = require("./analyse-bounced-practice.service");
const analyse_bounced_practice_controller_1 = require("./analyse-bounced-practice.controller");
const typeorm_1 = require("@nestjs/typeorm");
const analyse_bounced_practice_entity_1 = require("./analyse-bounced-practice.entity");
let AnalyseBouncedPracticeModule = class AnalyseBouncedPracticeModule {
};
AnalyseBouncedPracticeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([analyse_bounced_practice_entity_1.analyseBouncedPractice])],
        exports: [typeorm_1.TypeOrmModule],
        providers: [analyse_bounced_practice_service_1.AnalyseBouncedPracticeService],
        controllers: [analyse_bounced_practice_controller_1.AnalyseBouncedPracticeController],
    })
], AnalyseBouncedPracticeModule);
exports.AnalyseBouncedPracticeModule = AnalyseBouncedPracticeModule;
//# sourceMappingURL=analyse-bounced-practice.module.js.map