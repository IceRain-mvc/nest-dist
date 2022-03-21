"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerEquipmentRequireModule = void 0;
const common_1 = require("@nestjs/common");
const answer_equipment_require_controller_1 = require("./answer-equipment-require.controller");
const answer_equipment_require_service_1 = require("./answer-equipment-require.service");
const typeorm_1 = require("@nestjs/typeorm");
const answer_equipment_require_entity_1 = require("./answer-equipment-require.entity");
let AnswerEquipmentRequireModule = class AnswerEquipmentRequireModule {
};
AnswerEquipmentRequireModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([answer_equipment_require_entity_1.AnswerEquipmentRequire])],
        exports: [typeorm_1.TypeOrmModule, answer_equipment_require_service_1.AnswerEquipmentRequireService],
        controllers: [answer_equipment_require_controller_1.AnswerEquipmentRequireController],
        providers: [answer_equipment_require_service_1.AnswerEquipmentRequireService],
    })
], AnswerEquipmentRequireModule);
exports.AnswerEquipmentRequireModule = AnswerEquipmentRequireModule;
//# sourceMappingURL=answer-equipment-require.module.js.map