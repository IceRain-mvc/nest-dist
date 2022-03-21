"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerTimeModule = void 0;
const common_1 = require("@nestjs/common");
const answer_time_controller_1 = require("./answer-time.controller");
const answer_time_service_1 = require("./answer-time.service");
const typeorm_1 = require("@nestjs/typeorm");
const answer_time_entity_1 = require("./answer-time.entity");
let AnswerTimeModule = class AnswerTimeModule {
};
AnswerTimeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([answer_time_entity_1.AnswerTime])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [answer_time_controller_1.AnswerTimeController],
        providers: [answer_time_service_1.AnswerTimeService],
    })
], AnswerTimeModule);
exports.AnswerTimeModule = AnswerTimeModule;
//# sourceMappingURL=answer-time.module.js.map