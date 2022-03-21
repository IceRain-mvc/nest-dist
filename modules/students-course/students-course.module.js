"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsCourseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const students_course_controller_1 = require("./students-course.controller");
const students_course_entity_1 = require("./students-course.entity");
const students_course_service_1 = require("./students-course.service");
let StudentsCourseModule = class StudentsCourseModule {
};
StudentsCourseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([students_course_entity_1.StudentsCourse])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [students_course_controller_1.StudentsCourseController],
        providers: [students_course_service_1.StudentsCourseService],
    })
], StudentsCourseModule);
exports.StudentsCourseModule = StudentsCourseModule;
//# sourceMappingURL=students-course.module.js.map