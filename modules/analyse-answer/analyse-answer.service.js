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
exports.AnalyseAnswerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const analyse_answer_exam_entity_1 = require("./analyse-answer-exam.entity");
const paper_exam_service_1 = require("../paper-exam/paper-exam.service");
const testBank_service_1 = require("../testBank/testBank.service");
const paper_big_question_entity_1 = require("../paper-big-question/paper-big-question.entity");
const testBank_entity_1 = require("../testBank/testBank.entity");
const student_mark_entity_1 = require("../student-mark/student-mark.entity");
let AnalyseAnswerService = class AnalyseAnswerService {
    constructor(analyseAnswerExamRepository, paperExamService, testBankService) {
        this.analyseAnswerExamRepository = analyseAnswerExamRepository;
        this.paperExamService = paperExamService;
        this.testBankService = testBankService;
    }
    async getPaperSets(query) {
        const { id } = query;
        const res = await this.paperExamService.generatorPaper(id);
        return res;
    }
    async getExamPaper(query) {
        var e_1, _a;
        const { page = 1, pageSize = 10, field, order, al_exam_question_type, al_exam_question_difficulty, al_exam_count, id, examId, } = query;
        console.log(al_exam_question_type, al_exam_question_difficulty, al_exam_count, id);
        const start = (page - 1) * pageSize;
        const manager = await (0, typeorm_2.getManager)();
        const bigQuesList = await this.paperExamService.getPaperBigQuestionId(id);
        const questions = [];
        for (let i = 0; i < bigQuesList.length; i++) {
            const bigId = bigQuesList[i];
            const question = await manager
                .getRepository(paper_big_question_entity_1.PaperBigQuestion)
                .createQueryBuilder('PaperBigQuestion')
                .leftJoinAndSelect('PaperBigQuestion.testBanks', 'test_bank')
                .select(['PaperBigQuestion', 'test_bank'])
                .where('PaperBigQuestion.id = :bigId', { bigId })
                .getOne();
            const options = [];
            const list = question.testBanks;
            for (let i = 0; i < list.length; i++) {
                const option = await this.testBankService.getOne(list[i].id);
                options.push(option);
            }
            if (options.length > 0) {
                questions.push(...options);
            }
        }
        let index = 0;
        try {
            for (var questions_1 = __asyncValues(questions), questions_1_1; questions_1_1 = await questions_1.next(), !questions_1_1.done;) {
                const item = questions_1_1.value;
                const answerNumber = await (0, typeorm_2.getRepository)(student_mark_entity_1.StudentsMark)
                    .createQueryBuilder()
                    .where('examId=:id', { id: examId })
                    .getCount();
                questions[index].answerNumber = answerNumber;
                const detailScoreData = await (0, typeorm_2.getRepository)(student_mark_entity_1.StudentsMark)
                    .createQueryBuilder()
                    .leftJoinAndSelect('StudentsMark.studentsExamResultList', 'StudentsExamResult')
                    .where('examId=:id', { id: examId })
                    .getRawMany();
                const questionItems = [];
                for (let i = 0; i < detailScoreData.length; i++) {
                    if (detailScoreData[i].StudentsExamResult_testBankId === item.id) {
                        questionItems.push(detailScoreData[i]);
                    }
                }
                let rightNumber = 0;
                let errorNumber = 0;
                let scoreNumber = 0;
                for (let i = 0; i < questionItems.length; i++) {
                    if (questionItems[i].StudentsMark_isPass === 'yes') {
                        rightNumber += 1;
                    }
                    else if (questionItems[i].StudentsMark_isPass === 'no') {
                        errorNumber += 1;
                    }
                    if (questionItems[i].StudentsExamResult_studentScore >
                        questionItems[i].StudentsExamResult_testScores * 0.8) {
                        scoreNumber += 1;
                    }
                }
                questions[index].errorNumber = errorNumber;
                questions[index].errorProbability = isNaN(errorNumber / ((rightNumber + errorNumber) * 0.01))
                    ? '0.0%'
                    : (errorNumber / ((rightNumber + errorNumber) * 0.01)).toFixed(1) + '%';
                questions[index].rightNumber = rightNumber;
                questions[index].rightProbability = isNaN(rightNumber / ((rightNumber + errorNumber) * 0.01))
                    ? '0.0%'
                    : (rightNumber / ((rightNumber + errorNumber) * 0.01)).toFixed(1) + '%';
                questions[index].scoringProbability = isNaN(scoreNumber / ((rightNumber + errorNumber) * 0.01))
                    ? '0.0%'
                    : (scoreNumber / ((rightNumber + errorNumber) * 0.01)).toFixed(1) + '%';
                index++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (questions_1_1 && !questions_1_1.done && (_a = questions_1.return)) await _a.call(questions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        await manager
            .createQueryBuilder()
            .delete()
            .from(analyse_answer_exam_entity_1.AnalyseAnswerExam)
            .execute();
        for (let i = 0; i < questions.length; i++) {
            await Promise.all([
                manager.getRepository(analyse_answer_exam_entity_1.AnalyseAnswerExam).save({
                    questionTypes: questions[i].questionTypes,
                    examContent: questions[i].examContent,
                    testTreePersonTitle: questions[i].treePerson.title,
                    difficultyLevel: questions[i].difficultyLevel,
                    okanswer: questions[i].okanswer,
                    answerNumber: questions[i].answerNumber,
                    errorNumber: questions[i].errorNumber,
                    errorProbability: questions[i].errorProbability,
                    rightNumber: questions[i].rightNumber,
                    rightProbability: questions[i].rightProbability,
                    scoringProbability: questions[i].scoringProbability,
                }),
            ]);
        }
        let sql = this.analyseAnswerExamRepository.createQueryBuilder('AnalyseAnswerExam');
        if (al_exam_count !== undefined) {
            console.log(al_exam_count);
            sql = sql.andWhere(new typeorm_2.Brackets((qbs) => {
                qbs.where('AnalyseAnswerExam.examContent like :examContent', {
                    examContent: `%${al_exam_count}%`,
                });
            }));
        }
        if (al_exam_question_difficulty !== undefined) {
            console.log(al_exam_question_difficulty);
            sql = sql.andWhere(new typeorm_2.Brackets((qbs) => {
                qbs.where('AnalyseAnswerExam.difficultyLevel like :difficultyLevel', {
                    difficultyLevel: `%${al_exam_question_difficulty}%`,
                });
            }));
        }
        if (al_exam_question_type !== undefined) {
            console.log(al_exam_question_type);
            sql = sql.andWhere(new typeorm_2.Brackets((qbs) => {
                qbs.where('AnalyseAnswerExam.questionTypes like :questionTypes', {
                    questionTypes: `%${al_exam_question_type}%`,
                });
            }));
        }
        if (field && order) {
            sql = sql.orderBy(`AnalyseAnswerExam.${field}`, order);
        }
        sql = sql.skip(start).take(pageSize);
        const res = await sql.getManyAndCount();
        try {
            return res && res;
        }
        catch (_b) {
            throw new common_1.HttpException('查询失败,当前考试没有试题', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
AnalyseAnswerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analyse_answer_exam_entity_1.AnalyseAnswerExam)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        paper_exam_service_1.PaperExamService,
        testBank_service_1.TestBankService])
], AnalyseAnswerService);
exports.AnalyseAnswerService = AnalyseAnswerService;
//# sourceMappingURL=analyse-answer.service.js.map