"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsCourseChapterModule = void 0;
const common_1 = require("@nestjs/common");
const students_course_chapter_controller_1 = require("./students-course-chapter.controller");
const students_course_chapter_service_1 = require("./students-course-chapter.service");
const typeorm_1 = require("@nestjs/typeorm");
const students_course_chapter_entity_1 = require("./students-course-chapter.entity");
const students_course_service_1 = require("../students-course/students-course.service");
const students_course_module_1 = require("../students-course/students-course.module");
let StudentsCourseChapterModule = class StudentsCourseChapterModule {
};
StudentsCourseChapterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([students_course_chapter_entity_1.StudentsCourseChapter]),
            students_course_module_1.StudentsCourseModule,
        ],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [students_course_chapter_controller_1.StudentsCourseChapterController],
        providers: [students_course_chapter_service_1.StudentsCourseChapterService, students_course_service_1.StudentsCourseService],
    })
], StudentsCourseChapterModule);
exports.StudentsCourseChapterModule = StudentsCourseChapterModule;
//# sourceMappingURL=students-course-chapter.module.js.map