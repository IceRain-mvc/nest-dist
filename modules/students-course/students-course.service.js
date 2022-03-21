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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsCourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const students_course_entity_1 = require("./students-course.entity");
let StudentsCourseService = class StudentsCourseService {
    constructor(studentsCourseRepository) {
        this.studentsCourseRepository = studentsCourseRepository;
    }
    async create(body) {
        const res = await this.studentsCourseRepository.save(this.studentsCourseRepository.create(body));
        return res;
    }
    async getAll() {
        const res = await this.studentsCourseRepository
            .createQueryBuilder('students-course')
            .leftJoinAndSelect('students-course.students', 'students')
            .leftJoinAndSelect('students-course.course', 'course')
            .leftJoinAndSelect('students-course.studentsCourseChapter', 'studens_course_chapter')
            .leftJoinAndSelect('students-course.studentsCourseMessage', 'students-course-message')
            .getMany();
        return res;
    }
    async getById(query) {
        const res = await this.studentsCourseRepository.findOne(Object.assign({}, query));
        return res || null;
    }
    async updateById(query) {
        try {
            const { studentsId, courseId } = query, data = __rest(query, ["studentsId", "courseId"]);
            console.log(query);
            const res = await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .update(students_course_entity_1.StudentsCourse)
                .set(data)
                .where('courseId = :courseId AND studentsId = :studentsId', {
                studentsId,
                courseId,
            })
                .execute();
            return res;
        }
        catch (_a) {
            return null;
        }
    }
    async getChapter(parmes) {
        try {
            const { courseId } = parmes;
            const res = await this.studentsCourseRepository.query(`select course_design.*,course_section.*  from course_design
      left join course_section
      on course_design.uids = course_section.chapterId
      where course_design.courseId = ${courseId}`);
            return res;
        }
        catch (_a) {
            return [];
        }
    }
};
StudentsCourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(students_course_entity_1.StudentsCourse)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentsCourseService);
exports.StudentsCourseService = StudentsCourseService;
//# sourceMappingURL=students-course.service.js.map