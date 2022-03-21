"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLearnWayModule = void 0;
const common_1 = require("@nestjs/common");
const course_learn_way_service_1 = require("./course-learn-way.service");
const course_learn_way_controller_1 = require("./course-learn-way.controller");
const course_learn_way_entity_1 = require("./course-learn-way.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CourseLearnWayModule = class CourseLearnWayModule {
};
CourseLearnWayModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_learn_way_entity_1.CourseLearnWay])],
        exports: [typeorm_1.TypeOrmModule],
        providers: [course_learn_way_service_1.CourseLearnWayService],
        controllers: [course_learn_way_controller_1.CourseLearnWayController],
    })
], CourseLearnWayModule);
exports.CourseLearnWayModule = CourseLearnWayModule;
//# sourceMappingURL=course-learn-way.module.js.map