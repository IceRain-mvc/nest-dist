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
exports.TestBankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const test_options_entity_1 = require("../test-options/test-options.entity");
const test_questions_entity_1 = require("../test-questions/test-questions.entity");
const testBank_entity_1 = require("./testBank.entity");
const tree_person_service_1 = require("../tree-person/tree-person.service");
let TestBankService = class TestBankService {
    constructor(treePersonService, testBankRepository) {
        this.treePersonService = treePersonService;
        this.testBankRepository = testBankRepository;
    }
    async create(body) {
        const res = this.testBankRepository.create(Object.assign({}, body));
        return await this.testBankRepository.save(res);
    }
    async getPage(query) {
        const { page = 1, pageSize = 10, field = 'createAt', order = 'DESC', textclassify, textSearch, textType, time, textDifficulty, } = query;
        const start = (page - 1) * pageSize;
        let res = this.testBankRepository
            .createQueryBuilder('test_bank')
            .leftJoinAndSelect('test_bank.testOptions', 'test_options')
            .leftJoinAndSelect('test_bank.testQuestions', 'test_questions')
            .leftJoinAndSelect('test_bank.treePerson', 'tree_person')
            .leftJoinAndSelect('test_bank.paperBigQuestions', 'paper_big_questions');
        if (textclassify && textclassify !== 4) {
            res = res.andWhere(new typeorm_2.Brackets((qb) => {
                qb.where('tree_person.id = :id', {
                    id: textclassify,
                }).orWhere('tree_person.parentId = :id', { id: textclassify });
            }));
        }
        if (textType && textType !== '所有题型') {
            res = res.andWhere('test_bank.questionTypes = :questionTypes', {
                questionTypes: textType,
            });
        }
        if (textDifficulty && textDifficulty !== '全部') {
            res = res.andWhere('test_bank.difficultyLevel = :difficultyLevel', {
                difficultyLevel: textDifficulty,
            });
        }
        const searchTime = time ? JSON.parse(time) : undefined;
        if (time) {
            if (searchTime.startTime) {
                res = res.andWhere('create_at > :start ', {
                    start: new Date(searchTime.startTime),
                });
            }
            if (searchTime.endTime) {
                res = res.andWhere('create_at < :end  ', {
                    end: new Date(searchTime.endTime),
                });
            }
        }
        if (textSearch) {
            res = res.andWhere('test_bank.examContent like :examContent', {
                examContent: `%${textSearch}%`,
            });
        }
        if (field && order) {
            res = res.orderBy(`test_bank.${field}`, order);
        }
        res = res.skip(start).take(pageSize);
        const list = await res.getManyAndCount();
        for (let i = 0; i < list[0].length; i++) {
            const res = await this.treePersonService.getNodeByCurrentId(list[0][i].examTypes);
            list[0][i].examTypes = res.fullTitles;
            list[0][i].testOptions.sort((a, b) => {
                return a.options.charCodeAt(0) - b.options.charCodeAt(0);
            });
            if (list[0][i].questionTypes === '判断题') {
                list[0][i].okanswer = list[0][i].okanswer === '对' ? 'A' : 'B';
            }
        }
        if (list) {
            return {
                msg: '查询成功',
                data: list,
            };
        }
        return {
            msg: '查询失败',
            data: [[], 0],
        };
    }
    async ImportExcelGetTestBank(exisTopic) {
        const arr = [];
        const indexArr = [];
        for (let i = 0; i < exisTopic.length; i++) {
            const res = await (0, typeorm_2.getManager)()
                .createQueryBuilder(testBank_entity_1.TestBank, 'test_bank')
                .where('test_bank.examContent = :examContent', {
                examContent: exisTopic[i].examContent,
            })
                .getOne();
            if (res) {
                res.index = i + 1;
                arr.push(res);
                indexArr.push(i);
            }
        }
        return { arr, indexArr };
    }
    async ImportExcelAdd(body) {
        const queryRunner = (0, typeorm_2.getConnection)().createQueryRunner();
        await queryRunner.startTransaction();
        let num = 0;
        const backArr = [];
        try {
            const { addTopic, rootType, treeId } = body;
            if (rootType !== '' && treeId) {
                addTopic.forEach((item) => {
                    item.examTypes = `${treeId}`;
                    item.treePerson = treeId;
                });
            }
            else {
                await this.treePersonService.getNodeByCurrentId(4);
                addTopic.forEach((item) => {
                    item.examTypes = '4';
                    item.treePerson = 4;
                    delete item.index;
                });
            }
            for (let i = 0; i < addTopic.length; i++) {
                num++;
                const res = await queryRunner.manager.save(testBank_entity_1.TestBank, Object.assign({}, addTopic[i]));
                if (res.testOptions && res.testOptions.length > 0) {
                    const options = res.testOptions;
                    for (let i = 0; i < options.length; i++) {
                        options[i].testBank = res.id;
                        await queryRunner.manager.save(test_options_entity_1.TestOptions, Object.assign({}, options[i]));
                    }
                }
                backArr.push(res);
            }
            await queryRunner.commitTransaction();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw new common_1.HttpException({
                message: '请求失败',
                error: '传入参数错误',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            code: 1,
            num,
            backArr,
        };
    }
    async getExportTest(params) {
        const { testIdList } = params;
        const exportData = [];
        for (let i = 0; i < testIdList.length; i++) {
            const res = await (0, typeorm_2.getManager)()
                .createQueryBuilder(testBank_entity_1.TestBank, 'test_bank')
                .leftJoinAndSelect('test_bank.testOptions', 'test_options')
                .where('test_bank.id = :id', {
                id: testIdList[i],
            })
                .getOne();
            const item = {
                questionTypes: res.questionTypes,
                examContent: res.examContent,
                okanswer: res.okanswer,
                gradeNum: res.gradeNum,
                examTypes: res.examTypes,
                difficultyLevel: res.difficultyLevel,
                okanalysis: res.okanalysis,
                options: '',
            };
            if (res.testOptions.length > 0) {
                res.testOptions.sort((a, b) => a.options.charCodeAt(0) - b.options.charCodeAt(0));
                item.options = res.testOptions
                    .map((it) => {
                    return `${it.options}.${it.optionsContent}`;
                })
                    .join(' ');
            }
            exportData.push(item);
        }
        return exportData;
    }
    async removeOneData(id) {
        const connection = (0, typeorm_2.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const arr = [];
            const testResult = await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .delete()
                .from(testBank_entity_1.TestBank, 'test_bank')
                .where('id=:id', { id: id })
                .execute();
            arr.push(testResult);
            const res = await Promise.all(arr)
                .then(async () => {
                await queryRunner.commitTransaction();
                return true;
            })
                .catch(async (err) => {
                await queryRunner.rollbackTransaction();
                console.log('请求错误', err);
                throw new common_1.HttpException({
                    message: '请求失败',
                    error: '传入参数错误',
                }, common_1.HttpStatus.BAD_REQUEST);
            });
            return res;
        }
        catch (err) {
            console.log('服务器错误', err);
            await queryRunner.rollbackTransaction();
            throw new common_1.HttpException({
                message: '请求失败',
                error: '服务器异常',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteRepetition(examBody) {
        const connection = (0, typeorm_2.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const arr = [];
            const idData = [];
            const errorData = [];
            const correctData = [];
            for (let i = 0; i < examBody.length; i++) {
                const res = await queryRunner.manager
                    .createQueryBuilder(testBank_entity_1.TestBank, 'test_bank')
                    .where('test_bank.examContent = :examContent', {
                    examContent: examBody[i].examContent,
                })
                    .leftJoin('test_bank.paperBigQuestions', 'paper_big_questions')
                    .leftJoin('test_bank.smokeStrategys', 'smoke_strategy')
                    .select(['test_bank', 'paper_big_questions', 'smoke_strategy'])
                    .getOne();
                if (res.paperBigQuestions.length <= 0 &&
                    res.smokeStrategys.length <= 0) {
                    arr.push(res);
                    idData.push(res.id);
                    correctData.push(examBody[i]);
                }
                else {
                    errorData.push(examBody[i]);
                }
            }
            await this.batchDelete(idData);
            const res = await Promise.all(arr)
                .then(async () => {
                await queryRunner.commitTransaction();
                return {
                    code: 200,
                    errorData: errorData,
                    correctData: correctData,
                    msg: '操作成功',
                };
            })
                .catch(async (err) => {
                await queryRunner.rollbackTransaction();
                console.log('请求错误', err);
                throw new common_1.HttpException({
                    message: '请求失败',
                    error: '传入参数错误',
                }, common_1.HttpStatus.BAD_REQUEST);
            });
            return res;
        }
        catch (err) {
            console.log('服务器错误', err);
            await queryRunner.rollbackTransaction();
            throw new common_1.HttpException({
                message: '请求失败',
                error: '服务器异常',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        finally {
            await queryRunner.release();
        }
    }
    async batchDelete(testBody) {
        const connection = (0, typeorm_2.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const arr = [];
            for (let i = 0; i < testBody.length; i++) {
                const testResult = await queryRunner.manager
                    .createQueryBuilder(testBank_entity_1.TestBank, 'test_Bank')
                    .delete()
                    .from(testBank_entity_1.TestBank, 'test_bank')
                    .where('id=:id', { id: testBody[i] })
                    .execute();
                arr.push(testResult);
            }
            const res = await Promise.all(arr)
                .then(async () => {
                await queryRunner.commitTransaction();
                return true;
            })
                .catch(async (err) => {
                await queryRunner.rollbackTransaction();
                console.log('请求错误', err);
                throw new common_1.HttpException({
                    message: '请求失败',
                    error: '传入参数错误',
                }, common_1.HttpStatus.BAD_REQUEST);
            });
            return res;
        }
        catch (err) {
            console.log('服务器错误', err);
            await queryRunner.rollbackTransaction();
            throw new common_1.HttpException({
                message: '请求失败',
                error: '服务器异常',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        finally {
            await queryRunner.release();
        }
    }
    async searchRepetitionData(testData = []) {
        const arr = [];
        for (let i = 0; i < testData.length; i++) {
            const res = await this.testBankRepository
                .createQueryBuilder('test_bank')
                .where('test_bank.examContent = :examContent', {
                examContent: testData[i],
            })
                .leftJoinAndSelect('test_bank.testOptions', 'test_options')
                .leftJoinAndSelect('test_bank.testQuestions', 'test_questions')
                .leftJoinAndSelect('test_bank.treePerson', 'tree_person')
                .leftJoinAndSelect('test_bank.paperBigQuestions', 'paper_big_questions')
                .getOne();
            if (res) {
                arr.push(Object.assign(Object.assign({}, res), { index: i + 1 }));
            }
        }
        return arr;
    }
    async batchAdd(examBody) {
        const connection = (0, typeorm_2.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const arr = [];
            const idData = [];
            for (let i = 0; i < examBody.length; i++) {
                const res = await queryRunner.manager
                    .createQueryBuilder(testBank_entity_1.TestBank, 'test_Bank')
                    .insert()
                    .into(testBank_entity_1.TestBank)
                    .values(Object.assign({}, examBody[i]))
                    .execute();
                arr.push(res);
                const id = res.identifiers[0].id;
                idData.push(id);
                for (let j = 0; j < examBody[i].testOptions.length; j++) {
                    const newObj = Object.assign(examBody[i].testOptions[j], {
                        testBank: id,
                    });
                    const res = await queryRunner.manager
                        .createQueryBuilder(test_options_entity_1.TestOptions, 'test_options')
                        .insert()
                        .into(test_options_entity_1.TestOptions)
                        .values(Object.assign({}, newObj))
                        .execute();
                    arr.push(res);
                }
                if (examBody[i].testQuestions) {
                    for (let j = 0; j < examBody[i].testQuestions.length; j++) {
                        const newObj = Object.assign(examBody[i].testQuestions[j], {
                            testBanks: id,
                        });
                        const res = await queryRunner.manager
                            .createQueryBuilder(test_questions_entity_1.TestQuestions, 'test_questions')
                            .insert()
                            .into(test_questions_entity_1.TestQuestions)
                            .values(Object.assign({}, newObj))
                            .execute();
                        arr.push(res);
                    }
                }
            }
            const res = await Promise.all(arr)
                .then(async () => {
                const arr = [];
                await queryRunner.commitTransaction();
                for (let i = 0; i < idData.length; i++) {
                    const res = await this.testBankRepository
                        .createQueryBuilder('test_bank')
                        .where('test_bank.id=:id', { id: idData[i] })
                        .leftJoinAndSelect('test_bank.testOptions', 'test_options')
                        .leftJoinAndSelect('test_bank.testQuestions', 'test_questions')
                        .leftJoinAndSelect('test_bank.treePerson', 'tree_person')
                        .leftJoinAndSelect('test_bank.paperBigQuestions', 'paper_big_questions')
                        .getOne();
                    arr.push(res);
                }
                return arr;
            })
                .catch(async (err) => {
                await queryRunner.rollbackTransaction();
                console.log('请求错误', err);
                throw new common_1.HttpException({
                    message: '请求失败',
                    error: '传入参数错误',
                }, common_1.HttpStatus.BAD_REQUEST);
            });
            return res;
        }
        catch (err) {
            console.log('服务器错误', err);
            await queryRunner.rollbackTransaction();
            throw new common_1.HttpException({
                message: '请求失败',
                error: '服务器异常',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        finally {
            await queryRunner.release();
        }
    }
    async batchUpdate(testBody) {
        const { selectedIdData = [], testObj } = testBody;
        const data = JSON.parse(testObj);
        const arr = [];
        let flag = false;
        for (let i = 0; i < selectedIdData.length; i++) {
            const res = await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .update(testBank_entity_1.TestBank)
                .set(Object.assign({}, data))
                .where('id = :id', { id: selectedIdData[i] })
                .execute();
            arr.push(res);
        }
        await Promise.all(arr)
            .then(() => {
            flag = true;
        })
            .catch(() => {
            flag = false;
        });
        return flag;
    }
    async getOne(ids) {
        const res = await this.testBankRepository
            .createQueryBuilder('test_bank')
            .where('test_bank.id=:id', { id: ids })
            .leftJoinAndSelect('test_bank.testOptions', 'test_options')
            .leftJoinAndSelect('test_bank.testQuestions', 'test_questions')
            .leftJoinAndSelect('test_bank.treePerson', 'tree_person')
            .getOne();
        return res;
    }
    async upDateOne(upDataBody) {
        const connection = (0, typeorm_2.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const arr = [];
            for (let j = 0; j < upDataBody.testOptions.length; j++) {
                const newObj = Object.assign(upDataBody.testOptions[j], {
                    testBank: upDataBody.id,
                });
                if (upDataBody.testOptions[j].id) {
                    const res = await queryRunner.manager
                        .createQueryBuilder(test_options_entity_1.TestOptions, 'test_options')
                        .where('test_options.testBank = :testBank', {
                        testBank: upDataBody.id,
                    })
                        .getMany();
                    arr.push(res);
                    const originalArr = res.sort((a, b) => {
                        return a.options.charCodeAt(0) - b.options.charCodeAt(0);
                    });
                    if (originalArr.length !== upDataBody.testOptions.length) {
                        const num = originalArr.length - upDataBody.testOptions.length;
                        const newArr = originalArr.splice(originalArr.length - num, num);
                        newArr.forEach(async (ite) => {
                            const res = await queryRunner.manager
                                .createQueryBuilder(test_options_entity_1.TestOptions, 'test_options')
                                .delete()
                                .from(test_options_entity_1.TestOptions, 'test_options')
                                .where('id=:id', {
                                id: ite.id,
                            })
                                .execute();
                            arr.push(res);
                        });
                    }
                    const optionsResult = await queryRunner.manager
                        .createQueryBuilder(test_options_entity_1.TestOptions, 'test_options')
                        .update(test_options_entity_1.TestOptions)
                        .set(Object.assign({}, newObj))
                        .where('id=:id', { id: upDataBody.testOptions[j].id })
                        .execute();
                    arr.push(optionsResult);
                }
                else {
                    const res = await queryRunner.manager
                        .createQueryBuilder(test_options_entity_1.TestOptions, 'test_options')
                        .insert()
                        .into(test_options_entity_1.TestOptions)
                        .values(Object.assign({}, newObj))
                        .execute();
                    arr.push(res);
                }
            }
            for (let j = 0; j < upDataBody.testQuestions.length; j++) {
                const newObj = Object.assign(upDataBody.testQuestions[j], {
                    testBanks: upDataBody.id,
                });
                if (upDataBody.testQuestions[j].id) {
                    const res = await queryRunner.manager
                        .createQueryBuilder(test_questions_entity_1.TestQuestions, 'test_questions')
                        .where('test_questions.testBanks = :testBanks', {
                        testBanks: upDataBody.id,
                    })
                        .getMany();
                    arr.push(res);
                    const originalArr = res;
                    if (originalArr.length !== upDataBody.testQuestions.length) {
                        const newArr = [];
                        originalArr.forEach((item) => {
                            const flag = upDataBody.testQuestions.some((ite) => {
                                return ite.id === item.id;
                            });
                            if (!flag) {
                                newArr.push(item);
                            }
                        });
                        newArr.forEach(async (ite) => {
                            const res = await queryRunner.manager
                                .createQueryBuilder(test_questions_entity_1.TestQuestions, 'test_questions')
                                .delete()
                                .from(test_questions_entity_1.TestQuestions, 'test_questions')
                                .where('id=:id', {
                                id: ite.id,
                            })
                                .execute();
                            arr.push(res);
                        });
                    }
                    const questionsResult = await queryRunner.manager
                        .createQueryBuilder(test_questions_entity_1.TestQuestions, 'test_questions')
                        .update(test_questions_entity_1.TestQuestions)
                        .set(Object.assign({}, newObj))
                        .where('id=:id', { id: upDataBody.testQuestions[j].id })
                        .execute();
                    arr.push(questionsResult);
                }
                else {
                    const res = await queryRunner.manager
                        .createQueryBuilder(test_questions_entity_1.TestQuestions, 'test_questions')
                        .insert()
                        .into(test_questions_entity_1.TestQuestions)
                        .values(Object.assign({}, newObj))
                        .execute();
                    arr.push(res);
                }
            }
            delete upDataBody.testQuestions;
            delete upDataBody.testOptions;
            const res = await queryRunner.manager
                .createQueryBuilder(testBank_entity_1.TestBank, 'test_bank')
                .update(testBank_entity_1.TestBank)
                .set(upDataBody)
                .where('id=:id', { id: upDataBody.id })
                .execute();
            arr.push(res);
            const res2 = await Promise.all(arr)
                .then(async () => {
                await queryRunner.commitTransaction();
                return true;
            })
                .catch(async (err) => {
                await queryRunner.rollbackTransaction();
                console.log('请求错误', err);
                throw new common_1.HttpException({
                    message: '请求失败',
                    error: '传入参数错误',
                }, common_1.HttpStatus.BAD_REQUEST);
            });
            return this.getOne(upDataBody.id);
        }
        catch (err) {
            console.log('服务器错误', err);
            await queryRunner.rollbackTransaction();
            throw new common_1.HttpException({
                message: '请求失败',
                error: '服务器异常',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        finally {
            await queryRunner.release();
        }
    }
    async upDateOneEdit(upDataBody) {
        const connection = (0, typeorm_2.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const arr = [];
            for (let j = 0; j < upDataBody.testOptions.length; j++) {
                const newObj = Object.assign(upDataBody.testOptions[j], {
                    testBank: upDataBody.id,
                });
                if (upDataBody.testOptions[j].id) {
                }
                else {
                    const res = await queryRunner.manager
                        .createQueryBuilder(test_options_entity_1.TestOptions, 'test_options')
                        .insert()
                        .into(test_options_entity_1.TestOptions)
                        .values(Object.assign({}, newObj))
                        .execute();
                    arr.push(res);
                }
            }
            for (let j = 0; j < upDataBody.testQuestions.length; j++) {
                const newObj = Object.assign(upDataBody.testQuestions[j], {
                    testBanks: upDataBody.id,
                });
                if (upDataBody.testQuestions[j].id) {
                }
                else {
                    const res = await queryRunner.manager
                        .createQueryBuilder(test_questions_entity_1.TestQuestions, 'test_questions')
                        .insert()
                        .into(test_questions_entity_1.TestQuestions)
                        .values(Object.assign({}, newObj))
                        .execute();
                    arr.push(res);
                }
            }
            delete upDataBody.testQuestions;
            delete upDataBody.testOptions;
            const res = await queryRunner.manager
                .createQueryBuilder(testBank_entity_1.TestBank, 'test_bank')
                .update(testBank_entity_1.TestBank)
                .set(upDataBody)
                .where('id=:id', { id: upDataBody.id })
                .execute();
            arr.push(res);
            const res2 = await Promise.all(arr)
                .then(async () => {
                await queryRunner.commitTransaction();
                return true;
            })
                .catch(async (err) => {
                await queryRunner.rollbackTransaction();
                console.log('请求错误', err);
                throw new common_1.HttpException({
                    message: '请求失败',
                    error: '传入参数错误',
                }, common_1.HttpStatus.BAD_REQUEST);
            });
            return this.getOne(upDataBody.id);
        }
        catch (err) {
            console.log('服务器错误', err);
            await queryRunner.rollbackTransaction();
            throw new common_1.HttpException({
                message: '请求失败',
                error: '服务器异常',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        finally {
            await queryRunner.release();
        }
    }
    async getQuestionsInStore(query) {
        let { questionType = undefined, questionLevel = undefined, keyValue = undefined, startTime = undefined, endTime = undefined, existingQuestions = undefined, treeIdList = undefined, } = query;
        if (questionType === '') {
            questionType = undefined;
        }
        if (questionLevel === '') {
            questionLevel = undefined;
        }
        if (keyValue === '') {
            keyValue = undefined;
        }
        if (startTime === '') {
            startTime = undefined;
        }
        if (endTime === '') {
            endTime = undefined;
        }
        if (existingQuestions === '') {
            existingQuestions = undefined;
        }
        if (treeIdList === '') {
            treeIdList = undefined;
        }
        const universalCondition = `(difficultyLevel = '不限难度' OR difficultyLevel = '容易' OR difficultyLevel = '中等' OR difficultyLevel = '困难')`;
        const result = await this.testBankRepository
            .createQueryBuilder('TestBank')
            .leftJoinAndSelect('TestBank.treePerson', 'tree_person')
            .where(questionType
            ? `TestBank.questionTypes = :questionType`
            : universalCondition, {
            questionType: questionType,
        })
            .andWhere(questionLevel
            ? 'TestBank.difficultyLevel = :questionLevel'
            : universalCondition, {
            questionLevel,
        })
            .andWhere(keyValue ? 'TestBank.examContent LIKE :keyValue' : universalCondition, {
            keyValue: '%' + keyValue + '%',
        })
            .andWhere(startTime ? ':startTime <= TestBank.create_at' : universalCondition, {
            startTime,
        })
            .andWhere(endTime ? ':endTime >= TestBank.create_at' : universalCondition, {
            endTime,
        })
            .getMany();
        let list = [...result];
        if (treeIdList) {
            treeIdList = treeIdList.split(',');
            treeIdList = treeIdList.map((item) => {
                return Number(item);
            });
            list = result.filter((item) => {
                return treeIdList.includes(item.treePerson.id);
            });
        }
        if (existingQuestions) {
            existingQuestions = existingQuestions.split(',');
            list = list.filter((item) => {
                return !existingQuestions.includes(item.id);
            });
        }
        return list;
    }
    async getQuestionList(query) {
        const { type, classify = [] } = query;
        let res = await this.testBankRepository
            .createQueryBuilder('TestBank')
            .leftJoinAndSelect('TestBank.treePerson', 'tree_person')
            .where('TestBank.questionTypes = :type', {
            type,
        })
            .getMany();
        if (classify && classify.length > 0) {
            res = res.filter((item) => {
                return classify.includes(item.treePerson.id);
            });
        }
        return res;
    }
    async getQuestionByList(list) {
        if (list.length <= 0) {
            return list;
        }
        const res = [];
        for (let i = 0; i < list.length; i++) {
            const result = await this.testBankRepository
                .createQueryBuilder('TestBank')
                .where('id = :id', { id: list[i] })
                .getOne();
            res.push(result);
        }
        return res;
    }
    async changeScoreValueList(body) {
        const { quesId, score } = body;
        const list = await this.testBankRepository
            .createQueryBuilder('TestBank')
            .leftJoinAndSelect('TestBank.paperBigQuestions', 'paper_big_question')
            .select(['TestBank.id'])
            .where('paper_big_question.id = :id', { id: quesId })
            .getMany();
        const idList = list.map((item) => {
            return item.id;
        });
        if (idList.length === 0) {
            return { msg: '修改失败，没有可修改试题' };
        }
        for (let i = 0; i < idList.length; i++) {
            await this.testBankRepository.update(idList[i], { gradeNum: score });
        }
        return { msg: '修改成功' };
    }
    async changeScoreValue(body) {
        const { testId, score } = body;
        const res = await this.testBankRepository.update(testId, {
            gradeNum: score,
        });
        return res;
    }
    async getQuestionTypes(query) {
        const { type } = query;
        let { classify = [] } = query;
        let res = await this.testBankRepository
            .createQueryBuilder('TestBank')
            .leftJoinAndSelect('TestBank.treePerson', 'tree_person')
            .where('TestBank.questionTypes = :type', {
            type,
        })
            .getMany();
        if (classify && classify.length > 0) {
            classify = classify.map((item) => {
                return Number(item);
            });
            res = res.filter((item) => {
                return classify.includes(item.treePerson.id);
            });
        }
        const obj = {
            noDifficulty: 0,
            easy: 0,
            medium: 0,
            difficulty: 0,
        };
        obj.noDifficulty = res.filter((item) => {
            return item.difficultyLevel === '不限难度';
        }).length;
        obj.easy = res.filter((item) => {
            return item.difficultyLevel === '容易';
        }).length;
        obj.medium = res.filter((item) => {
            return item.difficultyLevel === '中等';
        }).length;
        obj.difficulty = res.filter((item) => {
            return item.difficultyLevel === '困难';
        }).length;
        return obj;
    }
    async updateTestBank(body) {
        const { id, myanswer } = body;
        await this.testBankRepository
            .createQueryBuilder()
            .update(testBank_entity_1.TestBank)
            .set({ myanswer })
            .where('id = :id', { id })
            .execute();
    }
    async deleteStoreTest(id) {
        const res = await this.testBankRepository
            .createQueryBuilder('test')
            .leftJoin('test.paperBigQuestions', 'paper_big_question')
            .leftJoin('test.smokeStrategys', 'smoke_strategy')
            .select(['test', 'paper_big_question', 'smoke_strategy'])
            .where('test.id = :id', { id })
            .getOne();
        if (res.paperBigQuestions.length > 0) {
            return { code: -1, msg: '该题目已存在试卷中，请先移除试题后再删除!' };
        }
        if (res.smokeStrategys.length > 0) {
            return { code: -1, msg: '该题目已存在于抽题库中，请先移除试题后再删除!' };
        }
        await this.testBankRepository
            .createQueryBuilder()
            .delete()
            .from(testBank_entity_1.TestBank)
            .where('id = :id', { id })
            .execute();
        return { code: 1, msg: '删除成功' };
    }
    async deleteStoreTestGroup(body) {
        const { ids } = body;
        const resList = [];
        for (let i = 0; i < ids.length; i++) {
            const res = await this.deleteStoreTest(ids[i]);
            resList.push(res);
        }
        const failList = resList.filter((item) => {
            return item.code === -1;
        });
        if (failList.length > 0) {
            return { msg: '部分试题删除失败', code: -1 };
        }
        return { msg: '删除成功', code: 1 };
    }
};
TestBankService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(testBank_entity_1.TestBank)),
    __metadata("design:paramtypes", [tree_person_service_1.TreePersonService,
        typeorm_2.Repository])
], TestBankService);
exports.TestBankService = TestBankService;
function leftJoinAndSelect(arg0, arg1) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=testBank.service.js.map