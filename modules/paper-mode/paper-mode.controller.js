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
exports.PaperModeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const paper_mode_service_1 = require("./paper-mode.service");
const swagger_1 = require("@nestjs/swagger");
const paper_mode_entity_1 = require("./paper-mode.entity");
let PaperModeController = class PaperModeController {
    constructor(paperModeService) {
        this.paperModeService = paperModeService;
    }
    getAll() {
        return this.paperModeService.getAll();
    }
    create(body) {
        return this.paperModeService.create(body);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.Get)('getAll'),
    openapi.ApiResponse({ status: 200, type: [require("./paper-mode.entity").PaperMode] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaperModeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaperModeController.prototype, "create", null);
PaperModeController = __decorate([
    (0, swagger_1.ApiTags)('考试模式'),
    (0, common_1.Controller)('paper-mode'),
    __metadata("design:paramtypes", [paper_mode_service_1.PaperModeService])
], PaperModeController);
exports.PaperModeController = PaperModeController;
//# sourceMappingURL=paper-mode.controller.js.map