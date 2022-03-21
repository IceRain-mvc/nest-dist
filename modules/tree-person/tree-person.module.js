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
exports.TreePersonModule = void 0;
const common_1 = require("@nestjs/common");
const tree_person_controller_1 = require("./tree-person.controller");
const tree_person_service_1 = require("./tree-person.service");
const typeorm_1 = require("@nestjs/typeorm");
const tree_person_entity_1 = require("./tree-person.entity");
let TreePersonModule = class TreePersonModule {
    constructor(treePersonService) {
        this.treePersonService = treePersonService;
    }
};
TreePersonModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tree_person_entity_1.TreePerson])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [tree_person_controller_1.TreePersonController],
        providers: [tree_person_service_1.TreePersonService],
    }),
    __metadata("design:paramtypes", [tree_person_service_1.TreePersonService])
], TreePersonModule);
exports.TreePersonModule = TreePersonModule;
//# sourceMappingURL=tree-person.module.js.map