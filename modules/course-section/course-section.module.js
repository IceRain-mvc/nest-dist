"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSectionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_section_controller_1 = require("./course-section.controller");
const course_section_entity_1 = require("./course-section.entity");
const course_section_service_1 = require("./course-section.service");
let CourseSectionModule = class CourseSectionModule {
};
CourseSectionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_section_entity_1.CourseSection])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [course_section_controller_1.CourseSectionController],
        providers: [course_section_service_1.CourseSectionService],
    })
], CourseSectionModule);
exports.CourseSectionModule = CourseSectionModule;
//# sourceMappingURL=course-section.module.js.map