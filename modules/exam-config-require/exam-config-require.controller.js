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
exports.ExamConfigRequireController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const exam_config_require_service_1 = require("./exam-config-require.service");
const swagger_1 = require("@nestjs/swagger");
const exam_config_require_entity_1 = require("./exam-config-require.entity");
let ExamConfigRequireController = class ExamConfigRequireController {
    constructor(examConfigRequireService) {
        this.examConfigRequireService = examConfigRequireService;
    }
    getAll() {
        return this.examConfigRequireService.getAll();
    }
    create(body) {
        return this.examConfigRequireService.create(body);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.Get)('getAll'),
    openapi.ApiResponse({ status: 200, type: [require("./exam-config-require.entity").ExamConfigRequire] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExamConfigRequireController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExamConfigRequireController.prototype, "create", null);
ExamConfigRequireController = __decorate([
    (0, common_1.Controller)('exam-config-require'),
    (0, swagger_1.ApiTags)('考试设置'),
    __metadata("design:paramtypes", [exam_config_require_service_1.ExamConfigRequireService])
], ExamConfigRequireController);
exports.ExamConfigRequireController = ExamConfigRequireController;
//# sourceMappingURL=exam-config-require.controller.js.map