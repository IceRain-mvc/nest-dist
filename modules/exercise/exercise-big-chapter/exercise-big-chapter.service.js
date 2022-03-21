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
var ExerciseBigChapterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseBigChapterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exercise_big_chapter_entity_1 = require("./exercise-big-chapter.entity");
const typeorm_2 = require("typeorm");
const exercise_each_chapter_service_1 = require("../exercise-each-chapter/exercise-each-chapter.service");
const testBank_entity_1 = require("../../testBank/testBank.entity");
const testBank_service_1 = require("../../testBank/testBank.service");
const paper_exam_entity_1 = require("../../paper-exam/paper-exam.entity");
const paper_exam_service_1 = require("../../paper-exam/paper-exam.service");
let ExerciseBigChapterService = ExerciseBigChapterService_1 = class ExerciseBigChapterService {
    constructor(exerciseEachChapterService, testBankService, exerciseBigChapterService) {
        this.exerciseEachChapterService = exerciseEachChapterService;
        this.testBankService = testBankService;
        this.exerciseBigChapterService = exerciseBigChapterService;
    }
    async getQuestionsById(id) {
        const res = await this.exerciseBigChapterService
            .createQueryBuilder('ExerBigChapter')
            .leftJoin('ExerBigChapter.testBanks', 'test_bank')
            .select(['ExerBigChapter', 'test_bank'])
            .where('ExerBigChapter.id = :id', { id })
            .getOne();
        const list = res.testBanks.sort((a, b) => {
            return a.myanswer - b.myanswer;
        });
        const options = [];
        for (let i = 0; i < list.length; i++) {
            const option = await this.testBankService.getOne(list[i].id);
            option.myanswer = (i + 1).toString();
            options.push(option);
        }
        res.testBanks = options;
        return res;
    }
    async create(body) {
        const { paperId, sortId = null } = body;
        const counts = await this.exerciseBigChapterService
            .createQueryBuilder('ExerBigChapter')
            .leftJoinAndSelect('ExerBigChapter.paperExam', 'paper_exam')
            .where('paper_exam.id = :id', { id: paperId })
            .orderBy('ExerBigChapter.sortId', 'DESC')
            .getMany();
        const manager = await (0, typeorm_2.getManager)();
        const res = await this.exerciseBigChapterService.create({
            title: '第' + (counts.length === 0 ? 1 : counts[0].sortId + 1) + '大题',
            sortId: sortId || (counts.length === 0 ? 1 : counts[0].sortId + 1),
        });
        const ques = await this.exerciseBigChapterService.save(res);
        const paper = await manager.findOne(paper_exam_entity_1.PaperExam, { id: paperId });
        ques.paperExam = await paper;
        await manager.save(ques);
        return { msg: '练习章节添加成功', data: ques };
    }
    async getAll() {
        return await this.exerciseBigChapterService
            .createQueryBuilder('exercise-big-chapter')
            .getMany();
    }
    async deleteThisChapter(id) {
        console.log(id);
        return await this.exerciseBigChapterService
            .createQueryBuilder()
            .delete()
            .from(exercise_big_chapter_entity_1.ExerBigChapter)
            .where('id = :id', { id })
            .execute();
    }
    async getEachChapter(body) {
        const { id } = body;
        console.log(id);
        const res = await this.exerciseBigChapterService
            .createQueryBuilder('ExerBigChapter')
            .leftJoinAndSelect('ExerBigChapter.eachChapters', 'each-chapter')
            .select(['ExerBigChapter.id', 'each-chapter'])
            .where('ExerBigChapter.id = :id', { id })
            .getOne();
        const strategyList = res.eachChapters;
        console.log(strategyList);
        let allSum = 0;
        for (let i = 0; i < strategyList.length; i++) {
            allSum += strategyList[i].sum;
        }
        return { msg: '查询成功', strategyList };
    }
    async saveBigQuestionTitle(body) {
        const { id, title } = body;
        return await this.exerciseBigChapterService.update(id, { title });
    }
    async saveQuestionInfoBig(body) {
        const { id, select } = body;
        const manager = (0, typeorm_2.getManager)();
        if (!id) {
            return { msg: '大题id不存在，无法存入试题' };
        }
        const questionList = [];
        for (let i = 0; i < select.length; i++) {
            const [question] = await Promise.all([
                await manager.findOne(testBank_entity_1.TestBank, select[i]),
            ]);
            questionList.push(question);
        }
        const bigQuestion = await this.exerciseBigChapterService.findOne(id);
        bigQuestion.testBanks = questionList;
        const res = await manager.save(bigQuestion);
        return res;
    }
    async moveToTop(body) {
        const { paperId, sortId, type } = body;
        const list = await this.exerciseBigChapterService
            .createQueryBuilder('ExerBigChapter')
            .leftJoin('ExerBigChapter.paperExam', 'paper_exam')
            .select(['ExerBigChapter.id', 'ExerBigChapter.sortId'])
            .where('paper_exam.id = :id', { id: paperId })
            .orderBy('ExerBigChapter.sortId', 'ASC')
            .getMany();
        const index = list.findIndex((item) => {
            return item.sortId === sortId;
        });
        console.log(list);
        console.log(index);
        let newSortId = 0;
        if (type === 0) {
            if (index - 1 < 0) {
                return { msg: '已经是最顶了' };
            }
            newSortId = list[index - 1].sortId;
            list[index - 1].sortId = sortId;
            list[index].sortId = newSortId;
        }
        if (type === 1) {
            if (index + 1 > list.length - 1) {
                return { msg: '到底了' };
            }
            newSortId = list[index].sortId;
            list[index].sortId = list[index + 1].sortId;
            list[index + 1].sortId = newSortId;
        }
        await this.exerciseBigChapterService
            .createQueryBuilder()
            .update(exercise_big_chapter_entity_1.ExerBigChapter)
            .set({
            sortId: type === 0 ? list[index - 1].sortId : list[index + 1].sortId,
        })
            .where('id = :id', {
            id: type === 0 ? list[index - 1].id : list[index + 1].id,
        })
            .execute();
        await this.exerciseBigChapterService
            .createQueryBuilder()
            .update(exercise_big_chapter_entity_1.ExerBigChapter)
            .set({ sortId: list[index].sortId })
            .where('id = :id', { id: list[index].id })
            .execute();
        return { msg: '移动成功' };
    }
};
ExerciseBigChapterService = ExerciseBigChapterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => ExerciseBigChapterService_1))),
    __param(2, (0, typeorm_1.InjectRepository)(exercise_big_chapter_entity_1.ExerBigChapter)),
    __metadata("design:paramtypes", [exercise_each_chapter_service_1.ExerciseEachChapterService,
        testBank_service_1.TestBankService,
        typeorm_2.Repository])
], ExerciseBigChapterService);
exports.ExerciseBigChapterService = ExerciseBigChapterService;
//# sourceMappingURL=exercise-big-chapter.service.js.map