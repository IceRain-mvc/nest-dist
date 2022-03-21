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
exports.ExerciseEachChapterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exercise_each_chapter_entity_1 = require("./exercise-each-chapter.entity");
const exercise_big_chapter_entity_1 = require("../exercise-big-chapter/exercise-big-chapter.entity");
const testBank_entity_1 = require("../../testBank/testBank.entity");
const typeorm_2 = require("typeorm");
let ExerciseEachChapterService = class ExerciseEachChapterService {
    constructor(exerciseBigChapterService) {
        this.exerciseBigChapterService = exerciseBigChapterService;
    }
    async create(body) {
        console.log(body);
        const { id, key = null, name = undefined, sum } = body;
        const manager = (0, typeorm_2.getManager)();
        const rusult = await this.exerciseBigChapterService
            .createQueryBuilder('EachChapter')
            .leftJoinAndSelect('EachChapter.exerBigChapter', 'exercise-big-chapter')
            .select(['EachChapter', 'exercise-big-chapter'])
            .where('exercise-big-chapter.id = :id', { id })
            .orderBy('EachChapter.id', 'DESC')
            .getMany();
        const res = await this.exerciseBigChapterService.create({
            key: key || rusult.length === 0 ? 1 : rusult[0].key + 1,
            name,
            sum,
        });
        const results = await this.exerciseBigChapterService.save(res);
        const exercideBigChaoter = await manager.findOne(exercise_big_chapter_entity_1.ExerBigChapter, { id });
        results.exerBigChapter = await exercideBigChaoter;
        await manager.save(results);
        return { msg: '添加章节成功', data: results.id };
    }
    async getSimulationQuestions(id) {
        const result = await this.exerciseBigChapterService
            .createQueryBuilder('EachChapter')
            .where('EachChapter.id = :id', { id })
            .getMany();
        return result;
    }
    async deleteThisStrategy(id) {
        return await this.exerciseBigChapterService
            .createQueryBuilder()
            .delete()
            .from(exercise_each_chapter_entity_1.EachChapter)
            .where('id = :id', { id })
            .execute();
    }
    async updateSingleScore(body) {
        const { eachchapterId, name } = body;
        const res = await this.exerciseBigChapterService.update(eachchapterId, {
            name,
        });
        return res;
    }
    async getStrategyQuestionList(id) {
        const result = await this.exerciseBigChapterService
            .createQueryBuilder('TestBank')
            .leftJoinAndSelect('TestBank.testBanks', 'test_bank')
            .select(['TestBank.id', 'test_bank'])
            .where('TestBank.id = :id', { id })
            .getOne();
        this.exerciseBigChapterService.update(id, { sum: result.testBanks.length });
        return { msg: '请求成功', data: result.testBanks };
    }
    async saveQuestionInfoStrategy(body) {
        const { id, select = [] } = body;
        const manager = await (0, typeorm_2.getManager)();
        const strategy = await this.exerciseBigChapterService.findOne(id);
        const questionList = [];
        for (let i = 0; i < select.length; i++) {
            const [question] = await Promise.all([
                await manager.findOne(testBank_entity_1.TestBank, select[i]),
            ]);
            questionList.push(question);
        }
        console.log(questionList);
        strategy.testBanks = questionList;
        await manager.save(strategy);
        return { msg: '添加试题成功' };
    }
    async deleteSmokeQuestion(body) {
        const { sId, id } = body;
        if (!sId || !id || isNaN(sId) || typeof sId !== 'number' || sId < 0) {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = await (0, typeorm_2.getManager)();
        const res = await this.exerciseBigChapterService
            .createQueryBuilder('EachChapter')
            .leftJoinAndSelect('EachChapter.testBanks', 'test_bank')
            .select(['EachChapter.id', 'test_bank'])
            .where('EachChapter.id = :sId', { sId })
            .getOne();
        if (!res || !res.testBanks) {
            throw new common_1.HttpException('请求的资源未找到', common_1.HttpStatus.NOT_FOUND);
        }
        const list = res.testBanks;
        const change = list.filter((item) => {
            return item.id !== id;
        });
        const smoke = await this.exerciseBigChapterService.findOne(sId);
        smoke.testBanks = change;
        await manager.save(smoke);
        return { msg: '删除成功', data: id + '已被删除' };
    }
    async infoSmoke(body) {
        const { id, info } = body;
        const manager = await (0, typeorm_2.getManager)();
        const chapter = await this.exerciseBigChapterService.findOne(id);
        const exist = await this.exerciseBigChapterService
            .createQueryBuilder('chapter')
            .leftJoin('chapter.testBanks', 'test_bank')
            .select(['chapter.id', 'test_bank'])
            .getOne();
        const existList = exist.testBanks;
        const quesList = [];
        for (let i = 0; i < info.length; i++) {
            const question = await manager.findOne(testBank_entity_1.TestBank, { id: info[i] });
            quesList.push(question);
        }
        chapter.testBanks = [...existList, ...quesList];
        await manager.save(chapter);
    }
    async bath(body) {
        const { selectQues, strategyId } = body;
        if (selectQues.length <= 0) {
            return { msg: '请选择要删除的试题', data: '删除失败' };
        }
        const result = await this.exerciseBigChapterService
            .createQueryBuilder('EachChapter')
            .leftJoinAndSelect('EachChapter.testBanks', 'test_bank')
            .select(['EachChapter.id', 'test_bank'])
            .where('EachChapter.id = :sId', { sId: strategyId })
            .getOne();
        const manager = await (0, typeorm_2.getManager)();
        const change = result.testBanks;
        for (let i = 0; i < change.length; i++) {
            for (let j = 0; j < selectQues.length; j++) {
                if (change[i].id === selectQues[j].id) {
                    change.splice(i, 1);
                }
            }
        }
        const smoke = await this.exerciseBigChapterService.findOne(strategyId);
        smoke.testBanks = change;
        await manager.save(smoke);
        return { msg: '删除成功', code: 1 };
    }
};
ExerciseEachChapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exercise_each_chapter_entity_1.EachChapter)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExerciseEachChapterService);
exports.ExerciseEachChapterService = ExerciseEachChapterService;
//# sourceMappingURL=exercise-each-chapter.service.js.map