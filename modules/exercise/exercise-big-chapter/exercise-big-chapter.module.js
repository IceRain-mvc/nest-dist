"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseBigChapterModule = void 0;
const common_1 = require("@nestjs/common");
const exercise_big_chapter_controller_1 = require("./exercise-big-chapter.controller");
const exercise_big_chapter_service_1 = require("./exercise-big-chapter.service");
const typeorm_1 = require("@nestjs/typeorm");
const exercise_each_chapter_module_1 = require("../exercise-each-chapter/exercise-each-chapter.module");
const exercise_each_chapter_service_1 = require("../exercise-each-chapter/exercise-each-chapter.service");
const exercise_big_chapter_entity_1 = require("./exercise-big-chapter.entity");
const testBank_module_1 = require("../../testBank/testBank.module");
const testBank_service_1 = require("../../testBank/testBank.service");
const tree_person_service_1 = require("../../tree-person/tree-person.service");
const tree_person_module_1 = require("../../tree-person/tree-person.module");
let ExerciseBigChapterModule = class ExerciseBigChapterModule {
};
ExerciseBigChapterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([exercise_big_chapter_entity_1.ExerBigChapter]),
            (0, common_1.forwardRef)(() => exercise_each_chapter_module_1.ExerciseEachChapterModule),
            testBank_module_1.TestBankModule,
            tree_person_module_1.TreePersonModule,
        ],
        exports: [typeorm_1.TypeOrmModule, exercise_big_chapter_service_1.ExerciseBigChapterService],
        controllers: [exercise_big_chapter_controller_1.ExerciseBigChapterController],
        providers: [
            exercise_big_chapter_service_1.ExerciseBigChapterService,
            exercise_each_chapter_service_1.ExerciseEachChapterService,
            testBank_service_1.TestBankService,
            tree_person_service_1.TreePersonService,
        ],
    })
], ExerciseBigChapterModule);
exports.ExerciseBigChapterModule = ExerciseBigChapterModule;
//# sourceMappingURL=exercise-big-chapter.module.js.map