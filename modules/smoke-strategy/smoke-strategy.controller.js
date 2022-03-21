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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmokeStrategyController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const smoke_strategy_service_1 = require("./smoke-strategy.service");
const swagger_1 = require("@nestjs/swagger");
let SmokeStrategyController = class SmokeStrategyController {
    constructor(smokeStrategyService) {
        this.smokeStrategyService = smokeStrategyService;
    }
    createStrategy(body) {
        return this.smokeStrategyService.createStrategy(body);
    }
    deleteSmokeStrategy(id) {
        return this.smokeStrategyService.deleteSmokeStrategy(id);
    }
    getStrategyQuestionList(id) {
        return this.smokeStrategyService.getStrategyQuestionList(id);
    }
    saveQuestionInfoStrategy(body) {
        return this.smokeStrategyService.saveQuestionInfoStrategy(body);
    }
    updateSmokeStrategy(body) {
        return this.smokeStrategyService.updateSmokeStrategy(body);
    }
    deleteSmokeQuestion(body) {
        return this.smokeStrategyService.deleteSmokeQuestion(body);
    }
    bathDelete(body) {
        return this.smokeStrategyService.bath(body);
    }
    infoSmoke(body) {
        return this.smokeStrategyService.infoSmoke(body);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SmokeStrategyController.prototype, "createStrategy", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SmokeStrategyController.prototype, "deleteSmokeStrategy", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SmokeStrategyController.prototype, "getStrategyQuestionList", null);
__decorate([
    (0, common_1.Put)('save-ques'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SmokeStrategyController.prototype, "saveQuestionInfoStrategy", null);
__decorate([
    (0, common_1.Put)('update'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SmokeStrategyController.prototype, "updateSmokeStrategy", null);
__decorate([
    (0, common_1.Put)('del-smoke-ques'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SmokeStrategyController.prototype, "deleteSmokeQuestion", null);
__decorate([
    (0, common_1.Put)('bath-del'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SmokeStrategyController.prototype, "bathDelete", null);
__decorate([
    (0, common_1.Put)('info'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SmokeStrategyController.prototype, "infoSmoke", null);
SmokeStrategyController = __decorate([
    (0, swagger_1.ApiTags)('考试-试卷-抽题策略'),
    (0, common_1.Controller)('smoke-strategy'),
    __metadata("design:paramtypes", [smoke_strategy_service_1.SmokeStrategyService])
], SmokeStrategyController);
exports.SmokeStrategyController = SmokeStrategyController;
//# sourceMappingURL=smoke-strategy.controller.js.map