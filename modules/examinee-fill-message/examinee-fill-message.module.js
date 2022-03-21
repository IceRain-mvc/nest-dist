"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamineeFillMessageModule = void 0;
const common_1 = require("@nestjs/common");
const examinee_fill_message_controller_1 = require("./examinee-fill-message.controller");
const examinee_fill_message_service_1 = require("./examinee-fill-message.service");
const typeorm_1 = require("@nestjs/typeorm");
const examinee_fill_message_entity_1 = require("./examinee-fill-message.entity");
let ExamineeFillMessageModule = class ExamineeFillMessageModule {
};
ExamineeFillMessageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([examinee_fill_message_entity_1.ExamineeFillMessage])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [examinee_fill_message_controller_1.ExamineeFillMessageController],
        providers: [examinee_fill_message_service_1.ExamineeFillMessageService],
    })
], ExamineeFillMessageModule);
exports.ExamineeFillMessageModule = ExamineeFillMessageModule;
//# sourceMappingURL=examinee-fill-message.module.js.map