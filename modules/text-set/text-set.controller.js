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
exports.TextSetController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const text_set_service_1 = require("./text-set.service");
let TextSetController = class TextSetController {
    constructor(testsetService) {
        this.testsetService = testsetService;
    }
    getAll() {
        console.log('成功');
        return '成功';
    }
};
__decorate([
    (0, common_1.Get)('getAll'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextSetController.prototype, "getAll", null);
TextSetController = __decorate([
    (0, common_1.Controller)('text-set'),
    __metadata("design:paramtypes", [text_set_service_1.TextSetService])
], TextSetController);
exports.TextSetController = TextSetController;
//# sourceMappingURL=text-set.controller.js.map