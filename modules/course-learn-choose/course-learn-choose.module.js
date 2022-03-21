"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseLearnChooseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_learn_choose_controller_1 = require("./course-learn-choose.controller");
const course_learn_choose_entity_1 = require("./course-learn-choose.entity");
const course_learn_choose_service_1 = require("./course-learn-choose.service");
let CourseLearnChooseModule = class CourseLearnChooseModule {
};
CourseLearnChooseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_learn_choose_entity_1.CourseLearnChoose])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [course_learn_choose_controller_1.CourseLearnChooseController],
        providers: [course_learn_choose_service_1.CourseLearnChooseService],
    })
], CourseLearnChooseModule);
exports.CourseLearnChooseModule = CourseLearnChooseModule;
//# sourceMappingURL=course-learn-choose.module.js.map