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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsCourseChapterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const students_course_service_1 = require("../students-course/students-course.service");
const students_course_chapter_entity_1 = require("./students-course-chapter.entity");
let StudentsCourseChapterService = class StudentsCourseChapterService {
    constructor(studentsCourseChapterRepository, studentsCourseService) {
        this.studentsCourseChapterRepository = studentsCourseChapterRepository;
        this.studentsCourseService = studentsCourseService;
    }
    async create(body) {
        var e_1, _a;
        try {
            const { courseId, studentsId, data } = body;
            const studentsCourseId = (await this.studentsCourseService.getById({
                courseId,
                studentsId,
            })).id;
            try {
                for (var data_1 = __asyncValues(data), data_1_1; data_1_1 = await data_1.next(), !data_1_1.done;) {
                    const key = data_1_1.value;
                    key.studentsCourseId = studentsCourseId;
                    await this.studentsCourseChapterRepository.save(this.studentsCourseChapterRepository.create(key));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) await _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return {
                res: '创建成功',
            };
        }
        catch (_b) {
            return {
                res: '创建失败',
            };
        }
    }
    async getByStudentsCourseId(query) {
        try {
            const res = await this.studentsCourseChapterRepository
                .createQueryBuilder('students-course-chapter')
                .where('studentsCourseId = :studentsCourseId', {
                studentsCourseId: query.studentsCourseId,
            })
                .getMany();
            console.log(res, 9999);
            return res;
        }
        catch (_a) {
            return [];
        }
    }
    async getById(query) {
        try {
            const { studentsId, courseId } = query;
            const studentsCourseId = (await this.studentsCourseService.getById({
                courseId,
                studentsId,
            })).id;
            console.log(studentsCourseId);
            const res = await this.getByStudentsCourseId({ studentsCourseId });
            console.log(res);
            return res;
        }
        catch (_a) {
            return [];
        }
    }
    async updateById(query) {
        const { studentsId, courseId, sectionId, data } = query;
        const studentsCourseId = (await this.studentsCourseService.getById({
            courseId,
            studentsId,
        })).id;
        const res = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(students_course_chapter_entity_1.StudentsCourseChapter)
            .set(data)
            .where('studentsCourseId = :studentsCourseId AND sectionId = :sectionId', {
            studentsCourseId,
            sectionId,
        })
            .execute();
        return res;
    }
};
StudentsCourseChapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(students_course_chapter_entity_1.StudentsCourseChapter)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_course_service_1.StudentsCourseService])
], StudentsCourseChapterService);
exports.StudentsCourseChapterService = StudentsCourseChapterService;
//# sourceMappingURL=students-course-chapter.service.js.map