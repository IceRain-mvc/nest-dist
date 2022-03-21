"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseArtificalModule = void 0;
const common_1 = require("@nestjs/common");
const artificalnve_controller_1 = require("./artificalnve.controller");
const artificalnve_service_1 = require("./artificalnve.service");
const typeorm_1 = require("@nestjs/typeorm");
const artificalnve_entity_1 = require("./artificalnve.entity");
let AnalyseArtificalModule = class AnalyseArtificalModule {
};
AnalyseArtificalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([artificalnve_entity_1.ArtificalNve])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [artificalnve_controller_1.AnalyseArtificalController],
        providers: [artificalnve_service_1.AnalyseArtificalService],
    })
], AnalyseArtificalModule);
exports.AnalyseArtificalModule = AnalyseArtificalModule;
//# sourceMappingURL=artificalnve.module.js.map