"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseWayModule = void 0;
const common_1 = require("@nestjs/common");
const exercise_way_controller_1 = require("./exercise-way.controller");
const exercise_way_service_1 = require("./exercise-way.service");
const typeorm_1 = require("@nestjs/typeorm");
const exercise_way_entity_1 = require("./exercise-way.entity");
let ExerciseWayModule = class ExerciseWayModule {
};
ExerciseWayModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([exercise_way_entity_1.ExerciseWay])],
        controllers: [exercise_way_controller_1.ExerciseWayController],
        providers: [exercise_way_service_1.ExerciseWayService],
    })
], ExerciseWayModule);
exports.ExerciseWayModule = ExerciseWayModule;
//# sourceMappingURL=exercise-way.module.js.map