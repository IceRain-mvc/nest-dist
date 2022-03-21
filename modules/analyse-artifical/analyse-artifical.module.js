"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtificalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const analyse_artifical_entity_1 = require("./analyse-artifical.entity");
const analyse_artifical_controller_1 = require("./analyse-artifical.controller");
const analyse_artifical_service_1 = require("./analyse-artifical.service");
let ArtificalModule = class ArtificalModule {
};
ArtificalModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([analyse_artifical_entity_1.Artifical])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [analyse_artifical_controller_1.ArtificalController],
        providers: [analyse_artifical_service_1.ArtificalService],
    })
], ArtificalModule);
exports.ArtificalModule = ArtificalModule;
//# sourceMappingURL=analyse-artifical.module.js.map