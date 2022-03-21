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
exports.QuestionSelectionStrategyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const question_selection_strategy_entity_1 = require("./question-selection-strategy.entity");
const typeorm_2 = require("typeorm");
const paper_big_question_entity_1 = require("../paper-big-question/paper-big-question.entity");
let QuestionSelectionStrategyService = class QuestionSelectionStrategyService {
    constructor(questionSelectionStrategyRepository) {
        this.questionSelectionStrategyRepository = questionSelectionStrategyRepository;
    }
    async create(body) {
        const { id, sortIndex = null, questionClassify = undefined, questionType = 4, noDifficulty = 0, easy = 0, medium = 0, difficult = 0, questionAllMarks = 0, everyScore = 0, } = body;
        const manager = (0, typeorm_2.getManager)();
        const count = await this.questionSelectionStrategyRepository
            .createQueryBuilder('QuestionSelectionStrategy')
            .leftJoinAndSelect('QuestionSelectionStrategy.paperBigQuestion', 'paper_big_question')
            .where('paper_big_question.id = :id', { id })
            .orderBy('QuestionSelectionStrategy.id', 'DESC')
            .getMany();
        const res = await this.questionSelectionStrategyRepository.create({
            sortIndex: sortIndex || count.length === 0 ? 1 : count[0].sortIndex + 1,
            questionClassify,
            questionType,
            noDifficulty,
            easy,
            medium,
            difficult,
            questionAllMarks,
            everyScore,
        });
        const result = await this.questionSelectionStrategyRepository.save(res);
        const paperBigQuestion = await manager.findOne(paper_big_question_entity_1.PaperBigQuestion, { id });
        result.paperBigQuestion = await paperBigQuestion;
        await manager.save(result);
        console.log(result);
        return { msg: '添加随机策略成功', data: result.id };
    }
    async findStrategy(id) {
        return this.questionSelectionStrategyRepository.findOne(id);
    }
    async getStrategyList(id) {
        const result = await this.questionSelectionStrategyRepository
            .createQueryBuilder('QuestionSelectionStrategy')
            .leftJoinAndSelect('QuestionSelectionStrategy.testBank', 'test_bank')
            .where('QuestionSelectionStrategy.id = :id', { id })
            .getOne();
        return result.testBank;
    }
    async deleteThisStrategy(id) {
        return await this.questionSelectionStrategyRepository
            .createQueryBuilder()
            .delete()
            .from(question_selection_strategy_entity_1.QuestionSelectionStrategy)
            .where('id = :id', { id })
            .execute();
    }
    async updateStrategy(body) {
        const id = body.id;
        delete body.id;
        await this.questionSelectionStrategyRepository
            .createQueryBuilder()
            .update(question_selection_strategy_entity_1.QuestionSelectionStrategy)
            .set(Object.assign({}, body))
            .where('id = :id', { id })
            .execute();
        const res = await this.questionSelectionStrategyRepository
            .createQueryBuilder('question_selection_strategy')
            .leftJoinAndSelect('question_selection_strategy.paperBigQuestion', 'paper_big_question')
            .where('question_selection_strategy.id = :id', { id })
            .getOne();
        const bigId = res.paperBigQuestion.id;
        const manager = await (0, typeorm_2.getManager)();
        const list = await this.questionSelectionStrategyRepository
            .createQueryBuilder('question_selection_strategy')
            .leftJoin('question_selection_strategy.paperBigQuestion', 'paper_big_question')
            .select([
            'question_selection_strategy.questionAllMarks',
            'question_selection_strategy.everyScore',
        ])
            .where('paper_big_question.id = :id', { id: bigId })
            .getMany();
        const quesSet = {
            count: 0,
            allScore: 0,
        };
        quesSet.count = list.reduce((prev, next) => {
            prev = prev + next.questionAllMarks;
            return prev;
        }, quesSet.count);
        quesSet.allScore = list.reduce((prev, next) => {
            prev = prev + next.questionAllMarks * next.everyScore;
            return prev;
        }, quesSet.allScore);
        const result = await manager
            .createQueryBuilder()
            .update(paper_big_question_entity_1.PaperBigQuestion)
            .set(Object.assign({}, quesSet))
            .where('id = :id', { id: bigId })
            .execute();
        return result;
    }
};
QuestionSelectionStrategyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(question_selection_strategy_entity_1.QuestionSelectionStrategy)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QuestionSelectionStrategyService);
exports.QuestionSelectionStrategyService = QuestionSelectionStrategyService;
//# sourceMappingURL=question-selection-strategy.service.js.map