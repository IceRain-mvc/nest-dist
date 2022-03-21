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
exports.AnalyseGradeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const analyse_grade_entity_1 = require("./analyse-grade.entity");
const exam_service_1 = require("../exam/exam.service");
const student_mark_entity_1 = require("../student-mark/student-mark.entity");
const testBank_entity_1 = require("../testBank/testBank.entity");
const exam_entity_1 = require("../exam/exam.entity");
var DateSelect;
(function (DateSelect) {
    DateSelect[DateSelect["exam_config.startDateTime > :date"] = 0] = "exam_config.startDateTime > :date";
    DateSelect[DateSelect[":date BETWEEN exam_config.startDateTime AND exam_config.endDateTime"] = 1] = ":date BETWEEN exam_config.startDateTime AND exam_config.endDateTime";
    DateSelect[DateSelect["exam_config.endDateTime < :date"] = 2] = "exam_config.endDateTime < :date";
    DateSelect[DateSelect["(exam_config.startDateTime > :date OR :date BETWEEN exam_config.startDateTime AND exam_config.endDateTime OR exam_config.endDateTime < :date)"] = 3] = "(exam_config.startDateTime > :date OR :date BETWEEN exam_config.startDateTime AND exam_config.endDateTime OR exam_config.endDateTime < :date)";
})(DateSelect || (DateSelect = {}));
const dataSearch = [
    'exam.createAt',
    'exam.createAt',
    'exam.examTitle',
    'exam.examTitle',
    'exam_config.startDateTime',
    'exam_config.startDateTime',
];
let AnalyseGradeService = class AnalyseGradeService {
    constructor(analyseGradeRepository, examService) {
        this.analyseGradeRepository = analyseGradeRepository;
        this.examService = examService;
    }
    async create(body) {
        const res = this.analyseGradeRepository.create(Object.assign({}, body));
        const result = await this.analyseGradeRepository.save(res);
        return result;
    }
    async getExamLists(parmas) {
        try {
            const res = await this.examService.getExamList(parmas);
            return res;
        }
        catch (_a) {
            throw new common_1.HttpException('数据获取失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getStudentExamList(parmas) {
        var e_1, _a;
        const examRes = await this.getExamList(parmas);
        const newData = JSON.parse(JSON.stringify(examRes[0]));
        const len = JSON.parse(JSON.stringify(examRes[1]));
        let index = 0;
        try {
            for (var newData_1 = __asyncValues(newData), newData_1_1; newData_1_1 = await newData_1.next(), !newData_1_1.done;) {
                const item = newData_1_1.value;
                const answerNumber = await (0, typeorm_2.getRepository)(student_mark_entity_1.StudentsMark)
                    .createQueryBuilder()
                    .where('examId=:id', { id: item.examId })
                    .getCount();
                newData[index].answerNumber = answerNumber;
                const detailScoreData = await (0, typeorm_2.getRepository)(student_mark_entity_1.StudentsMark)
                    .createQueryBuilder()
                    .leftJoinAndSelect('StudentsMark.studentsExamResultList', 'StudentsExamResult')
                    .where('examId=:id', { id: item.examId })
                    .getRawMany();
                const rightDate = [];
                const errorDate = [];
                let correct = 0;
                let error = 0;
                const scoreTest = [];
                for (let i = 0; i < detailScoreData.length; i++) {
                    const objective = await (0, typeorm_2.getRepository)(testBank_entity_1.TestBank)
                        .createQueryBuilder()
                        .where('TestBank.id=:id', {
                        id: detailScoreData[i].StudentsExamResult_testBankId,
                    })
                        .getOne();
                    if (detailScoreData[i].StudentsMark_isPass === 'yes') {
                        correct += 1;
                        rightDate.push(objective);
                    }
                    else if (detailScoreData[i].StudentsMark_isPass === 'no') {
                        error += 1;
                        errorDate.push(objective);
                    }
                    if (detailScoreData[i].StudentsExamResult_studentScore >
                        detailScoreData[i].StudentsExamResult_testScores * 0.8) {
                        scoreTest.push(objective);
                    }
                }
                newData[index].rightProbability = isNaN(correct / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (correct / ((correct + error) * 0.01)).toFixed(1) + '%';
                newData[index].errorProbability = isNaN(error / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (error / ((correct + error) * 0.01)).toFixed(1) + '%';
                let objectiveCorrect = 0;
                let subjectiveCorrect = 0;
                for (let i = 0; i < rightDate.length; i++) {
                    const type = rightDate[i].questionTypes;
                    if (type === '单选题' || type === '多选题' || type === '判断题') {
                        objectiveCorrect += 1;
                    }
                    else {
                        subjectiveCorrect += 1;
                    }
                }
                let objectiveError = 0;
                let subjectiveError = 0;
                for (let i = 0; i < errorDate.length; i++) {
                    const type = errorDate[i].questionTypes;
                    if (type === '单选题' || type === '多选题' || type === '判断题') {
                        objectiveError += 1;
                    }
                    else {
                        subjectiveError += 1;
                    }
                }
                newData[index].objectiveRightProbability = isNaN(objectiveCorrect / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (objectiveCorrect / ((correct + error) * 0.01)).toFixed(1) + '%';
                newData[index].subjectiveRightProbability = isNaN(subjectiveCorrect / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (subjectiveCorrect / ((correct + error) * 0.01)).toFixed(1) + '%';
                newData[index].objectiveErrorProbability = isNaN(objectiveError / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (objectiveError / ((correct + error) * 0.01)).toFixed(1) + '%';
                newData[index].subjectiveErrorProbability = isNaN(subjectiveError / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (subjectiveError / ((correct + error) * 0.01)).toFixed(1) + '%';
                newData[index].scoringProbability = isNaN(scoreTest.length / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (scoreTest.length / ((correct + error) * 0.01)).toFixed(1) + '%';
                let objectiveScoring = 0;
                let subjectiveScoring = 0;
                for (let i = 0; i < scoreTest.length; i++) {
                    const type = scoreTest[i].questionTypes;
                    if (type === '单选题' || type === '多选题' || type === '判断题') {
                        objectiveScoring += 1;
                    }
                    else {
                        subjectiveScoring += 1;
                    }
                }
                newData[index].objectiveScoringProbability = isNaN(objectiveScoring / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (objectiveScoring / ((correct + error) * 0.01)).toFixed(1) + '%';
                newData[index].subjectiveScoringProbability = isNaN(subjectiveScoring / ((correct + error) * 0.01))
                    ? '0.0%'
                    : (subjectiveScoring / ((correct + error) * 0.01)).toFixed(1) + '%';
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
        try {
            return [newData, len];
        }
        catch (_b) {
            throw new common_1.HttpException('数据未获取', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getExamList(query) {
        const { isDelete = 0, dateState = 3, star = null, page = 1, count = 10, sort = 0, treeList = [], startTime = '', endTime = '', search = '', } = query;
        if (page <= 0) {
            return [[], 0];
        }
        const descOrAsc = sort % 2 === 0 ? 'DESC' : 'ASC';
        const examList = await (0, typeorm_2.getRepository)(exam_entity_1.Exam)
            .createQueryBuilder('exam')
            .leftJoin('exam.examConfig', 'exam_config')
            .leftJoin('exam.treePerson', 'tree_person')
            .leftJoin('exam.participationWay', 'participation_way')
            .leftJoin('exam.paperExam', 'paper_exam')
            .select([
            'exam.examId',
            'exam.examTitle',
            'exam_config',
            'tree_person',
            'exam.createAt',
            'exam.isPublish',
            'exam.star',
            'exam.isDelete',
            'exam.qrCode',
            'participation_way.partTitle',
            'exam.deleteTime',
            'paper_exam',
        ])
            .where(DateSelect[dateState], {
            date: new Date(),
        })
            .andWhere('exam.isDelete = :isDelete', { isDelete: isDelete })
            .andWhere(star ? 'exam.star = :star' : 'exam.isDelete = :isDelete', {
            star,
            isDelete,
        })
            .andWhere(treeList.length > 0
            ? 'tree_person.id IN (' + treeList.join(',') + ')'
            : 'exam.isDelete = :isDelete', {
            treeList,
            isDelete,
        })
            .andWhere(search !== ''
            ? 'exam.examTitle LIKE :search OR exam.examInstructions LIKE :search'
            : 'exam.isDelete = :isDelete', {
            search: '%' + search + '%',
            isDelete,
        })
            .andWhere(startTime !== ''
            ? 'exam.createAt >= :startTime'
            : 'exam.isDelete = :isDelete', {
            startTime,
            isDelete,
        })
            .andWhere(endTime !== ''
            ? 'exam.createAt <= :endTime'
            : 'exam.isDelete = :isDelete', {
            endTime,
            isDelete,
        })
            .orderBy(dataSearch[sort], descOrAsc)
            .skip((page - 1) * count)
            .take(count)
            .getManyAndCount();
        return examList;
    }
};
AnalyseGradeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analyse_grade_entity_1.AnalyseGrade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        exam_service_1.ExamService])
], AnalyseGradeService);
exports.AnalyseGradeService = AnalyseGradeService;
//# sourceMappingURL=analyse-grade.service.js.map