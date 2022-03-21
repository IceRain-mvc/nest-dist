"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseEachChapterModule = void 0;
const common_1 = require("@nestjs/common");
const exercise_each_chapter_controller_1 = require("./exercise-each-chapter.controller");
const exercise_each_chapter_service_1 = require("./exercise-each-chapter.service");
const typeorm_1 = require("@nestjs/typeorm");
const exercise_each_chapter_entity_1 = require("./exercise-each-chapter.entity");
let ExerciseEachChapterModule = class ExerciseEachChapterModule {
};
ExerciseEachChapterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([exercise_each_chapter_entity_1.EachChapter])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [exercise_each_chapter_controller_1.ExerciseEachChapterController],
        providers: [exercise_each_chapter_service_1.ExerciseEachChapterService],
    })
], ExerciseEachChapterModule);
exports.ExerciseEachChapterModule = ExerciseEachChapterModule;
//# sourceMappingURL=exercise-each-chapter.module.js.map