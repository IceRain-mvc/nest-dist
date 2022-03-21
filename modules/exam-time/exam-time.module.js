"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamTimeModule = void 0;
const common_1 = require("@nestjs/common");
const exam_time_controller_1 = require("./exam-time.controller");
const exam_time_service_1 = require("./exam-time.service");
const typeorm_1 = require("@nestjs/typeorm");
const exam_time_entity_1 = require("./exam-time.entity");
let ExamTimeModule = class ExamTimeModule {
};
ExamTimeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([exam_time_entity_1.ExamTime])],
        controllers: [exam_time_controller_1.ExamTimeController],
        providers: [exam_time_service_1.ExamTimeService],
    })
], ExamTimeModule);
exports.ExamTimeModule = ExamTimeModule;
//# sourceMappingURL=exam-time.module.js.map