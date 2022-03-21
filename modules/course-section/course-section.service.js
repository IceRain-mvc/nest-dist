"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSectionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_section_entity_1 = require("./course-section.entity");
let CourseSectionService = class CourseSectionService {
    constructor(CourseSectionRepository) {
        this.CourseSectionRepository = CourseSectionRepository;
    }
    async create(body) {
        const res = await this.CourseSectionRepository.create(Object.assign({}, body));
        this.CourseSectionRepository.save(res);
        return {
            msg: '添加成功',
            code: true,
        };
    }
    async getChapter(data) {
        return await this.CourseSectionRepository.find({
            courseId: data.courseId,
        });
    }
    async deChapterData(data) {
        if (data.id) {
            await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .delete()
                .from(course_section_entity_1.CourseSection)
                .where('id = :id', data)
                .execute();
        }
        else if (data.chapterId) {
            await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .delete()
                .from(course_section_entity_1.CourseSection)
                .where('chapterId = :chapterId', data)
                .execute();
        }
    }
    async redactChapter(data) {
        console.log(data);
        await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(course_section_entity_1.CourseSection)
            .set(data)
            .where('id = :id', data)
            .execute();
    }
    async getCourseSections(data) {
        const user = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .select('courseSection')
            .from(course_section_entity_1.CourseSection, 'courseSection')
            .where('courseSection.courseId = :courseId', data)
            .getOne();
        return user;
    }
};
CourseSectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_section_entity_1.CourseSection)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseSectionService);
exports.CourseSectionService = CourseSectionService;
//# sourceMappingURL=course-section.service.js.map