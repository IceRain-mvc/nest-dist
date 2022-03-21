"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerEquipmentRequireController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const answer_equipment_require_service_1 = require("./answer-equipment-require.service");
let AnswerEquipmentRequireController = class AnswerEquipmentRequireController {
    constructor(answerEquipmentRequireService) {
        this.answerEquipmentRequireService = answerEquipmentRequireService;
    }
};
AnswerEquipmentRequireController = __decorate([
    (0, common_1.Controller)('answer-equipment-require'),
    __metadata("design:paramtypes", [answer_equipment_require_service_1.AnswerEquipmentRequireService])
], AnswerEquipmentRequireController);
exports.AnswerEquipmentRequireController = AnswerEquipmentRequireController;
//# sourceMappingURL=answer-equipment-require.controller.js.map