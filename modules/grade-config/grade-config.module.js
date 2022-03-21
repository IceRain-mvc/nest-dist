"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeConfigModule = void 0;
const common_1 = require("@nestjs/common");
const grade_config_controller_1 = require("./grade-config.controller");
const grade_config_service_1 = require("./grade-config.service");
const typeorm_1 = require("@nestjs/typeorm");
const grade_config_entity_1 = require("./grade-config.entity");
const grade_config_require_module_1 = require("../grade-config-require/grade-config-require.module");
const grade_config_require_service_1 = require("../grade-config-require/grade-config-require.service");
let GradeConfigModule = class GradeConfigModule {
};
GradeConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([grade_config_entity_1.GradeConfig]), grade_config_require_module_1.GradeConfigRequireModule],
        controllers: [grade_config_controller_1.GradeConfigController],
        providers: [grade_config_service_1.GradeConfigService, grade_config_require_service_1.GradeConfigRequireService],
    })
], GradeConfigModule);
exports.GradeConfigModule = GradeConfigModule;
//# sourceMappingURL=grade-config.module.js.map