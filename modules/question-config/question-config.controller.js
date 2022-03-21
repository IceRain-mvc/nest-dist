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
exports.QuestionConfigController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const question_config_service_1 = require("./question-config.service");
const swagger_1 = require("@nestjs/swagger");
const question_config_entity_1 = require("./question-config.entity");
let QuestionConfigController = class QuestionConfigController {
    constructor(questionConfigService) {
        this.questionConfigService = questionConfigService;
    }
    getAllList() {
        return this.questionConfigService.getAllList();
    }
    create(body) {
        return this.questionConfigService.create(body);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.Get)('getAllList'),
    openapi.ApiResponse({ status: 200, type: [require("./question-config.entity").QuestionConfig] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionConfigController.prototype, "getAllList", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuestionConfigController.prototype, "create", null);
QuestionConfigController = __decorate([
    (0, swagger_1.ApiTags)('试题设置'),
    (0, common_1.Controller)('question-config'),
    __metadata("design:paramtypes", [question_config_service_1.QuestionConfigService])
], QuestionConfigController);
exports.QuestionConfigController = QuestionConfigController;
//# sourceMappingURL=question-config.controller.js.map