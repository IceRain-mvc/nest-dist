"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamConfigRequireModule = void 0;
const common_1 = require("@nestjs/common");
const exam_config_require_controller_1 = require("./exam-config-require.controller");
const exam_config_require_service_1 = require("./exam-config-require.service");
const typeorm_1 = require("@nestjs/typeorm");
const exam_config_require_entity_1 = require("./exam-config-require.entity");
let ExamConfigRequireModule = class ExamConfigRequireModule {
};
ExamConfigRequireModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([exam_config_require_entity_1.ExamConfigRequire])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [exam_config_require_controller_1.ExamConfigRequireController],
        providers: [exam_config_require_service_1.ExamConfigRequireService],
    })
], ExamConfigRequireModule);
exports.ExamConfigRequireModule = ExamConfigRequireModule;
//# sourceMappingURL=exam-config-require.module.js.map