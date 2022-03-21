"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmokeStrategyModule = void 0;
const common_1 = require("@nestjs/common");
const smoke_strategy_controller_1 = require("./smoke-strategy.controller");
const smoke_strategy_service_1 = require("./smoke-strategy.service");
const typeorm_1 = require("@nestjs/typeorm");
const smoke_strategy_entity_1 = require("./smoke-strategy.entity");
const paper_big_question_module_1 = require("../paper-big-question/paper-big-question.module");
const paper_big_question_service_1 = require("../paper-big-question/paper-big-question.service");
let SmokeStrategyModule = class SmokeStrategyModule {
};
SmokeStrategyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([smoke_strategy_entity_1.SmokeStrategy]),
            (0, common_1.forwardRef)(() => paper_big_question_module_1.PaperBigQuestionModule),
        ],
        exports: [typeorm_1.TypeOrmModule, smoke_strategy_service_1.SmokeStrategyService],
        controllers: [smoke_strategy_controller_1.SmokeStrategyController],
        providers: [smoke_strategy_service_1.SmokeStrategyService, paper_big_question_service_1.PaperBigQuestionService],
    })
], SmokeStrategyModule);
exports.SmokeStrategyModule = SmokeStrategyModule;
//# sourceMappingURL=smoke-strategy.module.js.map