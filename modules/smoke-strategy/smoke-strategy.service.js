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
exports.SmokeStrategyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const smoke_strategy_entity_1 = require("./smoke-strategy.entity");
const typeorm_2 = require("typeorm");
const paper_big_question_entity_1 = require("../paper-big-question/paper-big-question.entity");
const paper_big_question_service_1 = require("../paper-big-question/paper-big-question.service");
const testBank_entity_1 = require("../testBank/testBank.entity");
let SmokeStrategyService = class SmokeStrategyService {
    constructor(smokeStrategyRepository, paperBigQuestionService) {
        this.smokeStrategyRepository = smokeStrategyRepository;
        this.paperBigQuestionService = paperBigQuestionService;
    }
    async createStrategy(body) {
        const { id, noDifficulty = 0, easy = 0, medium = 0, difficult = 0, count = 0, everyScore = 0, sortIndex = null, } = body;
        const manager = await (0, typeorm_2.getManager)();
        const resList = await this.smokeStrategyRepository
            .createQueryBuilder('SmokeStrategy')
            .leftJoinAndSelect('SmokeStrategy.paperBigQuestion', 'paper_big_question')
            .select(['SmokeStrategy', 'paper_big_question.id'])
            .where('paper_big_question.id = :id', { id })
            .orderBy('SmokeStrategy.sortIndex', 'DESC')
            .getMany();
        let sortId;
        if (resList.length === 0) {
            sortId = 1;
        }
        else {
            sortId = resList[0].sortIndex + 1;
        }
        const res = await this.smokeStrategyRepository.create({
            sortIndex: sortIndex || sortId,
            noDifficulty,
            easy,
            medium,
            difficult,
            count,
            everyScore,
        });
        const result = await this.smokeStrategyRepository.save(res);
        const paperBigQuestion = await manager.findOne(paper_big_question_entity_1.PaperBigQuestion, { id });
        result.paperBigQuestion = await paperBigQuestion;
        await manager.save(result);
        return { msg: '????????????????????????', data: result.id };
    }
    async findStrategyById(id) {
        return await this.smokeStrategyRepository.findOne(id);
    }
    async getSimulationQuestions(id) {
        const result = await this.smokeStrategyRepository
            .createQueryBuilder('SmokeStrategy')
            .leftJoinAndSelect('SmokeStrategy.testBanks', 'test_bank')
            .select(['SmokeStrategy.id', 'test_bank'])
            .where('SmokeStrategy.id = :id', { id })
            .getOne();
        const resultObj = {
            allNoDifficulty: 0,
            allEasy: 0,
            allMedium: 0,
            allDifficult: 0,
            allCount: 0,
        };
        resultObj.allNoDifficulty = result.testBanks.filter((item) => {
            return item.difficultyLevel === '????????????';
        }).length;
        resultObj.allEasy = result.testBanks.filter((item) => {
            return item.difficultyLevel === '??????';
        }).length;
        resultObj.allMedium = result.testBanks.filter((item) => {
            return item.difficultyLevel === '??????';
        }).length;
        resultObj.allDifficult = result.testBanks.filter((item) => {
            return item.difficultyLevel === '??????';
        }).length;
        resultObj.allCount = result.testBanks.length;
        return resultObj;
    }
    async deleteSmokeStrategy(id) {
        const result = await this.smokeStrategyRepository.delete(id);
        return { msg: '????????????', result };
    }
    async getStrategyQuestionList(id) {
        const result = await this.smokeStrategyRepository
            .createQueryBuilder('SmokeStrategy')
            .leftJoinAndSelect('SmokeStrategy.testBanks', 'test_bank')
            .select(['SmokeStrategy.id', 'test_bank'])
            .where('SmokeStrategy.id = :id', { id })
            .getOne();
        return { msg: '????????????', data: result.testBanks };
    }
    async saveQuestionInfoStrategy(body) {
        const { id, select = [] } = body;
        const manager = await (0, typeorm_2.getManager)();
        const strategy = await this.smokeStrategyRepository.findOne(id);
        const questionList = [];
        for (let i = 0; i < select.length; i++) {
            const [question] = await Promise.all([
                await manager.findOne(testBank_entity_1.TestBank, select[i]),
            ]);
            questionList.push(question);
        }
        strategy.testBanks = questionList;
        await manager.save(strategy);
        return { msg: '??????????????????' };
    }
    async updateSmokeStrategy(body) {
        const { id } = body;
        delete body.id;
        const res = await this.smokeStrategyRepository
            .createQueryBuilder()
            .update(smoke_strategy_entity_1.SmokeStrategy)
            .set(Object.assign({}, body))
            .where('id = :id', { id })
            .execute();
        const result = await this.smokeStrategyRepository
            .createQueryBuilder('SmokeStrategy')
            .leftJoinAndSelect('SmokeStrategy.paperBigQuestion', 'paper_big_question')
            .select(['SmokeStrategy.id', 'paper_big_question.id'])
            .where('SmokeStrategy.id = :id', { id })
            .getOne();
        await this.paperBigQuestionService.computedScoreByStrategy(result.paperBigQuestion.id);
        return { msg: '????????????', data: res };
    }
    async deleteSmokeQuestion(body) {
        const { sId, id } = body;
        if (!sId || !id || isNaN(sId) || typeof sId !== 'number' || sId < 0) {
            throw new common_1.HttpException('??????????????????', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = await (0, typeorm_2.getManager)();
        const res = await this.smokeStrategyRepository
            .createQueryBuilder('SmokeStrategy')
            .leftJoinAndSelect('SmokeStrategy.testBanks', 'test_bank')
            .select(['SmokeStrategy.id', 'test_bank'])
            .where('SmokeStrategy.id = :sId', { sId })
            .getOne();
        if (!res || !res.testBanks) {
            throw new common_1.HttpException('????????????????????????', common_1.HttpStatus.NOT_FOUND);
        }
        const list = res.testBanks;
        const change = list.filter((item) => {
            return item.id !== id;
        });
        const smoke = await this.smokeStrategyRepository.findOne(sId);
        smoke.testBanks = change;
        await manager.save(smoke);
        return { msg: '????????????', data: id + '????????????' };
    }
    async bath(body) {
        const { selectQues, strategyId } = body;
        if (selectQues.length <= 0) {
            return { msg: '???????????????????????????', data: '????????????' };
        }
        const result = await this.smokeStrategyRepository
            .createQueryBuilder('SmokeStrategy')
            .leftJoinAndSelect('SmokeStrategy.testBanks', 'test_bank')
            .select(['SmokeStrategy.id', 'test_bank'])
            .where('SmokeStrategy.id = :sId', { sId: strategyId })
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
        const smoke = await this.smokeStrategyRepository.findOne(strategyId);
        smoke.testBanks = change;
        await manager.save(smoke);
        return { msg: '????????????', code: 1 };
    }
    async infoSmoke(body) {
        const { id, info } = body;
        const manager = await (0, typeorm_2.getManager)();
        const smoke = await this.smokeStrategyRepository.findOne(id);
        const exist = await this.smokeStrategyRepository
            .createQueryBuilder('smoke')
            .leftJoin('smoke.testBanks', 'test_bank')
            .select(['smoke.id', 'test_bank'])
            .getOne();
        const existList = exist.testBanks;
        const quesList = [];
        for (let i = 0; i < info.length; i++) {
            const question = await manager.findOne(testBank_entity_1.TestBank, { id: info[i] });
            quesList.push(question);
        }
        smoke.testBanks = [...existList, ...quesList];
        await manager.save(smoke);
    }
};
SmokeStrategyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(smoke_strategy_entity_1.SmokeStrategy)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => paper_big_question_service_1.PaperBigQuestionService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        paper_big_question_service_1.PaperBigQuestionService])
], SmokeStrategyService);
exports.SmokeStrategyService = SmokeStrategyService;
//# sourceMappingURL=smoke-strategy.service.js.map