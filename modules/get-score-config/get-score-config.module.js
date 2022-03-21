"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScoreConfigModule = void 0;
const common_1 = require("@nestjs/common");
const get_score_config_controller_1 = require("./get-score-config.controller");
const get_score_config_service_1 = require("./get-score-config.service");
const typeorm_1 = require("@nestjs/typeorm");
const get_score_config_entity_1 = require("./get-score-config.entity");
let GetScoreConfigModule = class GetScoreConfigModule {
};
GetScoreConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([get_score_config_entity_1.GetScoreConfig])],
        controllers: [get_score_config_controller_1.GetScoreConfigController],
        providers: [get_score_config_service_1.GetScoreConfigService],
    })
], GetScoreConfigModule);
exports.GetScoreConfigModule = GetScoreConfigModule;
//# sourceMappingURL=get-score-config.module.js.map