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
exports.AnalyseStudentAnalyseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const analyse_student_analyse_entity_1 = require("./analyse-student-analyse.entity");
const students_entity_1 = require("../students/students.entity");
const students_service_1 = require("../students/students.service");
const student_mark_entity_1 = require("../student-mark/student-mark.entity");
const students_course_entity_1 = require("../students-course/students-course.entity");
const course_entity_1 = require("../course/course.entity");
const exam_entity_1 = require("../exam/exam.entity");
const typeorm_2 = require("typeorm");
let AnalyseStudentAnalyseService = class AnalyseStudentAnalyseService {
    constructor(analysestudentanalyse, studentsService) {
        this.analysestudentanalyse = analysestudentanalyse;
        this.studentsService = studentsService;
    }
    async create(body) {
        const res = await this.analysestudentanalyse.create(Object.assign({}, body));
        const data = this.analysestudentanalyse.save(res);
        return { code: '01', msg: '创建成功', data };
    }
    async getStudent(query) {
        var e_1, _a;
        try {
            const res = await this.studentsService.getAll(query);
            const { data } = res;
            const newData = JSON.parse(JSON.stringify(data[0]));
            const length = JSON.parse(JSON.stringify(data[1]));
            let index = 0;
            try {
                for (var newData_1 = __asyncValues(newData), newData_1_1; newData_1_1 = await newData_1.next(), !newData_1_1.done;) {
                    const item = newData_1_1.value;
                    const studunetexam = await (0, typeorm_2.getRepository)(student_mark_entity_1.StudentsMark)
                        .createQueryBuilder()
                        .where('studentId=:id', { id: item.id })
                        .getCount();
                    const throughNumber = await (0, typeorm_2.getRepository)(student_mark_entity_1.StudentsMark)
                        .createQueryBuilder()
                        .where('studentId=:id', { id: item.id })
                        .andWhere('isPass=:ispass', { ispass: 'yes' })
                        .getCount();
                    const participantsNumber = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
                        .createQueryBuilder()
                        .where('studentsId=:id', { id: item.id })
                        .getCount();
                    const courseThroughNumber = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
                        .createQueryBuilder()
                        .where('studentsId=:id', { id: item.id })
                        .andWhere('learnState=:State', { State: 4 })
                        .getCount();
                    newData[index].studunetexam = studunetexam;
                    newData[index].throughNumber = throughNumber;
                    newData[index].passRate = isNaN(throughNumber / (studunetexam * 0.01))
                        ? '0.0%'
                        : (throughNumber / (studunetexam * 0.01)).toFixed(1) + '%';
                    newData[index].participantsNumber = participantsNumber;
                    newData[index].courseThroughNumber = courseThroughNumber;
                    newData[index].coursePassRate = isNaN(courseThroughNumber / (participantsNumber * 0.01))
                        ? '0.0%'
                        : (courseThroughNumber / (participantsNumber * 0.01)).toFixed(1) +
                            '%';
                    index++;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (newData_1_1 && !newData_1_1.done && (_a = newData_1.return)) await _a.call(newData_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return [newData, length];
        }
        catch (_b) {
            throw new common_1.HttpException('数据未获取', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getStudentCourse(query) {
        try {
            const res = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
                .createQueryBuilder('students-course')
                .where('studentsId = :studentsId', { studentsId: query.studentsId })
                .leftJoinAndSelect(course_entity_1.Course, 'course', 'course.courseId = students-course.courseId')
                .getMany();
            return res;
        }
        catch (_a) {
            throw new common_1.HttpException('数据未获取', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getStudentExam(query) {
        try {
            console.log(query);
            const res = await (0, typeorm_2.getRepository)(student_mark_entity_1.StudentsMark)
                .createQueryBuilder()
                .where('studentId=:id', { id: query.studentsId })
                .getMany();
            return res;
        }
        catch (_a) {
            throw new common_1.HttpException('数据未获取', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
AnalyseStudentAnalyseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analyse_student_analyse_entity_1.Analysestudentanalyse)),
    __param(0, (0, typeorm_1.InjectRepository)(students_entity_1.Students)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_service_1.StudentsService])
], AnalyseStudentAnalyseService);
exports.AnalyseStudentAnalyseService = AnalyseStudentAnalyseService;
//# sourceMappingURL=analyse-student-analyse.service.js.map