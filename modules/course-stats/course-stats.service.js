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
exports.CourseStatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_entity_1 = require("../course/course.entity");
const students_course_entity_1 = require("../students-course/students-course.entity");
const students_entity_1 = require("../students/students.entity");
const course_stats_entity_1 = require("./course-stats.entity");
let CourseStatsService = class CourseStatsService {
    constructor(courseStatsRepository) {
        this.courseStatsRepository = courseStatsRepository;
    }
    async create(examBody) {
        const res = this.courseStatsRepository.create(examBody);
        const result = await this.courseStatsRepository.save(res);
        return result;
    }
    async getStudyStats(params) {
        const { page = 1, pageSize = 5, courseId, typeTitle, timestart, timeend, department, search, } = params;
        const start = (page - 1) * pageSize;
        const obj = {
            courseId,
            learnState: typeTitle,
            stats_department: department,
        };
        (typeTitle === '课程状态' || typeTitle === '0') && delete obj.learnState;
        department === '所属部门' && delete obj.stats_department;
        if (timeend && timestart && !search) {
            const result = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
                .createQueryBuilder('students_course')
                .where(obj)
                .andWhere('studentsCourse_createTime >= :start', { start: timestart })
                .andWhere('studentsCourse_updateAt <= :end', { end: timeend })
                .skip(start)
                .take(pageSize)
                .leftJoinAndSelect('students_course.students', 'students')
                .getManyAndCount();
            return result;
        }
        if (!timeend && !timestart && search) {
            const result = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
                .createQueryBuilder('students_course')
                .where(obj)
                .leftJoinAndSelect('students_course.students', 'students')
                .andWhere('students.studentName like :courseName OR students_course.treeId like :courseName', {
                courseName: `%${search}%`,
            })
                .skip(start)
                .take(pageSize)
                .getManyAndCount();
            return result;
        }
        if (timeend && timestart && search) {
            const result = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
                .createQueryBuilder('students_course')
                .where(obj)
                .leftJoinAndSelect('students_course.students', 'students')
                .andWhere('studentsCourse_createTime >= :start', { start: timestart })
                .andWhere('studentsCourse_updateAt <= :end', { end: timeend })
                .andWhere('students.studentName like :courseName', {
                courseName: `%${search}%`,
            })
                .skip(start)
                .take(pageSize)
                .getManyAndCount();
            return result;
        }
        const result = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
            .createQueryBuilder('students_course')
            .leftJoinAndSelect('students_course.students', 'students')
            .where(obj)
            .skip(start)
            .take(pageSize)
            .getManyAndCount();
        return result;
    }
    async getComment(params) {
        console.log(params);
        return '获取评论管理的接口';
    }
    async getAbsentAll(params) {
        const { courseId, department = '-1', search = '', } = params;
        const results = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
            .createQueryBuilder('students_course')
            .where({ courseId })
            .getMany();
        const result = await (0, typeorm_2.getRepository)(course_entity_1.Course)
            .createQueryBuilder('course')
            .leftJoinAndSelect('course.courseChoose', 'course_learn_choose')
            .where({ courseId })
            .getMany();
        const arrResults = [];
        results.forEach((item) => {
            arrResults.push(item.studentsId);
        });
        const diff = [];
        if (department !== '-1') {
            for (let index = 0; index < result[0].courseChoose.length; index++) {
                if (arrResults.indexOf(result[0].courseChoose[index].courseStudent) < 0) {
                    const studentList = await (0, typeorm_2.getRepository)(students_entity_1.Students)
                        .createQueryBuilder('students')
                        .where({ id: result[0].courseChoose[index].courseStudent })
                        .leftJoinAndSelect('students.treePerson', 'tree_person')
                        .select(['students.id', 'tree_person.id'])
                        .andWhere('tree_person.id = :id', { id: department })
                        .getMany();
                    console.log(studentList[0]);
                    if (studentList[0]) {
                        diff.push(studentList[0].id);
                    }
                }
            }
        }
        else {
            for (let index = 0; index < result[0].courseChoose.length; index++) {
                if (arrResults.indexOf(result[0].courseChoose[index].courseStudent) < 0) {
                    diff.push(result[0].courseChoose[index].courseStudent);
                }
            }
        }
        const resArr = [];
        for (let i = 0; i < diff.length; i++) {
            let res;
            if (search) {
                res = await (0, typeorm_2.getRepository)(students_entity_1.Students)
                    .createQueryBuilder('students')
                    .leftJoinAndSelect('students.treePerson', 'tree_person')
                    .where('students.id = :id', { id: diff[i] })
                    .andWhere('students.studentName like :courseName', {
                    courseName: `%${search}%`,
                })
                    .getOne();
            }
            else {
                res = await (0, typeorm_2.getRepository)(students_entity_1.Students)
                    .createQueryBuilder('students')
                    .leftJoinAndSelect('students.treePerson', 'tree_person')
                    .andWhere('students.id = :id', { id: diff[i] })
                    .getOne();
            }
            if (res) {
                let flag = true;
                if (resArr.length > 0) {
                    for (let index = 0; index < resArr.length; index++) {
                        if (resArr[index].id === res.id) {
                            flag = false;
                        }
                    }
                }
                if (flag) {
                    resArr.push(Object.assign(Object.assign({}, res), { stats_department: res.treePerson.title }));
                }
            }
        }
        return resArr;
    }
    async getAbsent(params) {
        const { page = 1, pageSize = 5 } = params;
        const start = (page - 1) * pageSize;
        const resArr = await this.getAbsentAll(params);
        const arr = resArr.slice(start, page * pageSize);
        return [arr, resArr.length];
    }
    async getStatsAll(params) {
        const { courseId } = params;
        const result = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
            .createQueryBuilder('students_course')
            .where({ courseId })
            .leftJoinAndSelect('students_course.students', 'students')
            .getManyAndCount();
        return result[0];
    }
    async getExportAbsent(params) {
        const { courseId } = params;
        const resArr = await this.getAbsentAll({ courseId });
        return resArr;
    }
    async getStatistics(params) {
        const { courseId } = params;
        const result = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
            .createQueryBuilder('students_course')
            .where({ courseId })
            .leftJoinAndSelect('students_course.students', 'students')
            .getManyAndCount();
        const obj = {
            stats_already: result[1],
            stats_complete: 0,
        };
        result[0].forEach((item) => {
            item.learnState === 4 && obj.stats_complete++;
        });
        return [obj];
    }
};
CourseStatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_stats_entity_1.CourseStats)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseStatsService);
exports.CourseStatsService = CourseStatsService;
//# sourceMappingURL=course-stats.service.js.map