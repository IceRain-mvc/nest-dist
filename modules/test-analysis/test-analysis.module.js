"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAnalysisModule = void 0;
const common_1 = require("@nestjs/common");
const test_analysis_controller_1 = require("./test-analysis.controller");
const test_analysis_service_1 = require("./test-analysis.service");
const test_analysis_entity_1 = require("./test-analysis.entity");
const typeorm_1 = require("@nestjs/typeorm");
const testBank_module_1 = require("../testBank/testBank.module");
const testBank_service_1 = require("../testBank/testBank.service");
const tree_person_module_1 = require("../tree-person/tree-person.module");
const tree_person_service_1 = require("../tree-person/tree-person.service");
let TestAnalysisModule = class TestAnalysisModule {
};
TestAnalysisModule = __decorate([
    (0, common_1.Module)({
        controllers: [test_analysis_controller_1.TestAnalysisController],
        providers: [test_analysis_service_1.TestAnalysisService, tree_person_service_1.TreePersonService, testBank_service_1.TestBankService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([test_analysis_entity_1.TestAnalysis]),
            tree_person_module_1.TreePersonModule,
            testBank_module_1.TestBankModule,
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], TestAnalysisModule);
exports.TestAnalysisModule = TestAnalysisModule;
//# sourceMappingURL=test-analysis.module.js.map