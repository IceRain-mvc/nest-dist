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
exports.PaperBigQuestionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paper_big_question_entity_1 = require("./paper-big-question.entity");
const typeorm_2 = require("typeorm");
const paper_exam_entity_1 = require("../paper-exam/paper-exam.entity");
const tree_person_entity_1 = require("../tree-person/tree-person.entity");
const paper_exam_service_1 = require("../paper-exam/paper-exam.service");
const smoke_strategy_service_1 = require("../smoke-strategy/smoke-strategy.service");
const testBank_entity_1 = require("../testBank/testBank.entity");
const testBank_service_1 = require("../testBank/testBank.service");
let PaperBigQuestionService = class PaperBigQuestionService {
    constructor(paperExamService, smokeStrategyService, testBankService, paperBigQuestionRepository) {
        this.paperExamService = paperExamService;
        this.smokeStrategyService = smokeStrategyService;
        this.testBankService = testBankService;
        this.paperBigQuestionRepository = paperBigQuestionRepository;
    }
    async create(body) {
        const { paperId, description = null, count = 0, allScore = 0, sortId = null, } = body;
        const counts = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.paperExam', 'paper_exam')
            .where('paper_exam.id = :id', { id: paperId })
            .orderBy('PaperBigQuestion.sortId', 'DESC')
            .getMany();
        const manager = await (0, typeorm_2.getManager)();
        const res = await this.paperBigQuestionRepository.create({
            title: '第' + (counts.length === 0 ? 1 : counts[0].sortId + 1) + '大题',
            description,
            count,
            allScore,
            sortId: sortId || (counts.length === 0 ? 1 : counts[0].sortId + 1),
        });
        const ques = await this.paperBigQuestionRepository.save(res);
        const paper = await manager.findOne(paper_exam_entity_1.PaperExam, { id: paperId });
        ques.paperExam = await paper;
        await manager.save(ques);
        return { msg: '大题添加成功', data: ques };
    }
    async deleteThisQuestion(id) {
        return await this.paperBigQuestionRepository
            .createQueryBuilder()
            .delete()
            .from(paper_big_question_entity_1.PaperBigQuestion)
            .where('id = :id', { id })
            .execute();
    }
    async addRandomSelectionStrategy(id, result) {
        const manager = await (0, typeorm_2.getManager)();
        const paperBigQuestion = await this.paperBigQuestionRepository.findOne(id);
        const list = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.questionSelectionStrategys', 'question_selection_strategy')
            .where('PaperBigQuestion.id = :id', { id })
            .getMany();
        paperBigQuestion.questionSelectionStrategys = [
            result,
            ...list[0].questionSelectionStrategys,
        ];
        return await manager.save(paperBigQuestion);
    }
    async deleteStrategy(param) {
        const { id, deleteId } = param;
        const manager = (0, typeorm_2.getManager)();
        const paperBigQuestion = await this.paperBigQuestionRepository.findOne(id, {
            relations: ['questionSelectionStrategys'],
        });
        const strategyList = paperBigQuestion.questionSelectionStrategys.filter((item) => {
            return item.id !== deleteId;
        });
        const paperBigQuestionEntity = new paper_big_question_entity_1.PaperBigQuestion();
        paperBigQuestionEntity.id = id;
        paperBigQuestionEntity.questionSelectionStrategys = strategyList;
        return await manager.save(paperBigQuestionEntity);
    }
    async findStrategy(body) {
        const list = body.paperBigQuestions;
        for (let i = 0; i < list.length; i++) {
            const res = await this.paperBigQuestionRepository
                .createQueryBuilder('paper_big_question')
                .leftJoinAndSelect('paper_big_question.questionSelectionStrategys', 'question_selection_strategys')
                .where('paper_big_question.id = :id', { id: list[i].id })
                .getOne();
            list[i].questionSelectionStrategys = res.questionSelectionStrategys;
        }
        return body;
    }
    async moveToTop(body) {
        console.log(body);
        const { paperId, sortId, type } = body;
        const list = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoin('PaperBigQuestion.paperExam', 'paper_exam')
            .select(['PaperBigQuestion.id', 'PaperBigQuestion.sortId'])
            .where('paper_exam.id = :id', { id: paperId })
            .orderBy('PaperBigQuestion.sortId', 'ASC')
            .getMany();
        const index = list.findIndex((item) => {
            return item.sortId === sortId;
        });
        console.log(list);
        let newSortId = 0;
        if (type === 0) {
            if (index - 1 < 0) {
                return '已经是最顶了';
            }
            newSortId = list[index - 1].sortId;
            list[index - 1].sortId = sortId;
            list[index].sortId = newSortId;
        }
        if (type === 1) {
            if (index + 1 > list.length - 1) {
                return '到底了';
            }
            newSortId = list[index].sortId;
            list[index].sortId = list[index + 1].sortId;
            list[index + 1].sortId = newSortId;
        }
        await this.paperBigQuestionRepository
            .createQueryBuilder()
            .update(paper_big_question_entity_1.PaperBigQuestion)
            .set({
            sortId: type === 0 ? list[index - 1].sortId : list[index + 1].sortId,
        })
            .where('id = :id', {
            id: type === 0 ? list[index - 1].id : list[index + 1].id,
        })
            .execute();
        await this.paperBigQuestionRepository
            .createQueryBuilder()
            .update(paper_big_question_entity_1.PaperBigQuestion)
            .set({ sortId: list[index].sortId })
            .where('id = :id', { id: list[index].id })
            .execute();
        return '移动成功';
    }
    async getStrategyQuestion(body) {
        const manager = await (0, typeorm_2.getManager)();
        let allTestIds = [];
        let paperCount = 0;
        for (let i = 0; i < body.length; i++) {
            const res = await this.paperBigQuestionRepository
                .createQueryBuilder('paper_big_question')
                .leftJoinAndSelect('paper_big_question.questionSelectionStrategys', 'question_selection_strategy')
                .select(['paper_big_question.id', 'question_selection_strategy'])
                .where('paper_big_question.id = :id', { id: body[i] })
                .getOne();
            console.log('----------', res);
            const strategyList = res.questionSelectionStrategys;
            const questionIdList = [];
            for (let j = 0; j < strategyList.length; j++) {
                const treeNode = await manager
                    .getTreeRepository(tree_person_entity_1.TreePerson)
                    .findOne(strategyList[j].questionType);
                const searchTreeList = await manager
                    .getTreeRepository(tree_person_entity_1.TreePerson)
                    .findDescendants(treeNode);
                const treeIdList = searchTreeList.map((el) => {
                    return el.id;
                });
                const questions = await this.testBankService.getQuestionList({
                    type: strategyList[j].questionClassify,
                    classify: treeIdList,
                });
                const noDifficultyList = questions.filter((item) => item.difficultyLevel === '不限难度');
                const easyList = questions.filter((item) => item.difficultyLevel === '容易');
                const mediumList = questions.filter((item) => item.difficultyLevel === '中等');
                const diffList = questions.filter((item) => item.difficultyLevel === '困难');
                for (let k = 0; k < strategyList[j].noDifficulty; k++) {
                    const deleteIndex = Math.floor(Math.random() * noDifficultyList.length);
                    questionIdList.push(noDifficultyList[deleteIndex].id);
                    noDifficultyList.splice(deleteIndex, 1);
                }
                for (let k = 0; k < strategyList[j].easy; k++) {
                    const deleteIndex = Math.floor(Math.random() * easyList.length);
                    questionIdList.push(easyList[deleteIndex].id);
                    easyList.splice(deleteIndex, 1);
                }
                for (let k = 0; k < strategyList[j].medium; k++) {
                    const deleteIndex = Math.floor(Math.random() * mediumList.length);
                    questionIdList.push(mediumList[deleteIndex].id);
                    mediumList.splice(deleteIndex, 1);
                }
                for (let k = 0; k < strategyList[j].difficult; k++) {
                    const deleteIndex = Math.floor(Math.random() * diffList.length);
                    questionIdList.push(diffList[deleteIndex].id);
                    diffList.splice(deleteIndex, 1);
                }
            }
            allTestIds = [...new Set([...allTestIds, ...questionIdList])];
            let resultList = [];
            if (questionIdList.length > 0) {
                resultList = await this.testBankService.getQuestionByList([
                    ...new Set(questionIdList),
                ]);
            }
            const bigQues = await manager.findOne(paper_big_question_entity_1.PaperBigQuestion, body[i]);
            paperCount += bigQues.count;
            bigQues.testBanks = resultList;
            await manager.save(bigQues);
        }
        if (paperCount > allTestIds.length) {
            return { code: -1, msg: '题目重复，请重新选择' };
        }
        return { code: 1, msg: '随机试卷生成成功' };
    }
    async getStrategyRandomQuestionById(body) {
        const manager = await (0, typeorm_2.getManager)();
        let allTestIds = [];
        let paperCount = 0;
        for (let i = 0; i < body.length; i++) {
            const res = await this.paperBigQuestionRepository
                .createQueryBuilder('paper_big_question')
                .leftJoinAndSelect('paper_big_question.smokeStrategys', 'smoke_strategy')
                .select(['paper_big_question.id', 'smoke_strategy'])
                .where('paper_big_question.id = :id', { id: body[i] })
                .getOne();
            const smokeStrategyList = res.smokeStrategys;
            const questionIdList = [];
            for (let j = 0; j < smokeStrategyList.length; j++) {
                const smokeResult = await this.smokeStrategyService.getStrategyQuestionList(smokeStrategyList[i].id);
                const questions = smokeResult.data;
                const noDifficultyList = questions.filter((item) => item.difficultyLevel === '不限难度');
                const easyList = questions.filter((item) => item.difficultyLevel === '容易');
                const mediumList = questions.filter((item) => item.difficultyLevel === '简单');
                const diffList = questions.filter((item) => item.difficultyLevel === '困难');
                for (let k = 0; k < smokeStrategyList[j].noDifficulty; k++) {
                    const deleteIndex = Math.floor(Math.random() * noDifficultyList.length);
                    questionIdList.push(noDifficultyList[deleteIndex].id);
                    noDifficultyList.splice(deleteIndex, 1);
                }
                for (let k = 0; k < smokeStrategyList[j].easy; k++) {
                    const deleteIndex = Math.floor(Math.random() * easyList.length);
                    questionIdList.push(easyList[deleteIndex].id);
                    easyList.splice(deleteIndex, 1);
                }
                for (let k = 0; k < smokeStrategyList[j].medium; k++) {
                    const deleteIndex = Math.floor(Math.random() * mediumList.length);
                    questionIdList.push(mediumList[deleteIndex].id);
                    mediumList.splice(deleteIndex, 1);
                }
                for (let k = 0; k < smokeStrategyList[j].difficult; k++) {
                    const deleteIndex = Math.floor(Math.random() * diffList.length);
                    questionIdList.push(diffList[deleteIndex].id);
                    diffList.splice(deleteIndex, 1);
                }
            }
            allTestIds = [...new Set([...allTestIds, ...questionIdList])];
            const resultList = await this.testBankService.getQuestionByList([
                ...new Set(questionIdList),
            ]);
            const bigQues = await manager.findOne(paper_big_question_entity_1.PaperBigQuestion, body[i]);
            paperCount += bigQues.count;
            bigQues.testBanks = resultList;
            await manager.save(bigQues);
        }
        if (paperCount > allTestIds.length) {
            return { code: -1, msg: '题目重复，请重新选择' };
        }
        return { code: 1, msg: '随机试卷生成成功' };
    }
    async getQuestionsById(id) {
        const res = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoin('PaperBigQuestion.testBanks', 'test_bank')
            .select(['PaperBigQuestion', 'test_bank'])
            .where('PaperBigQuestion.id = :id', { id: Number(id) })
            .getOne();
        if (res) {
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
        }
        return res;
    }
    async saveBigQuestionTitle(body) {
        const { id, title } = body;
        return await this.paperBigQuestionRepository.update(id, { title });
    }
    async saveBigQuestionDes(body) {
        const { id, description, descriptionMD } = body;
        return await this.paperBigQuestionRepository
            .createQueryBuilder()
            .update(paper_big_question_entity_1.PaperBigQuestion)
            .set({ description, descriptionMD })
            .where('id = :id', { id })
            .execute();
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
        const bigQuestion = await this.paperBigQuestionRepository.findOne(id);
        bigQuestion.testBanks = questionList;
        const res = await manager.save(bigQuestion);
        await this.updateBigQuestionScore(id);
        return res;
    }
    async updateBigQuestionScore(id) {
        const res = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.testBanks', 'test_bank')
            .select(['PaperBigQuestion.id', 'test_bank'])
            .where('PaperBigQuestion.id = :id', { id })
            .getOne();
        const questionList = res.testBanks;
        const allScore = questionList.reduce((prev, next) => {
            prev += next.gradeNum;
            return prev;
        }, 0);
        const result = await this.paperBigQuestionRepository.update(id, {
            allScore,
            count: questionList.length,
        });
        const relation = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.paperExam', 'paper_exam')
            .select(['PaperBigQuestion.id', 'paper_exam'])
            .where('PaperBigQuestion.id = :id', { id })
            .getOne();
        await this.paperExamService.updatePaperScoreAndCount(relation.paperExam.id);
        return { msg: '修改成功', result };
    }
    async deleteSmallQuestion(body) {
        const { id, testId } = body;
        const result = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.testBanks', 'test_bank')
            .select(['PaperBigQuestion.id', 'test_bank.id'])
            .where('PaperBigQuestion.id = :id', { id })
            .getOne();
        const questionList = result.testBanks;
        const resultList = questionList.filter((item) => {
            return item.id !== testId;
        });
        await this.saveQuestionInfoBig({ id, select: resultList });
        return { msg: '更新成功' };
    }
    async getSmokeStrategy(id) {
        const res = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.smokeStrategys', 'smoke_strategy')
            .select(['PaperBigQuestion.id', 'smoke_strategy'])
            .where('PaperBigQuestion.id = :id', { id })
            .getOne();
        const strategyList = res.smokeStrategys;
        for (let i = 0; i < strategyList.length; i++) {
            const resultObj = await this.smokeStrategyService.getSimulationQuestions(strategyList[i].id);
            strategyList[i] = Object.assign(Object.assign({}, strategyList[i]), resultObj);
        }
        return { msg: '查询成功', strategyList };
    }
    async getSmokes(id) {
        const res = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.smokeStrategys', 'smoke_strategy')
            .select(['PaperBigQuestion.id', 'smoke_strategy'])
            .where('PaperBigQuestion.id = :id', { id })
            .getOne();
        return res.smokeStrategys;
    }
    async getRandoms(id) {
        const res = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.questionSelectionStrategys', 'question_selection_strategy')
            .select(['PaperBigQuestion.id', 'question_selection_strategy'])
            .where('PaperBigQuestion.id = :id', { id })
            .getOne();
        return res.questionSelectionStrategys;
    }
    async computedScoreByStrategy(id) {
        const strategy = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.smokeStrategys', 'smoke_strategy')
            .select(['PaperBigQuestion.id', 'smoke_strategy'])
            .where('PaperBigQuestion.id = :id', { id })
            .getOne();
        const list = strategy.smokeStrategys;
        const count = list.reduce((prev, next) => {
            return (prev += next.count);
        }, 0);
        const allScore = list.reduce((prev, next) => {
            return (prev += next.count * next.everyScore);
        }, 0);
        await this.paperBigQuestionRepository.update(id, { count, allScore });
        const paper = await this.paperBigQuestionRepository
            .createQueryBuilder('PaperBigQuestion')
            .leftJoinAndSelect('PaperBigQuestion.paperExam', 'paper_exam')
            .select(['PaperBigQuestion.id', 'paper_exam.id'])
            .where('PaperBigQuestion.id = :id', { id })
            .getOne();
        await this.paperExamService.updatePaperScoreAndCount(paper.paperExam.id);
        return { msg: '成绩更新成功' };
    }
    async updateSingleScore(body) {
        const { testId, score, quesId } = body;
        console.log(testId, score, quesId);
        await this.testBankService.changeScoreValue({
            testId,
            score,
        });
        return await this.updateBigQuestionScore(quesId);
    }
    async updateGroupScore(body) {
        const { quesId } = body;
        await this.testBankService.changeScoreValueList(body);
        return await this.updateBigQuestionScore(quesId);
    }
    async changeQuesSort(body) {
        const { data } = body;
        const manager = await (0, typeorm_2.getManager)();
        for (let i = 0; i < data.length; i++) {
            const big = await this.paperBigQuestionRepository.findOne(data[i].id);
            const testList = [];
            for (let j = 0; j < data[i].idList.length; j++) {
                await this.testBankService.updateTestBank({
                    id: data[i].idList[j],
                    myanswer: j + 1 + '',
                });
                const [test] = await Promise.all([
                    manager.findOne(testBank_entity_1.TestBank, { id: data[i].idList[j] }),
                ]);
                testList.push(test);
            }
            big.testBanks = testList;
            await manager.save(big);
        }
        return { msg: '排序成功', code: 1 };
    }
    async infoPageQuestion(body) {
        console.log('调用了');
        const { id, info } = body;
        console.log(id, info);
        const manager = await (0, typeorm_2.getManager)();
        const big = await this.paperBigQuestionRepository.findOne(id);
        const exist = await this.paperBigQuestionRepository
            .createQueryBuilder('big')
            .leftJoin('big.testBanks', 'test_bank')
            .select(['big.id', 'test_bank'])
            .where('big.id = :id', { id })
            .getOne();
        console.log(exist);
        const existList = exist.testBanks;
        console.log(existList);
        const quesList = [];
        for (let i = 0; i < info.length; i++) {
            if (info[i]) {
                const question = await manager.findOne(testBank_entity_1.TestBank, { id: info[i] });
                quesList.push(question);
            }
        }
        const allQuestion = [...existList, ...quesList];
        allQuestion.forEach((item, index) => {
            item.myanswer = index + 1 + '';
        });
        big.testBanks = allQuestion;
        await manager.save(big);
    }
};
PaperBigQuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(paper_big_question_entity_1.PaperBigQuestion)),
    __metadata("design:paramtypes", [paper_exam_service_1.PaperExamService,
        smoke_strategy_service_1.SmokeStrategyService,
        testBank_service_1.TestBankService,
        typeorm_2.Repository])
], PaperBigQuestionService);
exports.PaperBigQuestionService = PaperBigQuestionService;
//# sourceMappingURL=paper-big-question.service.js.map