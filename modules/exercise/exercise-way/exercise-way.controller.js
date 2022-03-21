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
exports.ExerciseWayController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const exercise_way_service_1 = require("./exercise-way.service");
const exercise_way_entity_1 = require("./exercise-way.entity");
let ExerciseWayController = class ExerciseWayController {
    constructor(participationWayService) {
        this.participationWayService = participationWayService;
    }
    async linked() {
        const res = await this.participationWayService.findAll();
        return res;
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: exercise_way_entity_1.ExerciseWay,
    }),
    (0, common_1.Get)('getExamList'),
    openapi.ApiResponse({ status: 200, type: [require("./exercise-way.entity").ExerciseWay] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExerciseWayController.prototype, "linked", null);
ExerciseWayController = __decorate([
    (0, swagger_1.ApiTags)('练习模块'),
    (0, common_1.Controller)('exercise-way'),
    __metadata("design:paramtypes", [exercise_way_service_1.ExerciseWayService])
], ExerciseWayController);
exports.ExerciseWayController = ExerciseWayController;
//# sourceMappingURL=exercise-way.controller.js.map