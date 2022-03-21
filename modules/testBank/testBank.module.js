"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBankModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const testBank_controller_1 = require("./testBank.controller");
const testBank_entity_1 = require("./testBank.entity");
const testBank_service_1 = require("./testBank.service");
const tree_person_module_1 = require("../tree-person/tree-person.module");
const tree_person_service_1 = require("../tree-person/tree-person.service");
let TestBankModule = class TestBankModule {
};
TestBankModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([testBank_entity_1.TestBank]), tree_person_module_1.TreePersonModule],
        exports: [typeorm_1.TypeOrmModule, testBank_service_1.TestBankService],
        controllers: [testBank_controller_1.TestBankController],
        providers: [testBank_service_1.TestBankService, tree_person_service_1.TreePersonService],
    })
], TestBankModule);
exports.TestBankModule = TestBankModule;
//# sourceMappingURL=testBank.module.js.map