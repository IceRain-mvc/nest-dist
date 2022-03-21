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
exports.StudentsCourseMessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const students_course_message_entity_1 = require("./students-course-message.entity");
const students_course_service_1 = require("../students-course/students-course.service");
let StudentsCourseMessageService = class StudentsCourseMessageService {
    constructor(studentsCourseMessageRepository, studentsCourseService) {
        this.studentsCourseMessageRepository = studentsCourseMessageRepository;
        this.studentsCourseService = studentsCourseService;
    }
    async create(body) {
        const { courseId, studentsId, data } = body;
        let count = 0;
        const studentsCourseId = (await this.studentsCourseService.getById({
            courseId,
            studentsId,
        })).id;
        return Promise.all(data.map((item, index) => {
            count++;
            data[index].studentsCourseId = studentsCourseId;
            return this.studentsCourseMessageRepository.save(this.studentsCourseMessageRepository.create(item));
        }))
            .then((res) => {
            return {
                info: '添加成功',
                res: `成功添加${count}条数据`,
            };
        })
            .catch((err) => {
            return {
                info: '添加失败',
                res: err,
            };
        });
    }
    async getByStudentsCourseId(query) {
        const res = await this.studentsCourseMessageRepository
            .createQueryBuilder('students-course-chapter')
            .where('studentsCourseId = :studentsCourseId', ...query)
            .getMany();
        return res;
    }
    async getById(query) {
        const { studentsId, courseId } = query;
        const studentsCourseId = (await this.studentsCourseService.getById({
            courseId,
            studentsId,
        })).id;
        const res = await this.getByStudentsCourseId({ studentsCourseId });
        return res;
    }
    async updateById(body) {
        const { studentsId, courseId } = body, data = __rest(body, ["studentsId", "courseId"]);
        const studentsCourseId = (await this.studentsCourseService.getById({
            courseId,
            studentsId,
        })).id;
        const res = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(students_course_message_entity_1.StudentsCourseMessage)
            .set(data)
            .where('studentsCourseId = :studentsCourseId', {
            studentsCourseId,
        })
            .execute();
        return res;
    }
};
StudentsCourseMessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(students_course_message_entity_1.StudentsCourseMessage)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_course_service_1.StudentsCourseService])
], StudentsCourseMessageService);
exports.StudentsCourseMessageService = StudentsCourseMessageService;
//# sourceMappingURL=students-course-message.service.js.map