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
exports.CourseDesignService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_design_entity_1 = require("./course-design.entity");
const typeorm_2 = require("typeorm");
let CourseDesignService = class CourseDesignService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async getChapter(parmes) {
        const { courseId } = parmes;
        return await this.courseRepository.query(`select * from course_design where course_design.courseId = '${courseId}'`);
    }
    async addMessage(parmes) {
        const { courseId, chapterName, ids } = parmes;
        function guid() {
            return 'xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                const r = (Math.random() * 16) | 0;
                const v = c == 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        }
        console.log(guid());
        const res = await this.courseRepository.query(`insert into course_design (chapterName,courseId,ids,uids) values('${chapterName}','${courseId}',${ids},'${guid()}')`);
        if (res) {
            const res1 = await this.courseRepository.query(`select * from course_design where course_design.courseId = '${courseId}'`);
            return res1;
        }
    }
    async deleteMessage(parmes) {
        const { id, courseId } = parmes;
        const res = await this.courseRepository.query(`delete from course_design where course_design.chapterId = '${id}'`);
        if (res) {
            const res1 = await this.courseRepository.query(`select * from course_design where course_design.courseId = '${courseId}'`);
            return res1;
        }
    }
    async recomposeMessage(parmes) {
        const { nowId, toId } = parmes;
        const now = await this.courseRepository.query(`select * from course_design where course_design.chapterId = ${Number(nowId)}`);
        const to = await this.courseRepository.query(`select * from course_design where course_design.chapterId = ${Number(toId)}`);
        const transferId = now[0].chapterId;
        now[0].chapterId = to[0].chapterId;
        to[0].chapterId = transferId;
        await this.courseRepository.query(`delete from course_design where course_design.chapterId = ${Number(nowId)}`);
        await this.courseRepository.query(`delete from course_design where course_design.chapterId = ${Number(toId)}`);
        await this.courseRepository
            .createQueryBuilder()
            .insert()
            .into(course_design_entity_1.CourseDesign)
            .values(now)
            .execute();
        await this.courseRepository
            .createQueryBuilder()
            .insert()
            .into(course_design_entity_1.CourseDesign)
            .values(to)
            .execute();
    }
    async editChapterName(parmes) {
        const { courseId, chapterId, chapterName } = parmes;
        const res = await this.courseRepository.query(`update course_design set course_design.chapterName = '${chapterName}' where course_design.chapterId = ${chapterId}`);
        if (res) {
            const res1 = await this.courseRepository.query(`select * from course_design where course_design.courseId = '${courseId}'`);
            return res1;
        }
    }
};
CourseDesignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_design_entity_1.CourseDesign)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseDesignService);
exports.CourseDesignService = CourseDesignService;
//# sourceMappingURL=course-design.service.js.map