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
exports.ParticipationWayController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const participation_way_service_1 = require("./participation-way.service");
const swagger_1 = require("@nestjs/swagger");
const participation_way_entity_1 = require("./participation-way.entity");
let ParticipationWayController = class ParticipationWayController {
    constructor(participationWayService) {
        this.participationWayService = participationWayService;
    }
    create(body) {
        return this.participationWayService.create(body);
    }
    findAll() {
        const res = this.participationWayService.findAll();
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: participation_way_entity_1.ParticipationWay,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParticipationWayController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getExamList'),
    openapi.ApiResponse({ status: 200, type: [require("./participation-way.entity").ParticipationWay] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParticipationWayController.prototype, "findAll", null);
ParticipationWayController = __decorate([
    (0, swagger_1.ApiTags)('进入考试方式'),
    (0, common_1.Controller)('participation-way'),
    __metadata("design:paramtypes", [participation_way_service_1.ParticipationWayService])
], ParticipationWayController);
exports.ParticipationWayController = ParticipationWayController;
//# sourceMappingURL=participation-way.controller.js.map