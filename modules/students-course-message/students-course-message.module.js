"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsCourseMessageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const students_course_message_controller_1 = require("./students-course-message.controller");
const students_course_message_entity_1 = require("./students-course-message.entity");
const students_course_message_service_1 = require("./students-course-message.service");
const students_course_service_1 = require("../students-course/students-course.service");
const students_course_module_1 = require("../students-course/students-course.module");
let StudentsCourseMessageModule = class StudentsCourseMessageModule {
};
StudentsCourseMessageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([students_course_message_entity_1.StudentsCourseMessage]),
            students_course_module_1.StudentsCourseModule,
        ],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [students_course_message_controller_1.StudentsCourseMessageController],
        providers: [students_course_message_service_1.StudentsCourseMessageService, students_course_service_1.StudentsCourseService],
    })
], StudentsCourseMessageModule);
exports.StudentsCourseMessageModule = StudentsCourseMessageModule;
//# sourceMappingURL=students-course-message.module.js.map