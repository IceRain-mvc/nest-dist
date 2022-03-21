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
exports.AntiCheatingConfigController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const anti_cheating_config_service_1 = require("./anti-cheating-config.service");
const swagger_1 = require("@nestjs/swagger");
const anti_cheating_config_entity_1 = require("./anti-cheating-config.entity");
let AntiCheatingConfigController = class AntiCheatingConfigController {
    constructor(antiCheatingConfigService) {
        this.antiCheatingConfigService = antiCheatingConfigService;
    }
    getAllList() {
        return this.antiCheatingConfigService.getAllList();
    }
    create(body) {
        return this.antiCheatingConfigService.create(body);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.Get)('getAllList'),
    openapi.ApiResponse({ status: 200, type: [require("./anti-cheating-config.entity").AntiCheatingConfig] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AntiCheatingConfigController.prototype, "getAllList", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AntiCheatingConfigController.prototype, "create", null);
AntiCheatingConfigController = __decorate([
    (0, swagger_1.ApiTags)('防作弊设置'),
    (0, common_1.Controller)('anti-cheating-config'),
    __metadata("design:paramtypes", [anti_cheating_config_service_1.AntiCheatingConfigService])
], AntiCheatingConfigController);
exports.AntiCheatingConfigController = AntiCheatingConfigController;
//# sourceMappingURL=anti-cheating-config.controller.js.map