"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerEquipmentModule = void 0;
const common_1 = require("@nestjs/common");
const answer_equipment_controller_1 = require("./answer-equipment.controller");
const answer_equipment_service_1 = require("./answer-equipment.service");
const typeorm_1 = require("@nestjs/typeorm");
const answer_equipment_entity_1 = require("./answer-equipment.entity");
const answer_equipment_require_module_1 = require("../answer-equipment-require/answer-equipment-require.module");
const answer_equipment_require_service_1 = require("../answer-equipment-require/answer-equipment-require.service");
let AnswerEquipmentModule = class AnswerEquipmentModule {
};
AnswerEquipmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([answer_equipment_entity_1.AnswerEquipment]),
            answer_equipment_require_module_1.AnswerEquipmentRequireModule,
        ],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [answer_equipment_controller_1.AnswerEquipmentController],
        providers: [answer_equipment_service_1.AnswerEquipmentService, answer_equipment_require_service_1.AnswerEquipmentRequireService],
    })
], AnswerEquipmentModule);
exports.AnswerEquipmentModule = AnswerEquipmentModule;
//# sourceMappingURL=answer-equipment.module.js.map