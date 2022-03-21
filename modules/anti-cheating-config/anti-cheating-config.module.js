"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntiCheatingConfigModule = void 0;
const common_1 = require("@nestjs/common");
const anti_cheating_config_controller_1 = require("./anti-cheating-config.controller");
const anti_cheating_config_service_1 = require("./anti-cheating-config.service");
const typeorm_1 = require("@nestjs/typeorm");
const anti_cheating_config_entity_1 = require("./anti-cheating-config.entity");
let AntiCheatingConfigModule = class AntiCheatingConfigModule {
};
AntiCheatingConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([anti_cheating_config_entity_1.AntiCheatingConfig])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [anti_cheating_config_controller_1.AntiCheatingConfigController],
        providers: [anti_cheating_config_service_1.AntiCheatingConfigService],
    })
], AntiCheatingConfigModule);
exports.AntiCheatingConfigModule = AntiCheatingConfigModule;
//# sourceMappingURL=anti-cheating-config.module.js.map