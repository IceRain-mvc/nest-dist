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
exports.PaperExamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paper_exam_entity_1 = require("./paper-exam.entity");
const typeorm_2 = require("typeorm");
const exam_entity_1 = require("../exam/exam.entity");
const paper_big_question_service_1 = require("../paper-big-question/paper-big-question.service");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
const exercise_big_chapter_service_1 = require("../exercise/exercise-big-chapter/exercise-big-chapter.service");
let PaperExamService = class PaperExamService {
    constructor(paperExamRepository, paperBigQuestionService, exerciseBigChapterService) {
        this.paperExamRepository = paperExamRepository;
        this.paperBigQuestionService = paperBigQuestionService;
        this.exerciseBigChapterService = exerciseBigChapterService;
    }
    async create(body) {
        const { examId, paperType, paperTitle, questionCount = 0, fullMarks = 0, } = body;
        const manager = await (0, typeorm_2.getManager)();
        const paper = await this.paperExamRepository.create({
            paperType,
            paperTitle,
            questionCount,
            fullMarks,
        });
        const exam = await manager.findOne(exam_entity_1.Exam, { examId });
        paper.exam = await exam;
        exam.paperExam = await paper;
        await manager.save(paper);
        await manager.save(exam);
        return { msg: '试卷创建成功', paperId: paper.id };
    }
    async createTest(body) {
        const { exerciseId, paperType, paperTitle, questionCount = 0, fullMarks = 0, } = body;
        const manager = await (0, typeorm_2.getManager)();
        const paper = await this.paperExamRepository.create({
            paperType,
            paperTitle,
            questionCount,
            fullMarks,
        });
        const exercise = await manager.findOne(exercise_entity_1.Exercise, { exerciseId });
        paper.exercise = await exercise;
        exercise.paperExam = await paper;
        await manager.save(paper);
        await manager.save(exercise);
        return { msg: '试卷创建成功', paperId: paper.id };
    }
    async createExercise(body) {
        const { exerciseId, paperType, paperTitle, questionCount = 0, fullMarks = 0, } = body;
        const manager = await (0, typeorm_2.getManager)();
        const paper = await this.paperExamRepository.create({
            paperType,
            paperTitle,
            questionCount,
            fullMarks,
        });
        const exercise = await manager.findOne(exercise_entity_1.Exercise, { exerciseId });
        paper.exercise = await exercise;
        exercise.paperExam = await paper;
        await manager.save(paper);
        await manager.save(exercise);
        return { msg: '试卷创建成功', paperId: paper.id };
    }
    async getPaperMessage(id) {
        const res = await this.paperExamRepository
            .createQueryBuilder('PaperExam')
            .leftJoinAndSelect('PaperExam.paperBigQuestions', 'paper_big_question')
            .where('PaperExam.id = :id', { id })
            .orderBy('paper_big_question.id', 'ASC')
            .getMany();
        const list = res[0].paperBigQuestions;
        const paperSet = {
            questionCount: 0,
            fullMarks: 0,
        };
        paperSet.questionCount = list.reduce((prev, next) => {
            prev = prev + next.count;
            return prev;
        }, paperSet.questionCount);
        paperSet.fullMarks = list.reduce((prev, next) => {
            prev = prev + next.allScore;
            return prev;
        }, paperSet.fullMarks);
        await this.paperExamRepository
            .createQueryBuilder()
            .update(paper_exam_entity_1.PaperExam)
            .set(Object.assign({}, paperSet))
            .where('id = :id', { id })
            .execute();
        const result = await this.paperExamRepository
            .createQueryBuilder('PaperExam')
            .leftJoinAndSelect('PaperExam.paperBigQuestions', 'paper_big_question')
            .where('PaperExam.id = :id', { id })
            .getMany();
        const message = await this.paperBigQuestionService.findStrategy(result[0]);
        return [message];
    }
    async getPaperBigQuestionId(paperId) {
        const result = await this.paperExamRepository
            .createQueryBuilder('PaperExam')
            .leftJoinAndSelect('PaperExam.paperBigQuestions', 'paper_big_question')
            .select(['PaperExam.id', 'paper_big_question.id'])
            .where('PaperExam.id = :paperId', { paperId })
            .getOne();
        const quesList = result.paperBigQuestions;
        const msg = quesList.map((item) => {
            return item.id;
        });
        return msg;
    }
    async getChapterBigQuestionId(ChapterId) {
        const result = await this.paperExamRepository
            .createQueryBuilder('PaperExam')
            .leftJoinAndSelect('PaperExam.exerBigChapters', 'exer-big-chapter')
            .select(['PaperExam.id', 'exer-big-chapter.id'])
            .where('PaperExam.id = :ChapterId', { ChapterId })
            .getOne();
        const quesList = result.exerBigChapters;
        const msg = quesList.map((item) => {
            return item.id;
        });
        return msg;
    }
    async generatorPaper(paperId) {
        const paper = await this.paperExamRepository.findOne(paperId);
        const bigQuesList = await this.getPaperBigQuestionId(paperId);
        const questions = [];
        for (let i = 0; i < bigQuesList.length; i++) {
            const question = await this.paperBigQuestionService.getQuestionsById(bigQuesList[i]);
            questions.push(question);
        }
        paper.paperBigQuestions = questions.sort((a, b) => {
            return a.sortId - b.sortId;
        });
        return paper;
    }
    async generatorChapter(paperId) {
        const paper = await this.paperExamRepository.findOne(paperId);
        const bigQuesList = await this.getChapterBigQuestionId(paperId);
        const questions = [];
        for (let i = 0; i < bigQuesList.length; i++) {
            const question = await this.exerciseBigChapterService.getQuestionsById(bigQuesList[i]);
            questions.push(question);
        }
        paper.exerBigChapters = questions.sort((a, b) => {
            return a.sortId - b.sortId;
        });
        return paper;
    }
    async updatePaperScoreAndCount(id) {
        const res = await this.paperExamRepository
            .createQueryBuilder('PaperExam')
            .leftJoinAndSelect('PaperExam.paperBigQuestions', 'paper_big_question')
            .select([
            'PaperExam.id',
            'paper_big_question.allScore',
            'paper_big_question.count',
        ])
            .where('PaperExam.id = :id', { id })
            .getOne();
        const bigQuestionList = res.paperBigQuestions;
        const fullMarks = bigQuestionList.reduce((prev, next) => {
            prev += next.allScore;
            return prev;
        }, 0);
        const questionCount = bigQuestionList.reduce((prev, next) => {
            prev += next.count;
            return prev;
        }, 0);
        const result = await this.paperExamRepository.update(id, {
            fullMarks,
            questionCount,
        });
        return { msg: '分数和题数更新成功', result };
    }
    async generateExam(id) {
        const paper = await this.paperExamRepository.findOne(id);
        let count = 0;
        const quesList = await this.getPaperBigQuestionId(id);
        for (let i = 0; i < quesList.length; i++) {
            const res = await this.paperBigQuestionService.getQuestionsById(quesList[i]);
            count += res.testBanks.length;
        }
        if (paper.questionCount === count) {
            return { code: 1, msg: '随机试卷生成成功' };
        }
        return await this.paperBigQuestionService.getStrategyQuestion(quesList);
    }
    async generatorStrategyExam(id) {
        const paper = await this.paperExamRepository.findOne(id);
        let count = 0;
        const quesList = await this.getPaperBigQuestionId(id);
        for (let i = 0; i < quesList.length; i++) {
            const res = await this.paperBigQuestionService.getQuestionsById(quesList[i]);
            count += res.testBanks.length;
        }
        if (paper.questionCount === count) {
            return { code: 1, msg: '随机试卷生成成功' };
        }
        return await this.paperBigQuestionService.getStrategyRandomQuestionById(quesList);
    }
    async getBigQuestion(id) {
        const res = await this.paperExamRepository.findOne(id);
        return res;
    }
    async strategyCount(id) {
        const result = await this.paperExamRepository
            .createQueryBuilder('PaperExam')
            .select(['PaperExam.questionCount'])
            .where('PaperExam.id=:id', { id })
            .getOne();
        return result;
    }
    async exerciseCount(id) {
        const result = await this.paperExamRepository
            .createQueryBuilder('PaperExam')
            .select(['PaperExam.questionCount'])
            .where('PaperExam.id=:id', { id })
            .getOne();
        return result;
    }
    async saveAllQuestion(body) {
        const { id, questionCount } = body;
        return await this.paperExamRepository.update(id, { questionCount });
    }
};
PaperExamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paper_exam_entity_1.PaperExam)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => paper_big_question_service_1.PaperBigQuestionService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => exercise_big_chapter_service_1.ExerciseBigChapterService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        paper_big_question_service_1.PaperBigQuestionService,
        exercise_big_chapter_service_1.ExerciseBigChapterService])
], PaperExamService);
exports.PaperExamService = PaperExamService;
//# sourceMappingURL=paper-exam.service.js.map