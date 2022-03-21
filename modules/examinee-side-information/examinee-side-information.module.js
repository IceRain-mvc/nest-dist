"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamineeSideInformationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const examinee_side_information_controller_1 = require("./examinee-side-information.controller");
const examinee_side_information_service_1 = require("./examinee-side-information.service");
const examinee_side_information_entity_1 = require("./examinee-side-information.entity");
let ExamineeSideInformationModule = class ExamineeSideInformationModule {
};
ExamineeSideInformationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([examinee_side_information_entity_1.ExamineeSideInformation])],
        controllers: [examinee_side_information_controller_1.ExamineeSideInformationController],
        providers: [examinee_side_information_service_1.ExamineeSideInformationService],
    })
], ExamineeSideInformationModule);
exports.ExamineeSideInformationModule = ExamineeSideInformationModule;
//# sourceMappingURL=examinee-side-information.module.js.map