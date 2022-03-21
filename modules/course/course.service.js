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
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_entity_1 = require("./course.entity");
const typeorm_2 = require("typeorm");
const students_entity_1 = require("../students/students.entity");
let CourseService = class CourseService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    async create(body) {
        const { courseObj, courseFree } = body;
        try {
            const res = await this.courseRepository.create(courseObj);
            const resItem = await this.courseRepository.save(res);
            return resItem;
        }
        catch (error) {
            throw new common_1.HttpException({
                message: '请求失败',
                error: '传入参数错误',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getAll(params) {
        const { page = 1, pageSize = 10, order = 'DESC', field = 'createAt', startTime, endTime, searchValue, searchTree, isCourseRecycle, isCourseStar, courseState, } = params;
        const start = (page - 1) * pageSize;
        console.log(page, pageSize, order, field, startTime, endTime, searchValue, searchTree, isCourseRecycle, isCourseStar, courseState);
        const nowTime = new Date().getTime();
        let sqls = this.courseRepository.createQueryBuilder('course');
        if (searchValue !== undefined) {
            sqls = sqls.where('course.courseName like :courseName', {
                courseName: `%${searchValue}%`,
            });
        }
        if (searchTree !== undefined) {
            sqls = sqls.andWhere('course.courseType like :courseType', {
                courseType: `%${searchTree}%`,
            });
        }
        if (isCourseRecycle !== undefined) {
            sqls = sqls.andWhere('course.courseRecycle = :courseRecycle', {
                courseRecycle: isCourseRecycle,
            });
        }
        if (isCourseRecycle === '1') {
            if (courseState === '1') {
                sqls = sqls.andWhere('course.courseStart <= :nowTime and :nowTime <= course.courseEnd', {
                    nowTime,
                });
            }
            else if (courseState === '2') {
                sqls = sqls.andWhere('course.courseStart > :nowTime', {
                    nowTime,
                });
            }
            else if (courseState === '3') {
                sqls = sqls.andWhere('course.courseEnd < :nowTime', {
                    nowTime,
                });
            }
        }
        if (isCourseStar !== undefined) {
            sqls = sqls.andWhere('course.courseStar = :courseStar', {
                courseStar: isCourseStar,
            });
        }
        if (startTime !== '' && startTime !== undefined) {
            sqls = sqls.andWhere('course.create_at > :start', {
                start: startTime,
            });
        }
        if (endTime !== '' && endTime !== undefined) {
            sqls = sqls.andWhere('course.create_at < :end', {
                end: new Date(endTime),
            });
        }
        if (field !== undefined && order !== undefined) {
            sqls = sqls.orderBy(`course.${field}`, order);
        }
        sqls = sqls.skip(start).take(pageSize);
        const res = await sqls.getManyAndCount();
        return res;
    }
    async editStar(id) {
        await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(course_entity_1.Course)
            .set({
            courseStar: 1,
        })
            .where('courseId = :courseId', id)
            .execute();
        return { message: 'success' };
    }
    async addStar(id) {
        await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(course_entity_1.Course)
            .set({
            courseStar: 0,
        })
            .where('courseId = :courseId', id)
            .execute();
        return { message: 'success' };
    }
    async deleteRecycle(id) {
        const deleteTime = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
        await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(course_entity_1.Course)
            .set({
            courseRecycle: 0,
            deleteAt: deleteTime,
        })
            .andWhere('courseId = :courseId', id)
            .execute();
        return { message: 'success' };
    }
    async recoverCourse(id) {
        await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(course_entity_1.Course)
            .set({
            courseRecycle: 1,
        })
            .where('courseId = :courseId', id)
            .execute();
        return { message: 'success' };
    }
    async deleteColumn(id) {
        const { courseId } = id;
        const res1 = await this.courseRepository.query(`select * from course_design where course_design.courseId = '${courseId}'`);
        const res2 = await this.courseRepository.query(`delete from course_learn_choose where course_learn_choose.course_id = '${courseId}'`);
        if (res1.length >= 1) {
            console.log('章节存在');
            for (let i = 0; i < res1.length; i++) {
                this.courseRepository.query(`delete from course_section where course_section.chapterId = ${res1[i].chapterId}`);
            }
            await this.courseRepository.query(`delete from course_design where course_design.courseId = '${courseId}'`);
            await this.courseRepository.query(`delete from course where course.courseId = '${courseId}'`);
        }
        else {
            console.log('无章节');
            await this.courseRepository.query(`delete from course where course.courseId = '${courseId}'`);
        }
        return { message: 'success' };
    }
    async getCourseItem(query) {
        console.log(query);
        try {
            console.log(query.couseId);
            return await this.courseRepository
                .createQueryBuilder('course')
                .where('courseId = :courseId', { courseId: query.courseId })
                .leftJoinAndSelect('course.courseFree', 'course_learn_free')
                .leftJoinAndSelect('course.courseChoose', 'course_learn_choose')
                .getOne();
        }
        catch (err) {
            throw new common_1.HttpException({
                message: '请求失败',
                error: '传入参数错误',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async compileCourse({ courseId, data }) {
        try {
            const res = await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .update(course_entity_1.Course)
                .set(Object.assign({}, data))
                .where('courseId = :courseId', { courseId })
                .execute();
            console.log(res, '4ertert');
            return res;
        }
        catch (err) {
            console.log('服务器错误', err);
            throw new common_1.HttpException({
                message: '请求失败',
                error: '服务器异常',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getBatchStudent(query) {
        const succeedArr = [];
        const failArr = [];
        const { account } = query;
        for (let i = 0; i < account.length; i++) {
            const res = await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .select('students')
                .from(students_entity_1.Students, 'students')
                .where('students.studentNumber = :studentNumber', {
                studentNumber: account[i],
            })
                .getOne();
            if (res) {
                succeedArr.push(res);
            }
            else {
                failArr.push(account[i]);
            }
            if (succeedArr.length + failArr.length >= account.length) {
                return { succeedArr, failArr };
            }
        }
    }
    async getStudentItem(query) {
        console.log(query.data);
        const resArr = [];
        for (let i = 0; i < query.data.length; i++) {
            const res = await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .select('students')
                .from(students_entity_1.Students, 'students')
                .where('students.id = :id', { id: query.data[i] })
                .getOne();
            resArr.push(res);
            if (resArr.length >= query.data.length) {
                return resArr;
            }
        }
    }
    async changeCourseType(body) {
        const { courseId, title } = body;
        const res = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(course_entity_1.Course)
            .set({
            courseType: title,
        })
            .where('courseId = :courseId', { courseId })
            .execute();
        return res;
    }
    async countList() {
        const now = await this.courseRepository
            .createQueryBuilder('course')
            .where('course.courseStart <= :date and :date <= course.courseEnd', {
            date: new Date().getTime(),
        })
            .andWhere('course.courseRecycle = :courseRecycle', { courseRecycle: 1 })
            .getCount();
        const will = await this.courseRepository
            .createQueryBuilder('course')
            .where('course.courseStart > :date', { date: new Date().getTime() })
            .andWhere('course.courseRecycle = :courseRecycle', { courseRecycle: 1 })
            .getCount();
        const finish = await this.courseRepository
            .createQueryBuilder('course')
            .where('course.courseEnd < :date', { date: new Date().getTime() })
            .andWhere('course.courseRecycle = :courseRecycle', { courseRecycle: 1 })
            .getCount();
        return { now, will, finish };
    }
    async autoDelete() {
        const courseRes = await this.courseRepository.query(`select * from course where course.courseRecycle = 0`);
        const recycleRes = courseRes.filter((item) => {
            return new Date(item.delete_at).getTime() - new Date().getTime() < 0;
        });
        recycleRes.forEach(async (item) => {
            const res1 = await this.courseRepository.query(`select * from course_design where course_design.courseId = '${item.courseId}'`);
            const res2 = await this.courseRepository.query(`delete from course_learn_choose where course_learn_choose.course_id = '${item.courseId}'`);
            if (res1.length >= 1) {
                console.log('章节存在');
                for (let i = 0; i < res1.length; i++) {
                    this.courseRepository.query(`delete from course_section where course_section.chapterId = ${res1[i].chapterId}`);
                }
                await this.courseRepository.query(`delete from course_design where course_design.courseId = '${item.courseId}'`);
                await this.courseRepository.query(`delete from course where course.courseId = '${item.courseId}'`);
            }
            else {
                console.log('无章节');
                await this.courseRepository.query(`delete from course where course.courseId = '${item.courseId}'`);
            }
        });
        return { message: 'success' };
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map