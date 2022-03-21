"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsExamResultModule = void 0;
const common_1 = require("@nestjs/common");
const students_exam_result_controller_1 = require("./students-exam-result.controller");
const students_exam_result_service_1 = require("./students-exam-result.service");
const typeorm_1 = require("@nestjs/typeorm");
const students_exam_result_entity_1 = require("./students-exam-result.entity");
let StudentsExamResultModule = class StudentsExamResultModule {
};
StudentsExamResultModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([students_exam_result_entity_1.StudentsExamResult])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [students_exam_result_controller_1.StudentsExamResultController],
        providers: [students_exam_result_service_1.StudentsExamResultService],
    })
], StudentsExamResultModule);
exports.StudentsExamResultModule = StudentsExamResultModule;
//# sourceMappingURL=students-exam-result.module.js.map