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
exports.StudentsMarkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_mark_entity_1 = require("./student-mark.entity");
const students_exam_result_service_1 = require("../students-exam-result/students-exam-result.service");
const exam_service_1 = require("../exam/exam.service");
const paper_exam_service_1 = require("../paper-exam/paper-exam.service");
const testBank_service_1 = require("../testBank/testBank.service");
const students_exam_result_entity_1 = require("../students-exam-result/students-exam-result.entity");
let StudentsMarkService = class StudentsMarkService {
    constructor(studentsMarkRepository, studentsExamResultService, examService, paperExamService, testBankService) {
        this.studentsMarkRepository = studentsMarkRepository;
        this.studentsExamResultService = studentsExamResultService;
        this.examService = examService;
        this.paperExamService = paperExamService;
        this.testBankService = testBankService;
    }
    async create(body) {
        console.log(body);
        const { studentId, examId, examName, startTime, endTime, questionsData, examination, } = body;
        let grade;
        let isPass;
        let accuracy = 0;
        let accuracyNum = 0;
        const data = [];
        let multiChoiceFlag = false;
        const exam = await this.examService.getExamById(examId);
        console.log(exam);
        const questionConfigList = exam.questionConfigs;
        for (let i = 0; i < questionConfigList.length; i++) {
            if (questionConfigList[i].id === 2) {
                multiChoiceFlag = true;
            }
        }
        const paper = await this.paperExamService.generatorPaper(exam.paperExam.id);
        if (questionsData.length === 0) {
            grade = 0;
            isPass = 'no';
        }
        else {
            let testGrade = 0;
            for (let i = 0; i < questionsData.length; i++) {
                console.log(questionsData[i]);
                const testBank = await this.testBankService.getOne(questionsData[i].id);
                console.log(testBank);
                let answer;
                let score;
                let testIsPass;
                if (testBank.questionTypes === '判断题') {
                    answer =
                        questionsData[i].str === 'A'
                            ? '对'
                            : questionsData[i].str === 'B'
                                ? '错'
                                : '';
                    if (answer === testBank.okanswer) {
                        score = testBank.gradeNum;
                        accuracyNum++;
                        testIsPass = 'yes';
                    }
                    else {
                        score = 0;
                        testIsPass = 'no';
                    }
                }
                if (testBank.questionTypes === '单选题') {
                    answer = questionsData[i].str;
                    if (answer === testBank.okanswer) {
                        score = testBank.gradeNum;
                        accuracyNum++;
                        testIsPass = 'yes';
                    }
                    else {
                        score = 0;
                        testIsPass = 'no';
                    }
                }
                if (testBank.questionTypes === '多选题') {
                    console.log('多选题');
                    let newStr = '';
                    questionsData[i].optionsList
                        .sort((a, b) => a.str.charCodeAt(0) - b.str.charCodeAt(0))
                        .forEach((item) => {
                        newStr += item.str;
                    });
                    if (multiChoiceFlag) {
                        let flag = false;
                        for (let j = 0; j < newStr.length; j++) {
                            flag = testBank.okanswer.indexOf(newStr[j]) !== -1;
                        }
                        if (flag) {
                            if (exam.getScoreConfig.getScoreId === 1) {
                                console.log(exam.getScoreConfig.getScoreRequire);
                                const oneScore = testBank.gradeNum / testBank.okanswer.length;
                                score = oneScore * newStr.length;
                                if (testBank.gradeNum === score) {
                                    accuracyNum++;
                                    testIsPass = 'yes';
                                }
                                else {
                                    testIsPass = 'no';
                                }
                            }
                            if (exam.getScoreConfig.getScoreId === 2) {
                                console.log(exam.getScoreConfig.getScoreRequire);
                                score =
                                    testBank.gradeNum *
                                        (exam.examConfig.regressionGetResultAccount / 100);
                                testIsPass = 'no';
                                if (newStr === testBank.okanswer) {
                                    score = testBank.gradeNum;
                                    accuracyNum++;
                                    testIsPass = 'yes';
                                }
                            }
                        }
                        else {
                            score = 0;
                            testIsPass = 'no';
                        }
                    }
                    else {
                        if (newStr === testBank.okanswer) {
                            score = testBank.gradeNum;
                            accuracyNum++;
                            testIsPass = 'yes';
                        }
                        else {
                            score = 0;
                            testIsPass = 'no';
                        }
                    }
                    answer = newStr;
                }
                if (testBank.questionTypes === '填空题') {
                    console.log('填空题');
                    const gapScore = testBank.gradeNum / questionsData[i].gapList.length;
                    let gapScoreSum = 0;
                    let newStr = '';
                    questionsData[i].gapList.forEach((item) => {
                        const itemStr = item.str.replace(/\s*/g, '').toLowerCase();
                        newStr += '|' + itemStr;
                        const gapStr = testBank.okanswer
                            .replace(/\s*/g, '')
                            .toLowerCase()
                            .split('|')[item.gapIndex];
                        if (gapStr.indexOf('&') !== -1) {
                            if (gapStr.split('&').some((child) => child === itemStr)) {
                                gapScoreSum += gapScore;
                            }
                        }
                        else {
                            if (itemStr === gapStr) {
                                gapScoreSum += gapScore;
                            }
                        }
                    });
                    if (gapScoreSum === testBank.gradeNum) {
                        accuracyNum++;
                        testIsPass = 'yes';
                    }
                    else {
                        testIsPass = 'no';
                    }
                    answer = newStr.slice(1);
                    score = gapScoreSum;
                }
                if (testBank.questionTypes === '问答题') {
                    console.log('问答题');
                    const essayStr = questionsData[i].str;
                    if (testBank.testQuestions && testBank.testQuestions.length !== 0) {
                        let essayScore = 0;
                        testBank.testQuestions.forEach((item) => {
                            if (essayStr.indexOf(item.score) !== -1) {
                                essayScore +=
                                    testBank.gradeNum * (parseInt(item.scoreRatio) / 100);
                            }
                        });
                        if (essayScore === testBank.gradeNum) {
                            accuracyNum++;
                            testIsPass = 'yes';
                        }
                        else {
                            testIsPass = 'no';
                        }
                        score = essayScore;
                    }
                    else {
                        score = 0;
                        testIsPass = 'artificial';
                    }
                    answer = essayStr;
                }
                testGrade += score;
                data.push({
                    studentId,
                    examId,
                    testBankId: testBank.id + '',
                    optional: answer,
                    standardAnswer: testBank.okanswer,
                    studentScore: score + '',
                    testScores: testBank.gradeNum + '',
                    isPass: testIsPass,
                });
            }
            accuracy = Math.round((accuracyNum / paper.questionCount) * 100);
            grade = testGrade;
            if (grade < exam.examConfig.passingGrade) {
                isPass = 'no';
            }
            else {
                isPass = 'yes';
            }
        }
        const res = this.studentsMarkRepository.create({
            studentId,
            examId,
            examName,
            startTime,
            endTime,
            grade: grade + '',
            isPass,
            examination,
            accuracy: accuracy + '',
        });
        const studentsMarkResult = await this.studentsMarkRepository.save(res);
        for (let i = 0; i < data.length; i++) {
            data[i].studentsExamResultItem = studentsMarkResult.id;
        }
        const studentsExamResults = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .insert()
            .into(students_exam_result_entity_1.StudentsExamResult)
            .values(data)
            .execute();
        if (studentsMarkResult && studentsExamResults) {
            return {
                msg: '添加成功',
                state: true,
                id: studentsMarkResult.id,
            };
        }
        return {
            msg: '添加失败',
            state: false,
        };
    }
    async getStudentMarkById(query) {
        const { studentId, examId } = query;
        return this.studentsMarkRepository
            .createQueryBuilder('students_mark')
            .where('students_mark.studentId=:studentId', { studentId })
            .andWhere('students_mark.examId=:examId', { examId })
            .getManyAndCount();
    }
    async findOneStudentMarkById(query) {
        const { id, studentId, examId } = query;
        return this.studentsMarkRepository
            .createQueryBuilder('students_mark')
            .where('students_mark.id=:id', { id })
            .andWhere('students_mark.studentId=:studentId', { studentId })
            .andWhere('students_mark.examId=:examId', { examId })
            .getOne();
    }
};
StudentsMarkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_mark_entity_1.StudentsMark)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        students_exam_result_service_1.StudentsExamResultService,
        exam_service_1.ExamService,
        paper_exam_service_1.PaperExamService,
        testBank_service_1.TestBankService])
], StudentsMarkService);
exports.StudentsMarkService = StudentsMarkService;
//# sourceMappingURL=student-mark.service.js.map