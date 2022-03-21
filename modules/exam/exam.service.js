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
exports.ExamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exam_entity_1 = require("./exam.entity");
const typeorm_2 = require("typeorm");
const answer_time_entity_1 = require("../answer-time/answer-time.entity");
const exam_time_entity_1 = require("../exam-time/exam-time.entity");
const anti_cheating_config_entity_1 = require("../anti-cheating-config/anti-cheating-config.entity");
const exam_config_require_entity_1 = require("../exam-config-require/exam-config-require.entity");
const paper_mode_entity_1 = require("../paper-mode/paper-mode.entity");
const get_score_config_entity_1 = require("../get-score-config/get-score-config.entity");
const grade_config_entity_1 = require("../grade-config/grade-config.entity");
const answer_equipment_entity_1 = require("../answer-equipment/answer-equipment.entity");
const tree_person_entity_1 = require("../tree-person/tree-person.entity");
const participation_way_entity_1 = require("../participation-way/participation-way.entity");
const test_times_entity_1 = require("../test-times/test-times.entity");
const paper_mode_require_entity_1 = require("../paper-mode-require/paper-mode-require.entity");
const grade_config_require_entity_1 = require("../grade-config-require/grade-config-require.entity");
const answer_equipment_require_entity_1 = require("../answer-equipment-require/answer-equipment-require.entity");
const question_config_entity_1 = require("../question-config/question-config.entity");
const tree_person_service_1 = require("../tree-person/tree-person.service");
const students_service_1 = require("../students/students.service");
const paper_big_question_service_1 = require("../paper-big-question/paper-big-question.service");
const paper_exam_service_1 = require("../paper-exam/paper-exam.service");
const smoke_strategy_service_1 = require("../smoke-strategy/smoke-strategy.service");
const question_selection_strategy_service_1 = require("../question-selection-strategy/question-selection-strategy.service");
const examinee_fill_message_service_1 = require("../examinee-fill-message/examinee-fill-message.service");
const exam_config_service_1 = require("../exam-config/exam-config.service");
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
let ExamService = class ExamService {
    constructor(examRepository, treePersonService, studentsService, paperExamService, paperBigQuestionService, smokeService, randomService, examineeService, examConfigService) {
        this.examRepository = examRepository;
        this.treePersonService = treePersonService;
        this.studentsService = studentsService;
        this.paperExamService = paperExamService;
        this.paperBigQuestionService = paperBigQuestionService;
        this.smokeService = smokeService;
        this.randomService = randomService;
        this.examineeService = examineeService;
        this.examConfigService = examConfigService;
    }
    async create(body) {
        const { examTitle, treeId = 1, examInstructions, joinWay = 1, openSignature, } = body;
        if (!examTitle || examTitle === '') {
            throw new common_1.HttpException('请输入正确的考试标题', common_1.HttpStatus.BAD_REQUEST);
        }
        const examList = await this.examRepository.find();
        const create = examList.find((item) => {
            return item.examTitle === examTitle;
        });
        if (create) {
            const results = await this.getThisExamMessage(create.examId);
            return { code: -1, exam: results };
        }
        let { examineeFillMessage = undefined, examineesAndDepartments = undefined, } = body;
        if (joinWay !== 2 && joinWay !== 3) {
            body.examPassword = '';
        }
        if (joinWay === 2 && !body.examPassword && body.examPassword.length !== 6) {
            throw new common_1.HttpException('请输入6位考试口令', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!examineeFillMessage) {
            examineeFillMessage = [];
        }
        if (!examineesAndDepartments) {
            examineesAndDepartments = [];
        }
        examineeFillMessage.forEach((item) => {
            if (item.format) {
                delete item.format;
            }
        });
        const manager = (0, typeorm_2.getManager)();
        const res = await this.examRepository.create({
            examTitle,
            examInstructions,
            examPassword: body.examPassword,
            openSignature: openSignature ? 1 : openSignature ? 0 : openSignature,
        });
        const result = await this.examRepository.save(res);
        if (!result) {
            throw new common_1.HttpException('考试创建失败', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const treeRes = await manager.findOne(tree_person_entity_1.TreePerson, { id: treeId });
        if (!treeRes) {
            throw new common_1.HttpException('分类不存在', common_1.HttpStatus.NOT_FOUND);
        }
        result.treePerson = treeRes;
        const partRes = await manager.findOne(participation_way_entity_1.ParticipationWay, {
            partId: joinWay,
        });
        if (!partRes) {
            throw new common_1.HttpException('考生参加考试方式不存在', common_1.HttpStatus.NOT_FOUND);
        }
        result.participationWay = partRes;
        if (joinWay === 1) {
            await this.examineeService.create(examineeFillMessage, result.examId);
        }
        else if (joinWay === 3) {
            await this.examineeService.create(examineeFillMessage, result.examId);
        }
        else if (joinWay === 4) {
            let students = [];
            const departments = [];
            examineesAndDepartments.forEach((item) => {
                if (item.id) {
                    students.push(item.id);
                }
                if (item.departId) {
                    departments.push(item.departId);
                }
            });
            const partStr = departments.join('-');
            try {
                await this.examRepository
                    .createQueryBuilder()
                    .update(exam_entity_1.Exam)
                    .set({ partStr })
                    .where('examId = :examId', { examId: result.examId })
                    .execute();
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            const studentList = [];
            students = [...new Set(students)];
            for (let i = 0; i < students.length; i++) {
                if (students[i]) {
                    const singleStudent = await this.studentsService.getOne(students[i]);
                    studentList.push(singleStudent);
                }
            }
            result.students = studentList;
        }
        await manager.save(result);
        const examConfigs = await this.examConfigService.create();
        examConfigs.exam = JSON.parse(JSON.stringify(result));
        await this.createExamManager(result, examConfigs, manager);
        return { code: 1, exam: result };
    }
    async getThisExamMessage(id) {
        let exam;
        try {
            exam = await this.examRepository
                .createQueryBuilder('Exam')
                .leftJoin('Exam.paperExam', 'paper_exam')
                .leftJoin('Exam.participationWay', 'participation_way')
                .leftJoin('Exam.examineeFillMessage', 'examinee_fill_message')
                .leftJoin('Exam.students', 'students')
                .leftJoin('Exam.treePerson', 'tree_person')
                .select([
                'Exam.examId',
                'Exam.isPublish',
                'Exam.qrCode',
                'Exam.examTitle',
                'Exam.examInstructions',
                'Exam.openSignature',
                'Exam.examPassword',
                'Exam.partStr',
                'paper_exam.id',
                'paper_exam.paperType',
                'participation_way.partId',
                'examinee_fill_message',
                'students.id',
                'students.studentName',
                'students.studentNumber',
                'students.eMail',
                'tree_person',
            ])
                .where('Exam.examId = :id', { id })
                .getOne();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exam) {
            throw new common_1.HttpException('当前考试不存在', common_1.HttpStatus.NOT_FOUND);
        }
        switch (exam.participationWay.partId) {
            case 1:
                delete exam.examPassword;
                break;
            case 2:
                delete exam.examineeFillMessage;
                break;
            case 3:
                delete exam.students;
                break;
            case 4:
                delete exam.examPassword;
                delete exam.examineeFillMessage;
                break;
            default:
                break;
        }
        if (!exam.treePerson || !exam.treePerson.id) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const treeMsg = await this.treePersonService.getNodeByCurrentId(exam.treePerson.id);
        if (!treeMsg) {
            throw new common_1.HttpException('数据不存在', common_1.HttpStatus.NOT_FOUND);
        }
        exam.treePerson.title = treeMsg.fullTitles;
        const createdStudents = exam.students;
        if (createdStudents) {
            for (let i = 0; i < createdStudents.length; i++) {
                if (!createdStudents[i] || !createdStudents[i].id) {
                    throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
                }
                createdStudents[i].treePerson =
                    await this.studentsService.getDepartmentMessage(createdStudents[i].id);
            }
        }
        console.log(exam);
        if (exam.partStr.length > 0) {
            const partArr = exam.partStr.split('-');
            for (let i = 0; i < partArr.length; i++) {
                const partTitle = await this.treePersonService.getNodeByCurrentId(partArr[i]);
                exam.students.push({
                    departId: Number(partArr[i]),
                    title: partTitle.fullTitles,
                });
            }
        }
        return exam;
    }
    async updateThisExamMessage(body) {
        const { examId, examTitle, treeId = 1, examInstructions, joinWay = 1, openSignature, } = body;
        if (!examTitle || examTitle === '') {
            throw new common_1.HttpException('请输入正确的考试标题', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!examId || examId === '' || typeof examId !== 'string') {
            throw new common_1.HttpException('请输入正确的考试id', common_1.HttpStatus.BAD_REQUEST);
        }
        let { examineeFillMessage = undefined, examineesAndDepartments = undefined, } = body;
        if (joinWay !== 2 && joinWay !== 3) {
            body.examPassword = '';
        }
        if (joinWay === 2 && !body.examPassword && body.examPassword.length !== 6) {
            throw new common_1.HttpException('请输入6位考试口令', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!examineeFillMessage) {
            examineeFillMessage = [];
        }
        if (!examineesAndDepartments) {
            examineesAndDepartments = [];
        }
        examineeFillMessage.forEach((item) => {
            if (item.format) {
                delete item.format;
            }
        });
        let students = [];
        const departments = [];
        examineesAndDepartments.forEach((item) => {
            if (item.id) {
                students.push(item.id);
            }
            if (item.departId) {
                departments.push(item.departId);
            }
        });
        const studentList = [];
        const partStr = departments.join('-');
        const manager = (0, typeorm_2.getManager)();
        await this.examRepository
            .createQueryBuilder()
            .update(exam_entity_1.Exam)
            .set({
            examTitle,
            examInstructions,
            openSignature,
            examPassword: body.examPassword,
            partStr,
        })
            .where('examId = :examId', { examId })
            .execute();
        const result = await this.examRepository.findOne(examId);
        if (!result) {
            throw new common_1.HttpException('考试不存在', common_1.HttpStatus.NOT_FOUND);
        }
        const treeRes = await manager.findOne(tree_person_entity_1.TreePerson, { id: treeId });
        if (!treeRes) {
            throw new common_1.HttpException('当前分类不存在', common_1.HttpStatus.NOT_FOUND);
        }
        result.treePerson = treeRes;
        const partRes = await manager.findOne(participation_way_entity_1.ParticipationWay, {
            partId: joinWay,
        });
        if (!partRes) {
            throw new common_1.HttpException('当前考生参加考试方式不存在', common_1.HttpStatus.NOT_FOUND);
        }
        result.participationWay = partRes;
        const messageResult = await this.examRepository
            .createQueryBuilder('Exam')
            .leftJoinAndSelect('Exam.examineeFillMessage', 'examinee_fill_message')
            .select(['Exam.examId', 'examinee_fill_message.examineeId'])
            .where('Exam.examId = :examId', { examId })
            .getOne();
        const messageList = messageResult.examineeFillMessage;
        for (let i = 0; i < messageList.length; i++) {
            if (messageList[i].examineeId) {
                await this.examineeService.deleteById(messageList[i].examineeId);
            }
        }
        if (joinWay === 1) {
            await this.examineeService.create(examineeFillMessage, result.examId);
        }
        else if (joinWay === 3) {
            await this.examineeService.create(examineeFillMessage, result.examId);
        }
        else if (joinWay === 4) {
            students = [...new Set(students)];
            for (let i = 0; i < students.length; i++) {
                if (students[i]) {
                    const singleStudent = await this.studentsService.getOne(students[i]);
                    studentList.push(singleStudent);
                }
            }
            result.students = studentList;
        }
        await manager.save(result);
        return result;
    }
    async getExamList(query) {
        const { isDelete = 0, dateState = 3, star = null, page = 1, count = 5, sort = 0, treeList = [], startTime = '', endTime = '', search = '', } = query;
        if (page <= 0) {
            return [[], 0];
        }
        const descOrAsc = sort % 2 === 0 ? 'DESC' : 'ASC';
        let examList;
        try {
            examList = await this.examRepository
                .createQueryBuilder('exam')
                .leftJoin('exam.examConfig', 'exam_config')
                .leftJoin('exam.treePerson', 'tree_person')
                .leftJoin('exam.participationWay', 'participation_way')
                .leftJoin('exam.paperExam', 'paper_exam')
                .leftJoin('exam.phones', 'students_mark')
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
                'students_mark',
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
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return examList;
    }
    async getExamById(id) {
        let exam;
        try {
            exam = await this.examRepository
                .createQueryBuilder('exam')
                .leftJoin('exam.examConfig', 'exam_config')
                .leftJoin('exam.treePerson', 'tree_person')
                .leftJoin('exam.participationWay', 'participation_way')
                .leftJoin('exam.paperExam', 'paper_exam')
                .leftJoin('exam.questionConfigs', 'question_config')
                .leftJoin('exam.getScoreConfig', 'get_score_config')
                .leftJoin('exam.gradeConfig', 'grade_config')
                .leftJoin('exam.antiCheatingConfigs', 'anti_cheating_config')
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
                'participation_way.partType',
                'exam.deleteTime',
                'paper_exam.id',
                'paper_exam.paperType',
                'paper_exam.paperTitle',
                'question_config',
                'get_score_config',
                'grade_config',
                'anti_cheating_config',
            ])
                .where('exam.examId = :id', { id })
                .getOne();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return exam;
    }
    async changeCurrentExamType(body) {
        const { examId, id } = body;
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        if (typeof id !== 'number' || isNaN(id) || !id) {
            throw new common_1.HttpException('id应为非0数字型', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = await (0, typeorm_2.getManager)();
        let exam;
        try {
            exam = await this.examRepository.findOne(examId);
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exam) {
            throw new common_1.HttpException('当前examId查找不到对应数据', common_1.HttpStatus.NOT_FOUND);
        }
        let treePerson;
        try {
            treePerson = await manager.findOne(tree_person_entity_1.TreePerson, { id });
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!treePerson) {
            throw new common_1.HttpException('当前考试分类id查找不到对应数据', common_1.HttpStatus.NOT_FOUND);
        }
        exam.treePerson = await treePerson;
        await manager.save(exam);
    }
    async getExamStateCount() {
        let running = 0;
        let willRun = 0;
        let runed = 0;
        try {
            running = await this.examRepository
                .createQueryBuilder('exam')
                .leftJoinAndSelect('exam.examConfig', 'exam_config', 'exam.isDelete = :isDelete', { isDelete: 0 })
                .where(':date BETWEEN exam_config.startDateTime AND exam_config.endDateTime', { date: new Date() })
                .getCount();
            willRun = await this.examRepository
                .createQueryBuilder('exam')
                .leftJoinAndSelect('exam.examConfig', 'exam_config', 'exam.isDelete = :isDelete', { isDelete: 0 })
                .where('exam_config.startDateTime > :date', { date: new Date() })
                .getCount();
            runed = await this.examRepository
                .createQueryBuilder('exam')
                .leftJoinAndSelect('exam.examConfig', 'exam_config', 'exam.isDelete = :isDelete', { isDelete: 0 })
                .where('exam_config.endDateTime < :date', { date: new Date() })
                .getCount();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
        }
        return { running, willRun, runed };
    }
    async setStarExam(body) {
        const { examId } = body;
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.examRepository
                .createQueryBuilder('exam')
                .update(exam_entity_1.Exam)
                .set({ star: 1 })
                .where('exam.examId = :examId', { examId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async cancelStarExam(body) {
        const { examId } = body;
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.examRepository
                .createQueryBuilder('exam')
                .update(exam_entity_1.Exam)
                .set({ star: 0 })
                .where('exam.examId = :examId', { examId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async removeToRecycleBin(examId) {
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        const outTime = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
        let res;
        try {
            await this.examRepository.update(examId, { isPublish: 0 });
            res = await this.examRepository
                .createQueryBuilder('exam')
                .update(exam_entity_1.Exam)
                .set({ isDelete: 1, deleteTime: outTime, isPublish: 0 })
                .where('exam.examId = :examId', { examId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async removeOutRecycleBin(examId) {
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.examRepository
                .createQueryBuilder('exam')
                .update(exam_entity_1.Exam)
                .set({ isDelete: 0 })
                .where('exam.examId = :examId', { examId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async deleteExamInRecycleBin(examId) {
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.examRepository
                .createQueryBuilder('exam')
                .delete()
                .from(exam_entity_1.Exam)
                .where('examId = :examId', { examId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async saveExamTimeConfig(body) {
        const { examId, examTimeIdList = [] } = body;
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(examTimeIdList)) {
            throw new common_1.HttpException('examTimeIdList应为一个数字型数组', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = (0, typeorm_2.getManager)();
        let exam;
        try {
            exam = await this.examRepository.findOne({ examId });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exam) {
            throw new common_1.HttpException('当前考试信息不存在', common_1.HttpStatus.NOT_FOUND);
        }
        const examTimeList = [];
        for (let i = 0; i < examTimeIdList.length; i++) {
            if (!examTimeIdList[i] ||
                typeof examTimeIdList[i] !== 'number' ||
                isNaN(examTimeIdList[i])) {
                throw new common_1.HttpException('每个元素应为数字型', common_1.HttpStatus.BAD_REQUEST);
            }
            let examTime;
            try {
                [examTime] = await Promise.all([
                    manager.findOne(exam_time_entity_1.ExamTime, {
                        examTimeId: examTimeIdList[i],
                    }),
                ]);
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!examTime) {
                throw new common_1.HttpException('当前考试时间设置信息不存在', common_1.HttpStatus.NOT_FOUND);
            }
            examTimeList.push(examTime);
        }
        exam.examTimes = examTimeList;
        let res;
        try {
            res = await manager.save(exam);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async saveAnswerTimeConfig(body) {
        const { examId, answerTimeIdList = [] } = body;
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(answerTimeIdList)) {
            throw new common_1.HttpException('examTimeIdList应为一个数字型数组', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = (0, typeorm_2.getManager)();
        let exam;
        try {
            exam = await this.examRepository.findOne({ examId });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exam) {
            throw new common_1.HttpException('当前考试信息不存在', common_1.HttpStatus.NOT_FOUND);
        }
        const answerTimeList = [];
        for (let i = 0; i < answerTimeIdList.length; i++) {
            if (!answerTimeIdList[i] ||
                typeof answerTimeIdList[i] !== 'number' ||
                isNaN(answerTimeIdList[i])) {
                throw new common_1.HttpException('每个元素应为非0数字型', common_1.HttpStatus.BAD_REQUEST);
            }
            let answerTime;
            try {
                [answerTime] = await Promise.all([
                    manager.findOne(answer_time_entity_1.AnswerTime, {
                        answerTimeId: answerTimeIdList[i],
                    }),
                ]);
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!answerTime) {
                throw new common_1.HttpException('当前考试答题时间设置选项id不存在', common_1.HttpStatus.NOT_FOUND);
            }
            answerTimeList.push(answerTime);
        }
        exam.answerTimes = answerTimeList;
        let res;
        try {
            res = await manager.save(exam);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async answerTimesRequire(body) {
        const { examId, testTimesList = [] } = body;
        if (typeof examId !== 'string') {
            throw new common_1.HttpException('examId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(testTimesList)) {
            throw new common_1.HttpException('examTimeIdList应为一个数字型数组', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = (0, typeorm_2.getManager)();
        let exam;
        try {
            exam = await this.examRepository.findOne({ examId });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const timesList = [];
        for (let i = 0; i < testTimesList.length; i++) {
            if (!testTimesList[i] ||
                typeof testTimesList[i] !== 'number' ||
                isNaN(testTimesList[i])) {
                throw new common_1.HttpException('每个元素应为非0数字型', common_1.HttpStatus.BAD_REQUEST);
            }
            let testTimes;
            try {
                [testTimes] = await Promise.all([
                    manager.findOne(test_times_entity_1.TestTimes, { id: testTimesList[i] }),
                ]);
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!testTimes) {
                throw new common_1.HttpException('当前考试可考次数设置选项id不存在', common_1.HttpStatus.NOT_FOUND);
            }
            timesList.push(testTimes);
        }
        exam.testTimes = timesList;
        let res;
        try {
            res = await manager.save(exam);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async optionsGetScore(body) {
        const { examId, id } = body;
        if (!examId || !id || isNaN(id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = (0, typeorm_2.getManager)();
        const exam = await this.examRepository.findOne({ examId });
        if (!exam) {
            throw new common_1.HttpException('当前考试未找到', common_1.HttpStatus.NOT_FOUND);
        }
        const getRes = await manager.findOne(get_score_config_entity_1.GetScoreConfig, {
            getScoreId: id,
        });
        if (!getRes) {
            throw new common_1.HttpException('当前考试未找到', common_1.HttpStatus.NOT_FOUND);
        }
        exam.getScoreConfig = getRes;
        await manager.save(exam);
    }
    async saveExamconfigRequire(body) {
        const { examId, anexamconfiRequire = [] } = body;
        if (!examId || examId !== 'string') {
            throw new common_1.HttpException('考试id不存在或考试id不为字符型', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(anexamconfiRequire)) {
            throw new common_1.HttpException('考试设置选项应为数组', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = (0, typeorm_2.getManager)();
        let exam;
        try {
            exam = await this.examRepository.findOne({ examId });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exam) {
            throw new common_1.HttpException('当前考试未找到', common_1.HttpStatus.NOT_FOUND);
        }
        const examconfigrequreData = [];
        for (let i = 0; i < anexamconfiRequire.length; i++) {
            if (!anexamconfiRequire[i] ||
                typeof anexamconfiRequire[i] !== 'number' ||
                isNaN(anexamconfiRequire[i])) {
                throw new common_1.HttpException('考试设置选项id应为非0数字型', common_1.HttpStatus.BAD_REQUEST);
            }
            let anexamconfige;
            try {
                [anexamconfige] = await Promise.all([
                    manager.findOne(exam_config_require_entity_1.ExamConfigRequire, {
                        id: anexamconfiRequire[i],
                    }),
                ]);
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!anexamconfige) {
                throw new common_1.HttpException('当前考试设置选项未找到', common_1.HttpStatus.NOT_FOUND);
            }
            examconfigrequreData.push(anexamconfige);
        }
        exam.examConfigRequires = examconfigrequreData;
        try {
            await manager.save(exam);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return '新增成功!';
    }
    async createExamManager(exam, config, manager) {
        try {
            exam.examConfig = JSON.parse(JSON.stringify(config));
            exam.paperMode = await manager.findOne(paper_mode_entity_1.PaperMode, { id: 1 });
            exam.getScoreConfig = await manager.findOne(get_score_config_entity_1.GetScoreConfig, {
                getScoreId: 1,
            });
            exam.gradeConfig = await manager.findOne(grade_config_entity_1.GradeConfig, { id: 1 });
            exam.answerEquipment = await manager.findOne(answer_equipment_entity_1.AnswerEquipment, { id: 1 });
            await Promise.all([await manager.save(exam), await manager.save(config)]);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getExamConfigSettings(id) {
        if (!id || typeof id !== 'string') {
            throw new common_1.HttpException('考试id应为字符型', common_1.HttpStatus.BAD_REQUEST);
        }
        let exam;
        try {
            exam = await this.examRepository.findOne(id);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exam) {
            throw new common_1.HttpException('考试未找到', common_1.HttpStatus.NOT_FOUND);
        }
        let settings;
        try {
            settings = await this.examRepository
                .createQueryBuilder('exam')
                .leftJoin('exam.examConfig', 'exam_config')
                .leftJoin('exam.examTimes', 'exam_time')
                .leftJoin('exam.answerTimes', 'answer_time')
                .leftJoin('exam.testTimes', 'test_times')
                .leftJoin('exam.paperMode', 'paper_mode')
                .leftJoin('exam.paperModeRequires', 'paper_mode_require')
                .leftJoin('exam.gradeConfig', 'grade_config')
                .leftJoin('exam.gradeConfigRequires', 'grade_config_require')
                .leftJoin('exam.examConfigRequires', 'exam_config_require')
                .leftJoin('exam.answerEquipment', 'answer_equipment')
                .leftJoin('exam.answerEquipmentRequires', 'answer_equipment_require')
                .leftJoin('exam.antiCheatingConfigs', 'anti_cheating_config')
                .leftJoin('exam.questionConfigs', 'question_configs')
                .leftJoin('exam.getScoreConfig', 'get_score_config')
                .select([
                'exam.examId',
                'exam_config',
                'exam_time.examTimeId',
                'answer_time.answerTimeId',
                'test_times.id',
                'paper_mode.id',
                'paper_mode_require.id',
                'grade_config.id',
                'grade_config_require.id',
                'exam_config_require.id',
                'answer_equipment.id',
                'answer_equipment_require.id',
                'anti_cheating_config.antiCheatingId',
                'question_configs.id',
                'get_score_config.getScoreId',
            ])
                .where('exam.examId = :examId', { examId: id })
                .getMany();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!settings) {
            throw new common_1.HttpException('考试设置信息未找到', common_1.HttpStatus.NOT_FOUND);
        }
        return this.dataProcess(settings[0]);
    }
    dataProcess(data) {
        if (!data) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const namesList = Object.getOwnPropertyNames(data);
        namesList.forEach((item) => {
            if (Array.isArray(data[item])) {
                data[item] = data[item].map((el) => {
                    const names = Object.getOwnPropertyNames(el);
                    return el[names[0]];
                });
            }
        });
        return data;
    }
    async saveManagerExamRelations(select, examId) {
        if (!examId || typeof examId !== 'string') {
            throw new common_1.HttpException('考试id不存在或考试id不为字符串型', common_1.HttpStatus.BAD_REQUEST);
        }
        const { paperMode, paperModeRequires, gradeConfig, gradeConfigRequires, examConfigRequires, answerEquipment, answerEquipmentRequires, antiCheatingConfigs, questionConfigs, } = select;
        const manager = (0, typeorm_2.getManager)();
        let exam;
        try {
            exam = await manager.findOne(exam_entity_1.Exam, { examId });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exam) {
            throw new common_1.HttpException('考试信息未找到', common_1.HttpStatus.NOT_FOUND);
        }
        if (!paperMode ||
            !paperMode.id ||
            typeof paperMode.id !== 'number' ||
            isNaN(paperMode.id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            exam.paperMode = await manager.findOne(paper_mode_entity_1.PaperMode, { id: paperMode.id });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!gradeConfig ||
            !gradeConfig.id ||
            typeof gradeConfig.id !== 'number' ||
            isNaN(gradeConfig.id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            exam.gradeConfig = await manager.findOne(grade_config_entity_1.GradeConfig, {
                id: gradeConfig.id,
            });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!answerEquipment ||
            !answerEquipment ||
            typeof answerEquipment.id !== 'number' ||
            isNaN(answerEquipment.id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            exam.answerEquipment = await manager.findOne(answer_equipment_entity_1.AnswerEquipment, {
                id: answerEquipment.id,
            });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        await this.paperModeConfig({
            paperModeConfigList: paperModeRequires,
            manager,
            exam,
        });
        await this.gradeConfigRequire({
            gradeConfigRequiresList: gradeConfigRequires,
            manager,
            exam,
        });
        await this.examRelationsConfig({
            examConfigsList: examConfigRequires,
            manager,
            exam,
        });
        await this.answerEquipmentConfig({
            answerEquipmentList: answerEquipmentRequires,
            manager,
            exam,
        });
        await this.saveAntiCheatingConfig({
            antiCheatingIdList: antiCheatingConfigs,
            manager,
            exam,
        });
        await this.saveTestConfig({
            questionConfigsList: questionConfigs,
            manager,
            exam,
        });
    }
    async paperModeConfig(body) {
        const { paperModeConfigList = [], manager, exam } = body;
        if (!manager || !exam) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(paperModeConfigList)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const paperModeList = [];
        for (let i = 0; i < paperModeConfigList.length; i++) {
            if (!paperModeConfigList[i] || isNaN(paperModeConfigList[i])) {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            const [paperMode] = await Promise.all([
                manager.findOne(paper_mode_require_entity_1.PaperModeRequire, { id: paperModeConfigList[i] }),
            ]);
            if (!paperMode) {
                throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
            }
            paperModeList.push(paperMode);
        }
        exam.paperModeRequires = paperModeList;
        await manager.save(exam);
    }
    async gradeConfigRequire(body) {
        const { gradeConfigRequiresList = [], manager, exam } = body;
        if (!manager || !exam) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(gradeConfigRequiresList)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const gradeConfigList = [];
        for (let i = 0; i < gradeConfigRequiresList.length; i++) {
            if (!gradeConfigRequiresList[i] || isNaN(gradeConfigRequiresList[i])) {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            const [gradeConfig] = await Promise.all([
                manager.findOne(grade_config_require_entity_1.GradeConfigRequire, { id: gradeConfigRequiresList[i] }),
            ]);
            if (!gradeConfig) {
                throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
            }
            gradeConfigList.push(gradeConfig);
        }
        exam.gradeConfigRequires = gradeConfigList;
        await manager.save(exam);
    }
    async examRelationsConfig(body) {
        const { examConfigsList = [], manager, exam } = body;
        if (!manager || !exam) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(examConfigsList)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const examConfigList = [];
        for (let i = 0; i < examConfigsList.length; i++) {
            if (!examConfigsList[i] || isNaN(examConfigsList[i])) {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            const [examConfig] = await Promise.all([
                manager.findOne(exam_config_require_entity_1.ExamConfigRequire, { id: examConfigsList[i] }),
            ]);
            if (!examConfig) {
                throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
            }
            examConfigList.push(examConfig);
        }
        exam.examConfigRequires = examConfigList;
        await manager.save(exam);
    }
    async answerEquipmentConfig(body) {
        const { answerEquipmentList = [], manager, exam } = body;
        if (!manager || !exam) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(answerEquipmentList)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const equipmentList = [];
        for (let i = 0; i < answerEquipmentList.length; i++) {
            if (!answerEquipmentList[i] || isNaN(answerEquipmentList[i])) {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            const [equipment] = await Promise.all([
                manager.findOne(answer_equipment_require_entity_1.AnswerEquipmentRequire, { id: answerEquipmentList[i] }),
            ]);
            if (!equipment) {
                throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
            }
            equipmentList.push(equipment);
        }
        exam.answerEquipmentRequires = equipmentList;
        await manager.save(exam);
    }
    async saveAntiCheatingConfig(body) {
        const { antiCheatingIdList = [], manager, exam } = body;
        if (!exam) {
            throw new common_1.HttpException('当前考试不存在', common_1.HttpStatus.NOT_FOUND);
        }
        if (!manager) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(antiCheatingIdList)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const antiCheatingList = [];
        for (let i = 0; i < antiCheatingIdList.length; i++) {
            if (!antiCheatingIdList[i] ||
                typeof antiCheatingIdList[i] !== 'number' ||
                isNaN(antiCheatingIdList[i])) {
                throw new common_1.HttpException('防作弊设置id应为非0数字型', common_1.HttpStatus.BAD_REQUEST);
            }
            let antiCheating;
            try {
                [antiCheating] = await Promise.all([
                    manager.findOne(anti_cheating_config_entity_1.AntiCheatingConfig, {
                        antiCheatingId: antiCheatingIdList[i],
                    }),
                ]);
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!antiCheating) {
                throw new common_1.HttpException('防作弊设置选项不存在', common_1.HttpStatus.NOT_FOUND);
            }
            antiCheatingList.push(antiCheating);
        }
        exam.antiCheatingConfigs = antiCheatingList;
        try {
            await manager.save(exam);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async saveTestConfig(body) {
        const { questionConfigsList = [], manager, exam } = body;
        if (!manager || !exam) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(questionConfigsList)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const questionList = [];
        for (let i = 0; i < questionConfigsList.length; i++) {
            if (!questionConfigsList[i] || isNaN(questionConfigsList[i])) {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            const [question] = await Promise.all([
                manager.findOne(question_config_entity_1.QuestionConfig, { id: questionConfigsList[i] }),
            ]);
            if (!question) {
                throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
            }
            questionList.push(question);
        }
        exam.questionConfigs = questionList;
        await manager.save(exam);
    }
    async examCopy(body, newExam, examineeFullMessageService, examConfigService) {
        const { examId, type } = body;
        if (!examId ||
            typeof examId !== 'string' ||
            (type !== 0 && type !== 1) ||
            typeof type !== 'number' ||
            isNaN(type)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const message = await this.getExamFullMessage(examId);
        const manager = await (0, typeorm_2.getManager)();
        const { examTitle, examInstructions, openSignature, examPassword, examConfig, paperExam, participationWay, examineeFillMessage, students, examTimes, answerTimes, testTimes, paperMode, paperModeRequires, gradeConfig, gradeConfigRequires, examConfigRequires, answerEquipment, answerEquipmentRequires, antiCheatingConfigs, questionConfigs, getScoreConfig, treePerson, } = message[0];
        await this.updateExamMessage({
            examId: newExam.exam.examId,
            message: {
                examTitle: examTitle + newExam.exam.examTitle,
                examInstructions,
                openSignature,
                examPassword,
            },
            participationWay,
            examineeFillMessage,
            students,
            examineeFullMessageService,
            manager,
            examTimes,
            answerTimes,
            testTimes,
            paperMode,
            paperModeRequires,
            gradeConfig,
            gradeConfigRequires,
            examConfigRequires,
            answerEquipment,
            answerEquipmentRequires,
            antiCheatingConfigs,
            questionConfigs,
            getScoreConfig,
            treePerson,
        });
        const config = Object.assign({}, examConfig);
        delete config.id;
        await examConfigService.updateExamConfig(config, newExam.exam.examConfig.id);
        if (type === 1) {
            if (!paperExam) {
                return { msg: '试卷未创建，无法复制' };
            }
            const { id } = paperExam;
            if (!id || typeof id !== 'number' || isNaN(id)) {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            const paperFullMessage = await this.paperExamService.generatorPaper(id);
            delete paperExam.id;
            delete paperExam.createTime;
            delete paperExam.updateTime;
            const paper = await this.paperExamService.create(Object.assign({ examId: newExam.exam.examId }, paperExam));
            const bigQuestionList = paperFullMessage.paperBigQuestions;
            for (let i = 0; i < bigQuestionList.length; i++) {
                if (!bigQuestionList[i]) {
                    throw new common_1.HttpException('资源不存在', common_1.HttpStatus.NOT_FOUND);
                }
                const bigQuestionId = bigQuestionList[i].id;
                delete bigQuestionList[i].id;
                delete bigQuestionList[i].createTime;
                delete bigQuestionList[i].updateTime;
                const quesData = await this.paperBigQuestionService.create(Object.assign({ paperId: paper.paperId }, bigQuestionList[i]));
                if (!bigQuestionId) {
                    throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
                }
                if (paperExam.paperType === 1) {
                    const smokeRes = await this.paperBigQuestionService.getSmokes(bigQuestionId);
                    for (let j = 0; j < smokeRes.length; j++) {
                        const smokeId = smokeRes[j].id;
                        delete smokeRes[j].id;
                        const res = await this.smokeService.createStrategy(Object.assign({ id: quesData.data.id }, smokeRes[j]));
                        const strategySmoke = await this.smokeService.findStrategyById(res.data);
                        if (!smokeId) {
                            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
                        }
                        const smokeQuestionList = await this.smokeService.getStrategyQuestionList(smokeId);
                        strategySmoke.testBanks = smokeQuestionList.data;
                        await manager.save(strategySmoke);
                    }
                }
                if (paperExam.paperType && paperExam.paperType === 2) {
                    const randomRes = await this.paperBigQuestionService.getRandoms(bigQuestionId);
                    for (let j = 0; j < randomRes.length; j++) {
                        delete randomRes[j].id;
                        await this.randomService.create(Object.assign({ id: quesData.data.id }, randomRes[j]));
                    }
                }
                quesData.data.testBanks = bigQuestionList[i].testBanks;
                await manager.save(quesData.data);
            }
        }
        return { msg: '复制成功' };
    }
    async getId(array) {
        if (!Array.isArray(array)) {
            return null;
        }
        return array.map((item) => {
            return item[Object.getOwnPropertyNames(item)[0]];
        });
    }
    async getExamFullMessage(examId) {
        if (!examId || typeof examId !== 'string') {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let result;
        try {
            result = await this.examRepository
                .createQueryBuilder('exam')
                .leftJoin('exam.examConfig', 'exam_config')
                .leftJoin('exam.participationWay', 'participation_way')
                .leftJoin('exam.examineeFillMessage', 'examinee_fill_message')
                .leftJoin('exam.students', 'students')
                .leftJoin('exam.paperExam', 'paper_exam')
                .leftJoin('exam.treePerson', 'tree_person')
                .leftJoin('exam.examTimes', 'exam_time')
                .leftJoin('exam.answerTimes', 'answer_time')
                .leftJoin('exam.testTimes', 'test_times')
                .leftJoin('exam.paperMode', 'paper_mode')
                .leftJoin('exam.paperModeRequires', 'paper_mode_require')
                .leftJoin('exam.gradeConfig', 'grade_config')
                .leftJoin('exam.gradeConfigRequires', 'grade_config_require')
                .leftJoin('exam.examConfigRequires', 'exam_config_require')
                .leftJoin('exam.answerEquipment', 'answer_equipment')
                .leftJoin('exam.answerEquipmentRequires', 'answer_equipment_require')
                .leftJoin('exam.antiCheatingConfigs', 'anti_cheating_config')
                .leftJoin('exam.questionConfigs', 'question_configs')
                .leftJoin('exam.getScoreConfig', 'get_score_config')
                .select([
                'exam',
                'exam_config',
                'participation_way.partId',
                'examinee_fill_message',
                'students.id',
                'paper_exam',
                'tree_person.id',
                'exam_time.examTimeId',
                'answer_time.answerTimeId',
                'test_times.id',
                'paper_mode.id',
                'paper_mode_require.id',
                'grade_config.id',
                'grade_config_require.id',
                'exam_config_require.id',
                'answer_equipment.id',
                'answer_equipment_require.id',
                'anti_cheating_config.antiCheatingId',
                'question_configs.id',
                'get_score_config.getScoreId',
            ])
                .where('exam.examId = :examId', { examId })
                .getMany();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!result) {
            throw new common_1.HttpException('当前考试信息未找到', common_1.HttpStatus.NOT_FOUND);
        }
        return result;
    }
    async updateExamMessage(body) {
        const { examId, message, participationWay, examineeFillMessage, students, examineeFullMessageService, manager, examTimes, answerTimes, testTimes, paperMode, paperModeRequires, gradeConfig, gradeConfigRequires, examConfigRequires, answerEquipment, answerEquipmentRequires, antiCheatingConfigs, questionConfigs, getScoreConfig, treePerson, } = body;
        if (!examId || typeof examId !== 'string') {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!message) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.examRepository
                .createQueryBuilder('exam')
                .update(exam_entity_1.Exam)
                .set(Object.assign({}, message))
                .where('examId = :examId', { examId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (res.affected === 0) {
            throw new common_1.HttpException('当前考试未找到', common_1.HttpStatus.NOT_FOUND);
        }
        let exam;
        try {
            exam = await this.examRepository.findOne(examId);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exam) {
            throw new common_1.HttpException('当前考试信息未找到', common_1.HttpStatus.NOT_FOUND);
        }
        if (!participationWay ||
            !participationWay.partId ||
            typeof participationWay.partId !== 'number' ||
            isNaN(participationWay.partId)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let participation;
        try {
            participation = await manager.findOne(participation_way_entity_1.ParticipationWay, {
                partId: participationWay.partId,
            });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!participation) {
            throw new common_1.HttpException('相关信息未找到', common_1.HttpStatus.NOT_FOUND);
        }
        exam.participationWay = await participation;
        if (participationWay.partId === 1 || participationWay.partId === 3) {
            const list = [];
            if (!Array.isArray(examineeFillMessage)) {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            examineeFillMessage.forEach((item) => {
                list.push({
                    titleName: item.titleName,
                    formatRequire: item.formatRequire,
                    mandatory: item.mandatory,
                    optionsValue: item.optionsValue,
                });
            });
            await examineeFullMessageService.create(list, examId);
        }
        if (participationWay.partId === 4) {
            const studentId = await this.getId(students);
            const studentList = [];
            for (let i = 0; i < studentId.length; i++) {
                if (!studentId[i]) {
                    throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
                }
                const singleStudent = await this.studentsService.getOne(studentId[i]);
                studentList.push(singleStudent);
            }
            exam.students = studentList;
        }
        if (!paperMode ||
            !paperMode.id ||
            typeof paperMode.id !== 'number' ||
            isNaN(paperMode.id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const paperModeRes = await manager.findOne(paper_mode_entity_1.PaperMode, { id: paperMode.id });
        if (!paperModeRes) {
            throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
        }
        exam.paperMode = paperModeRes;
        if (!gradeConfig ||
            !gradeConfig.id ||
            typeof gradeConfig.id !== 'number' ||
            isNaN(gradeConfig.id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const gradeConfigRes = await manager.findOne(grade_config_entity_1.GradeConfig, {
            id: gradeConfig.id,
        });
        if (!gradeConfigRes) {
            throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
        }
        exam.gradeConfig = gradeConfigRes;
        if (!answerEquipment ||
            !answerEquipment.id ||
            typeof answerEquipment.id !== 'number' ||
            isNaN(answerEquipment.id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const answerEquipmentRes = await manager.findOne(answer_equipment_entity_1.AnswerEquipment, {
            id: answerEquipment.id,
        });
        if (!answerEquipmentRes) {
            throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
        }
        exam.answerEquipment = answerEquipmentRes;
        if (!getScoreConfig ||
            !getScoreConfig.getScoreId ||
            typeof getScoreConfig.getScoreId !== 'number' ||
            isNaN(getScoreConfig.getScoreId)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const getScoreConfigRes = await manager.findOne(get_score_config_entity_1.GetScoreConfig, {
            getScoreId: getScoreConfig.getScoreId,
        });
        if (!getScoreConfigRes) {
            throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
        }
        exam.getScoreConfig = getScoreConfigRes;
        if (!treePerson ||
            !treePerson.id ||
            typeof treePerson.id !== 'number' ||
            isNaN(treePerson.id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const treePersonRes = await manager.findOne(tree_person_entity_1.TreePerson, {
            id: treePerson.id,
        });
        if (!treePersonRes) {
            throw new common_1.HttpException('数据未找到', common_1.HttpStatus.NOT_FOUND);
        }
        exam.treePerson = treePersonRes;
        const examTimesId = await this.getId(examTimes);
        await this.saveExamTimeConfig({
            examId,
            examTimeIdList: examTimesId,
        });
        const answerTimesId = await this.getId(answerTimes);
        await this.saveAnswerTimeConfig({
            examId,
            answerTimeIdList: answerTimesId,
        });
        const testTimesId = await this.getId(testTimes);
        await this.answerTimesRequire({
            examId,
            testTimesList: testTimesId,
        });
        const paperModeId = await this.getId(paperModeRequires);
        await this.paperModeConfig({
            paperModeConfigList: paperModeId,
            manager,
            exam,
        });
        const gradeConfigId = this.getId(gradeConfigRequires);
        await this.gradeConfigRequire({
            gradeConfigRequiresList: gradeConfigId,
            manager,
            exam,
        });
        const examConfigIdList = this.getId(examConfigRequires);
        await this.examRelationsConfig({
            examConfigsList: examConfigIdList,
            manager,
            exam,
        });
        const answerEquipmentId = await this.getId(answerEquipmentRequires);
        await this.answerEquipmentConfig({
            answerEquipmentList: answerEquipmentId,
            manager,
            exam,
        });
        const antiCheatingId = await this.getId(antiCheatingConfigs);
        await this.saveAntiCheatingConfig({
            antiCheatingIdList: antiCheatingId,
            manager,
            exam,
        });
        const questionsId = await this.getId(questionConfigs);
        await this.saveTestConfig({
            questionConfigsList: questionsId,
            manager,
            exam,
        });
        await manager.save(exam);
        return res;
    }
    async ExamInRecycleBinAll() {
        let res;
        try {
            res = await this.examRepository
                .createQueryBuilder('exam')
                .select(['exam.examId', 'exam.isDelete'])
                .andWhere('exam.isDelete = :isDelete', { isDelete: 1 })
                .getMany();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!res) {
            throw new common_1.HttpException('当前考试信息不存在', common_1.HttpStatus.NOT_FOUND);
        }
        return res;
    }
    async deleteExamInRecycleBinAll() {
        const res = this.ExamInRecycleBinAll();
        try {
            (await res).forEach((item) => {
                this.examRepository
                    .createQueryBuilder('exam')
                    .delete()
                    .from(exam_entity_1.Exam)
                    .where('examId = :examId', { examId: item.examId })
                    .execute();
            });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async getQuestion(id) {
        if (!id || typeof id !== 'string') {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let exams;
        try {
            exams = await this.examRepository
                .createQueryBuilder('exam')
                .select(['exam.isPublish'])
                .where('exam.examId=:examId', { examId: id })
                .getOne();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exams) {
            throw new common_1.HttpException('当前考试不存在', common_1.HttpStatus.NOT_FOUND);
        }
        return exams;
    }
    async setIsPublish(examId) {
        if (!examId || typeof examId !== 'string') {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.examRepository.update(examId, { isPublish: 1 });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (res.affected === 0) {
            throw new common_1.HttpException('当前考试不存在', common_1.HttpStatus.NOT_FOUND);
        }
        return { msg: '修改成功' };
    }
    async saveQrcode(body) {
        const { examId, coder } = body;
        if (!examId ||
            typeof examId !== 'string' ||
            !coder ||
            typeof coder !== 'string') {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await (0, typeorm_2.getManager)()
                .createQueryBuilder()
                .update(exam_entity_1.Exam)
                .set({ qrCode: coder })
                .where('examId=:examId', { examId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (res.affected === 0) {
            throw new common_1.HttpException('当前考试不存在', common_1.HttpStatus.NOT_FOUND);
        }
        return '添加成功';
    }
};
ExamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exam_entity_1.Exam)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        tree_person_service_1.TreePersonService,
        students_service_1.StudentsService,
        paper_exam_service_1.PaperExamService,
        paper_big_question_service_1.PaperBigQuestionService,
        smoke_strategy_service_1.SmokeStrategyService,
        question_selection_strategy_service_1.QuestionSelectionStrategyService,
        examinee_fill_message_service_1.ExamineeFillMessageService,
        exam_config_service_1.ExamConfigService])
], ExamService);
exports.ExamService = ExamService;
//# sourceMappingURL=exam.service.js.map