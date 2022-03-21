"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseDesignModule = void 0;
const common_1 = require("@nestjs/common");
const course_design_entity_1 = require("./course-design.entity");
const course_design_controller_1 = require("./course-design.controller");
const typeorm_1 = require("@nestjs/typeorm");
const course_design_service_1 = require("./course-design.service");
let CourseDesignModule = class CourseDesignModule {
};
CourseDesignModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_design_entity_1.CourseDesign])],
        exports: [typeorm_1.TypeOrmModule],
        providers: [course_design_service_1.CourseDesignService],
        controllers: [course_design_controller_1.CourseDesignController],
    })
], CourseDesignModule);
exports.CourseDesignModule = CourseDesignModule;
//# sourceMappingURL=course-design.module.js.map