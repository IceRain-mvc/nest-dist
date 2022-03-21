"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseStatsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_stats_controller_1 = require("./course-stats.controller");
const course_stats_entity_1 = require("./course-stats.entity");
const course_stats_service_1 = require("./course-stats.service");
let CourseStatsModule = class CourseStatsModule {
};
CourseStatsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_stats_entity_1.CourseStats])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [course_stats_controller_1.CourseStatsController],
        providers: [course_stats_service_1.CourseStatsService],
    })
], CourseStatsModule);
exports.CourseStatsModule = CourseStatsModule;
//# sourceMappingURL=course-stats.module.js.map