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
exports.QuestionSelectionStrategyController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const question_selection_strategy_service_1 = require("./question-selection-strategy.service");
const swagger_1 = require("@nestjs/swagger");
const question_selection_strategy_entity_1 = require("./question-selection-strategy.entity");
let QuestionSelectionStrategyController = class QuestionSelectionStrategyController {
    constructor(questionSelectionStrategyService) {
        this.questionSelectionStrategyService = questionSelectionStrategyService;
    }
    create(body) {
        return this.questionSelectionStrategyService.create(body);
    }
    getStrategyList(id) {
        return this.questionSelectionStrategyService.getStrategyList(id);
    }
    deleteThisStrategy(id) {
        return this.questionSelectionStrategyService.deleteThisStrategy(id);
    }
    async updateStrategy(body) {
        return await this.questionSelectionStrategyService.updateStrategy(body);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({ description: '请求体', type: question_selection_strategy_entity_1.QuestionSelectionStrategy }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuestionSelectionStrategyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: [require("../testBank/testBank.entity").TestBank] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuestionSelectionStrategyController.prototype, "getStrategyList", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuestionSelectionStrategyController.prototype, "deleteThisStrategy", null);
__decorate([
    (0, common_1.Put)('update'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionSelectionStrategyController.prototype, "updateStrategy", null);
QuestionSelectionStrategyController = __decorate([
    (0, swagger_1.ApiTags)('试卷-抽题策略'),
    (0, common_1.Controller)('question-selection-strategy'),
    __metadata("design:paramtypes", [question_selection_strategy_service_1.QuestionSelectionStrategyService])
], QuestionSelectionStrategyController);
exports.QuestionSelectionStrategyController = QuestionSelectionStrategyController;
//# sourceMappingURL=question-selection-strategy.controller.js.map