"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseLearningModule = void 0;
const common_1 = require("@nestjs/common");
const analyse_learning_controller_1 = require("./analyse-learning.controller");
const analyse_learning_service_1 = require("./analyse-learning.service");
const analyse_learning_entity_1 = require("./analyse-learning.entity");
const typeorm_1 = require("@nestjs/typeorm");
const course_module_1 = require("../course/course.module");
const course_service_1 = require("../course/course.service");
let AnalyseLearningModule = class AnalyseLearningModule {
};
AnalyseLearningModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([analyse_learning_entity_1.Analyselearning]), course_module_1.CourseModule],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [analyse_learning_controller_1.AnalyseLearningController],
        providers: [analyse_learning_service_1.AnalyseLearningService, course_service_1.CourseService],
    })
], AnalyseLearningModule);
exports.AnalyseLearningModule = AnalyseLearningModule;
//# sourceMappingURL=analyse-learning.module.js.map