"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionConfigModules = void 0;
const common_1 = require("@nestjs/common");
const exer_question_config_controller_1 = require("./exer_question-config.controller");
const question_config_service_1 = require("./question-config.service");
const typeorm_1 = require("@nestjs/typeorm");
const exer_question_config_entity_1 = require("./exer_question-config.entity");
let QuestionConfigModules = class QuestionConfigModules {
};
QuestionConfigModules = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([exer_question_config_entity_1.QuestionConfigs])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [exer_question_config_controller_1.QuestionConfigController],
        providers: [question_config_service_1.QuestionConfigService],
    })
], QuestionConfigModules);
exports.QuestionConfigModules = QuestionConfigModules;
//# sourceMappingURL=exer_question-config.module.js.map