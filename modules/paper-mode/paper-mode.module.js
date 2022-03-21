"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperModeModule = void 0;
const common_1 = require("@nestjs/common");
const paper_mode_controller_1 = require("./paper-mode.controller");
const paper_mode_service_1 = require("./paper-mode.service");
const typeorm_1 = require("@nestjs/typeorm");
const paper_mode_entity_1 = require("./paper-mode.entity");
const paper_mode_require_service_1 = require("../paper-mode-require/paper-mode-require.service");
const paper_mode_require_module_1 = require("../paper-mode-require/paper-mode-require.module");
let PaperModeModule = class PaperModeModule {
};
PaperModeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([paper_mode_entity_1.PaperMode]), paper_mode_require_module_1.PaperModeRequireModule],
        controllers: [paper_mode_controller_1.PaperModeController],
        providers: [paper_mode_service_1.PaperModeService, paper_mode_require_service_1.PaperModeRequireService],
    })
], PaperModeModule);
exports.PaperModeModule = PaperModeModule;
//# sourceMappingURL=paper-mode.module.js.map