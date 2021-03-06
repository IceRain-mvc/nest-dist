"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionConfigModule = void 0;
const common_1 = require("@nestjs/common");
const question_config_controller_1 = require("./question-config.controller");
const question_config_service_1 = require("./question-config.service");
const typeorm_1 = require("@nestjs/typeorm");
const question_config_entity_1 = require("./question-config.entity");
let QuestionConfigModule = class QuestionConfigModule {
};
QuestionConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([question_config_entity_1.QuestionConfig])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [question_config_controller_1.QuestionConfigController],
        providers: [question_config_service_1.QuestionConfigService],
    })
], QuestionConfigModule);
exports.QuestionConfigModule = QuestionConfigModule;
//# sourceMappingURL=question-config.module.js.map