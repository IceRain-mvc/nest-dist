"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestOptionsModule = void 0;
const common_1 = require("@nestjs/common");
const test_options_controller_1 = require("./test-options.controller");
const test_options_service_1 = require("./test-options.service");
const test_options_entity_1 = require("./test-options.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TestOptionsModule = class TestOptionsModule {
};
TestOptionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([test_options_entity_1.TestOptions])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [test_options_controller_1.TestOptionsController],
        providers: [test_options_service_1.TestOptionsService],
    })
], TestOptionsModule);
exports.TestOptionsModule = TestOptionsModule;
//# sourceMappingURL=test-options.module.js.map