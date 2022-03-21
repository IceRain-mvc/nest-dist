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
exports.ExaminationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const examination_entity_1 = require("./examination.entity");
const typeorm_2 = require("@nestjs/typeorm");
const exam_service_1 = require("../exam/exam.service");
const student_mark_service_1 = require("../student-mark/student-mark.service");
const students_service_1 = require("../students/students.service");
const student_mark_entity_1 = require("../student-mark/student-mark.entity");
let ExaminationService = class ExaminationService {
    constructor(examineRepository, examService, examMark, examStudent) {
        this.examineRepository = examineRepository;
        this.examService = examService;
        this.examMark = examMark;
        this.examStudent = examStudent;
    }
    async create(examBody) {
        const res = this.examineRepository.create(examBody);
        const list = await this.examineRepository.save(res);
        try {
            return { code: '1', msg: '新增成功', list };
        }
        catch (_a) {
            throw new common_1.HttpException('新增失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getAll(query) {
        const { page = 1, pageSize = 5, time, keyword, idList } = query;
        const start = (page - 1) * pageSize;
        const searchTime = time ? JSON.parse(time) : undefined;
        let res = this.examineRepository
            .createQueryBuilder('Examine')
            .leftJoinAndSelect('Examine.phones', 'question');
        if (keyword) {
            res = res.where('authName like :keyword', {
                keyword: `%${keyword}%`,
            });
        }
        if (searchTime !== undefined) {
            if (searchTime.startTime) {
                res = res.andWhere('Examine.startTime > :start ', {
                    start: new Date(searchTime.startTime),
                });
            }
            if (searchTime.endTime) {
                res = res.andWhere('Examine.endTime < :end  ', {
                    end: new Date(searchTime.endTime),
                });
            }
        }
        res = res.skip(start).take(pageSize);
        const list = await res.getManyAndCount();
        if (idList) {
            const result = [];
            list[0].forEach((item) => {
                for (let i = 0; i < idList.length; i++) {
                    if (idList[i] === item.authName) {
                        result.push(item);
                    }
                }
            });
            return {
                code: '03',
                msg: '部门查询',
                data: [result, result.length],
            };
        }
        try {
            return {
                code: '1',
                msg: '查询成功',
                data: list,
            };
        }
        catch (_a) {
            throw new common_1.HttpException('获取数据失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getExamLists(params) {
        try {
            const res = await this.examService.getExamList(params);
            const list = await this.examStudent.getAll(params);
            if (res && list) {
                return { res, list };
            }
            return '';
        }
        catch (_a) {
            throw new common_1.HttpException('数据获取失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getExamMulti(params) {
        try {
            const res = await this.examMark.getStudentMarkById(params);
            if (res) {
                return res;
            }
            return '';
        }
        catch (_a) {
            throw new common_1.HttpException('数据获取失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getStudentMark(params) {
        var e_1, _a;
        try {
            const res = await this.examService.getExamList(params);
            const list = await this.examStudent.getAll(params);
            const { data } = list;
            const newData = JSON.parse(JSON.stringify(data[0]));
            const result = JSON.parse(JSON.stringify(res[0]));
            const length = JSON.parse(JSON.stringify(data[1]));
            const index = 0;
            try {
                for (var result_1 = __asyncValues(result), result_1_1; result_1_1 = await result_1.next(), !result_1_1.done;) {
                    const item = result_1_1.value;
                    console.log(item, '8888888');
                    const studunetexam = await (0, typeorm_1.getRepository)(student_mark_entity_1.StudentsMark)
                        .createQueryBuilder()
                        .where('examId=:id', { id: item.examId })
                        .getCount();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (result_1_1 && !result_1_1.done && (_a = result_1.return)) await _a.call(result_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        catch (_b) {
            throw new common_1.HttpException('数据未获取', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
ExaminationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(examination_entity_1.Examine)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        exam_service_1.ExamService,
        student_mark_service_1.StudentsMarkService,
        students_service_1.StudentsService])
], ExaminationService);
exports.ExaminationService = ExaminationService;
//# sourceMappingURL=examination.service.js.map