"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseStudentAnalyseModule = void 0;
const common_1 = require("@nestjs/common");
const analyse_student_analyse_controller_1 = require("./analyse-student-analyse.controller");
const analyse_student_analyse_service_1 = require("./analyse-student-analyse.service");
const typeorm_1 = require("@nestjs/typeorm");
const analyse_student_analyse_entity_1 = require("./analyse-student-analyse.entity");
const students_module_1 = require("../students/students.module");
const students_service_1 = require("../students/students.service");
const tree_person_module_1 = require("../tree-person/tree-person.module");
const tree_person_service_1 = require("../tree-person/tree-person.service");
let AnalyseStudentAnalyseModule = class AnalyseStudentAnalyseModule {
};
AnalyseStudentAnalyseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([analyse_student_analyse_entity_1.Analysestudentanalyse]),
            students_module_1.StudentsModule,
            tree_person_module_1.TreePersonModule,
        ],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [analyse_student_analyse_controller_1.AnalyseStudentAnalyseController],
        providers: [analyse_student_analyse_service_1.AnalyseStudentAnalyseService, students_service_1.StudentsService, tree_person_service_1.TreePersonService],
    })
], AnalyseStudentAnalyseModule);
exports.AnalyseStudentAnalyseModule = AnalyseStudentAnalyseModule;
//# sourceMappingURL=analyse-student-analyse.module.js.map