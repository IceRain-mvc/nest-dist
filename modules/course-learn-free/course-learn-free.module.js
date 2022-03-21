"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLearnFreeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_learn_free_controller_1 = require("./course-learn-free.controller");
const course_learn_free_entity_1 = require("./course-learn-free.entity");
const course_learn_free_service_1 = require("./course-learn-free.service");
let CourseLearnFreeModule = class CourseLearnFreeModule {
};
CourseLearnFreeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_learn_free_entity_1.CourseLearnFree])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [course_learn_free_controller_1.CourseLearnFreeController],
        providers: [course_learn_free_service_1.CourseLearnFreeService],
    })
], CourseLearnFreeModule);
exports.CourseLearnFreeModule = CourseLearnFreeModule;
//# sourceMappingURL=course-learn-free.module.js.map