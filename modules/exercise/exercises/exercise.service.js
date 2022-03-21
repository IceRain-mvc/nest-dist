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
exports.ExerciseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exercise_entity_1 = require("./exercise.entity");
const typeorm_2 = require("typeorm");
const answer_time_entity_1 = require("../../answer-time/answer-time.entity");
const exam_time_entity_1 = require("../../exam-time/exam-time.entity");
const anti_cheating_config_entity_1 = require("../../anti-cheating-config/anti-cheating-config.entity");
const exam_config_require_entity_1 = require("../../exam-config-require/exam-config-require.entity");
const paper_mode_entity_1 = require("../../paper-mode/paper-mode.entity");
const get_score_config_entity_1 = require("../../get-score-config/get-score-config.entity");
const grade_config_entity_1 = require("../../grade-config/grade-config.entity");
const answer_equipment_entity_1 = require("../../answer-equipment/answer-equipment.entity");
const tree_person_entity_1 = require("../../tree-person/tree-person.entity");
const test_times_entity_1 = require("../../test-times/test-times.entity");
const paper_mode_require_entity_1 = require("../../paper-mode-require/paper-mode-require.entity");
const grade_config_require_entity_1 = require("../../grade-config-require/grade-config-require.entity");
const answer_equipment_require_entity_1 = require("../../answer-equipment-require/answer-equipment-require.entity");
const question_config_entity_1 = require("../../question-config/question-config.entity");
const tree_person_service_1 = require("../../tree-person/tree-person.service");
const students_service_1 = require("../../students/students.service");
const paper_big_question_service_1 = require("../../paper-big-question/paper-big-question.service");
const paper_exam_service_1 = require("../../paper-exam/paper-exam.service");
const smoke_strategy_service_1 = require("../../smoke-strategy/smoke-strategy.service");
const question_selection_strategy_service_1 = require("../../question-selection-strategy/question-selection-strategy.service");
const examinee_fill_message_service_1 = require("../../examinee-fill-message/examinee-fill-message.service");
const exam_config_service_1 = require("../../exam-config/exam-config.service");
const exercise_way_entity_1 = require("../exercise-way/exercise-way.entity");
var DateSelect;
(function (DateSelect) {
    DateSelect[DateSelect["exam_config.startDateTime > :date"] = 0] = "exam_config.startDateTime > :date";
    DateSelect[DateSelect[":date BETWEEN exam_config.startDateTime AND exam_config.endDateTime"] = 1] = ":date BETWEEN exam_config.startDateTime AND exam_config.endDateTime";
    DateSelect[DateSelect["exam_config.endDateTime < :date"] = 2] = "exam_config.endDateTime < :date";
    DateSelect[DateSelect["(exam_config.startDateTime > :date OR :date BETWEEN exam_config.startDateTime AND exam_config.endDateTime OR exam_config.endDateTime < :date)"] = 3] = "(exam_config.startDateTime > :date OR :date BETWEEN exam_config.startDateTime AND exam_config.endDateTime OR exam_config.endDateTime < :date)";
})(DateSelect || (DateSelect = {}));
const dataSearch = [
    'exercise.createAt',
    'exercise.createAt',
    'exercise.exerciseTitle',
    'exercise.exerciseTitle',
    'exam_config.startDateTime',
    'exam_config.startDateTime',
];
let ExerciseService = class ExerciseService {
    constructor(exerciseRepository, treePersonService, studentsService, paperExamService, paperBigQuestionService, smokeService, randomService, exerciseineeService, examConfigService) {
        this.exerciseRepository = exerciseRepository;
        this.treePersonService = treePersonService;
        this.studentsService = studentsService;
        this.paperExamService = paperExamService;
        this.paperBigQuestionService = paperBigQuestionService;
        this.smokeService = smokeService;
        this.randomService = randomService;
        this.exerciseineeService = exerciseineeService;
        this.examConfigService = examConfigService;
    }
    async create(body) {
        const { exercisePattern, exerciseTitle, treeId = 1, exerciseInstructions, joinWay = 1, openSignature, } = body;
        if (!exerciseTitle || exerciseTitle === '') {
            throw new common_1.HttpException('请输入正确的练习标题', common_1.HttpStatus.BAD_REQUEST);
        }
        const examList = await this.exerciseRepository.find();
        const create = examList.find((item) => {
            return item.exerciseTitle === exerciseTitle;
        });
        if (create) {
            const results = await this.getThisExerciseMessage(create.exerciseId);
            return { code: -1, exercise: results };
        }
        let { exerciseineeFillMessage = undefined, exerciseineesAndDepartments = undefined, } = body;
        if (joinWay !== 2 && joinWay !== 3) {
            body.exercisePassword = '';
        }
        if (joinWay === 2 &&
            !body.exercisePassword &&
            body.exercisePassword.length !== 6) {
            throw new common_1.HttpException('请输入6位考试口令', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!exerciseineeFillMessage) {
            exerciseineeFillMessage = [];
        }
        if (!exerciseineesAndDepartments) {
            exerciseineesAndDepartments = [];
        }
        exerciseineeFillMessage.forEach((item) => {
            if (item.format) {
                delete item.format;
            }
        });
        const manager = (0, typeorm_2.getManager)();
        const res = await this.exerciseRepository.create({
            exercisePattern,
            exerciseTitle,
            exerciseInstructions,
            exercisePassword: body.exercisePassword,
            openSignature: openSignature ? 1 : openSignature ? 0 : openSignature,
        });
        const result = await this.exerciseRepository.save(res);
        if (!result) {
            throw new common_1.HttpException('考试创建失败', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const treeRes = await manager.findOne(tree_person_entity_1.TreePerson, { id: treeId });
        if (!treeRes) {
            throw new common_1.HttpException('分类不存在', common_1.HttpStatus.NOT_FOUND);
        }
        result.treePerson = treeRes;
        const partRes = await manager.findOne(exercise_way_entity_1.ExerciseWay, {
            partId: joinWay,
        });
        if (!partRes) {
            throw new common_1.HttpException('考生参加考试方式不存在', common_1.HttpStatus.NOT_FOUND);
        }
        result.exerciseWay = partRes;
        if (joinWay === 1) {
            await this.exerciseineeService.createExercise(exerciseineeFillMessage, result.exerciseId);
        }
        else if (joinWay === 3) {
            await this.exerciseineeService.createExercise(exerciseineeFillMessage, result.exerciseId);
        }
        else if (joinWay === 4) {
            let students = [];
            const departments = [];
            exerciseineesAndDepartments.forEach((item) => {
                if (item.id) {
                    students.push(item.id);
                }
                if (item.departId) {
                    departments.push(item.departId);
                }
            });
            const partStr = departments.join('-');
            await this.exerciseRepository
                .createQueryBuilder()
                .update(exercise_entity_1.Exercise)
                .set({ partStr })
                .where('exerciseId = :exerciseId', { exerciseId: result.exerciseId })
                .execute();
            const studentList = [];
            students = [...new Set(students)];
            for (let i = 0; i < students.length; i++) {
                const singleStudent = await this.studentsService.getOne(students[i]);
                studentList.push(singleStudent);
            }
            result.students = studentList;
        }
        await manager.save(result);
        const examConfigs = await this.examConfigService.create();
        examConfigs.exercise = JSON.parse(JSON.stringify(result));
        await this.createExamManager(result, examConfigs, manager);
        return { code: 1, exercise: result };
    }
    async getThisExerciseMessage(id) {
        const exercise = await this.exerciseRepository
            .createQueryBuilder('Exercise')
            .leftJoin('Exercise.paperExam', 'paper_exam')
            .leftJoin('Exercise.exerciseWay', 'exercise_way')
            .leftJoin('Exercise.exerciseineeFillMessages', 'examinee_fill_message')
            .leftJoin('Exercise.students', 'students')
            .leftJoin('Exercise.treePerson', 'tree_person')
            .select([
            'Exercise.exerciseId',
            'Exercise.isPublish',
            'Exercise.qrCode',
            'Exercise.exerciseTitle',
            'Exercise.exerciseInstructions',
            'Exercise.openSignature',
            'Exercise.exercisePassword',
            'Exercise.partStr',
            'paper_exam.id',
            'paper_exam.paperType',
            'exercise_way.partId',
            'examinee_fill_message',
            'students.id',
            'students.studentName',
            'students.studentNumber',
            'students.eMail',
            'tree_person',
        ])
            .where('exercise.exerciseId = :id', { id })
            .getOne();
        switch (exercise.exerciseWay.partId) {
            case 1:
                delete exercise.exercisePassword;
                break;
            case 2:
                delete exercise.exerciseineeFillMessages;
                break;
            case 3:
                delete exercise.students;
                break;
            case 4:
                delete exercise.exercisePassword;
                delete exercise.exerciseineeFillMessages;
                break;
            default:
                break;
        }
        const treeMsg = await this.treePersonService.getNodeByCurrentId(exercise.treePerson.id);
        exercise.treePerson.title = treeMsg.fullTitles;
        const createdStudents = exercise.students;
        if (createdStudents) {
            for (let i = 0; i < createdStudents.length; i++) {
                const treeMsg = await this.studentsService.getDepartmentMessage(createdStudents[i].id);
                createdStudents[i].treePerson = treeMsg;
            }
        }
        console.log(exercise);
        if (exercise.partStr.length > 0) {
            const partArr = exercise.partStr.split('-');
            for (let i = 0; i < partArr.length; i++) {
                const partTitle = await this.treePersonService.getNodeByCurrentId(partArr[i]);
                exercise.students.push({
                    departId: Number(partArr[i]),
                    title: partTitle.fullTitles,
                });
            }
        }
        return exercise;
    }
    async updateThisExamMessage(body) {
        const { exerciseId, exerciseTitle, treeId = 1, exerciseInstructions, joinWay = 1, openSignature, } = body;
        if (!exerciseTitle || exerciseTitle === '') {
            throw new common_1.HttpException('请输入正确的考试标题', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!exerciseId || exerciseId === '' || typeof exerciseId !== 'string') {
            throw new common_1.HttpException('请输入正确的考试id', common_1.HttpStatus.BAD_REQUEST);
        }
        let { exerciseineeFillMessage = undefined, exerciseineesAndDepartments = undefined, } = body;
        if (joinWay !== 2 && joinWay !== 3) {
            body.exercisePassword = '';
        }
        if (!exerciseineeFillMessage) {
            exerciseineeFillMessage = [];
        }
        if (!exerciseineesAndDepartments) {
            exerciseineesAndDepartments = [];
        }
        exerciseineeFillMessage.forEach((item) => {
            if (item.format) {
                delete item.format;
            }
        });
        let students = [];
        const departments = [];
        exerciseineesAndDepartments.forEach((item) => {
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
        await this.exerciseRepository
            .createQueryBuilder()
            .update(exercise_entity_1.Exercise)
            .set({
            exerciseTitle,
            exerciseInstructions,
            openSignature,
            exercisePassword: body.exercisePassword,
            partStr,
        })
            .where('exerciseId = :exerciseId', { exerciseId })
            .execute();
        const result = await this.exerciseRepository.findOne(exerciseId);
        if (!result) {
            throw new common_1.HttpException('练习不存在', common_1.HttpStatus.NOT_FOUND);
        }
        const treeRes = await manager.findOne(tree_person_entity_1.TreePerson, { id: treeId });
        if (!treeRes) {
            throw new common_1.HttpException('当前分类不存在', common_1.HttpStatus.NOT_FOUND);
        }
        result.treePerson = treeRes;
        const partRes = await manager.findOne(exercise_way_entity_1.ExerciseWay, {
            partId: joinWay,
        });
        if (!partRes) {
            throw new common_1.HttpException('当前考生参加练习方式不存在', common_1.HttpStatus.NOT_FOUND);
        }
        result.exerciseWay = partRes;
        const messageResult = await this.exerciseRepository
            .createQueryBuilder('Exercise')
            .leftJoinAndSelect('Exercise.exerciseineeFillMessages', 'examinee_fill_message')
            .select(['Exercise.exerciseId', 'examinee_fill_message.examineeId'])
            .where('Exercise.exerciseId = :exerciseId', { exerciseId })
            .getOne();
        const messageList = messageResult.exerciseineeFillMessages;
        for (let i = 0; i < messageList.length; i++) {
            if (messageList[i].examineeId) {
                await this.exerciseineeService.deleteById(messageList[i].examineeId);
            }
        }
        if (joinWay === 1) {
            await this.exerciseineeService.createExercise(exerciseineeFillMessage, result.exerciseId);
        }
        else if (joinWay === 3) {
            await this.exerciseineeService.createExercise(exerciseineeFillMessage, result.exerciseId);
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
        const examList = await this.exerciseRepository
            .createQueryBuilder('exercise')
            .leftJoin('exercise.exerciseConfig', 'exam_config')
            .leftJoin('exercise.treePerson', 'tree_person')
            .leftJoin('exercise.exerciseWay', 'exercise_way')
            .leftJoin('exercise.paperExam', 'paper_exam')
            .select([
            'exercise.exerciseId',
            'exercise.exerciseTitle',
            'exam_config',
            'tree_person',
            'exercise.createAt',
            'exercise.isPublish',
            'exercise.star',
            'exercise.isDelete',
            'exercise.qrCode',
            'exercise_way.partTitle',
            'exercise.deleteTime',
            'exercise.exercisePattern',
            'paper_exam',
        ])
            .where(DateSelect[dateState], {
            date: new Date(),
        })
            .andWhere('exercise.isDelete = :isDelete', { isDelete: isDelete })
            .andWhere(star ? 'exercise.star = :star' : 'exercise.isDelete = :isDelete', {
            star,
            isDelete,
        })
            .andWhere(treeList.length > 0
            ? 'tree_person.id IN (' + treeList.join(',') + ')'
            : 'exercise.isDelete = :isDelete', {
            treeList,
            isDelete,
        })
            .andWhere(search !== ''
            ? 'exercise.exerciseTitle LIKE :search OR exercise.exerciseInstructions LIKE :search'
            : 'exercise.isDelete = :isDelete', {
            search: '%' + search + '%',
            isDelete,
        })
            .andWhere(startTime !== ''
            ? 'exercise.createAt >= :startTime'
            : 'exercise.isDelete = :isDelete', {
            startTime,
            isDelete,
        })
            .andWhere(endTime !== ''
            ? 'exercise.createAt <= :endTime'
            : 'exercise.isDelete = :isDelete', {
            endTime,
            isDelete,
        })
            .orderBy(dataSearch[sort], descOrAsc)
            .skip((page - 1) * count)
            .take(count)
            .getManyAndCount();
        return examList;
    }
    async getExamById(id) {
        let exam;
        try {
            exam = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .leftJoin('exercise.exerciseConfig', 'exam_config')
                .leftJoin('exercise.treePerson', 'tree_person')
                .leftJoin('exercise.participationWay', 'participation_way')
                .leftJoin('exercise.paperExam', 'paper_exam')
                .leftJoin('exercise.questionConfigs', 'question_config')
                .leftJoin('exercise.getScoreConfig', 'get_score_config')
                .leftJoin('exercise.gradeConfig', 'grade_config')
                .select([
                'exercise.exerciseId',
                'exercise.exerciseTitle',
                'exam_config',
                'tree_person',
                'exercise.createAt',
                'exercise.isPublish',
                'exercise.star',
                'exercise.isDelete',
                'exercise.qrCode',
                'participation_way.partTitle',
                'participation_way.partType',
                'exercise.deleteTime',
                'paper_exam.id',
                'paper_exam.paperType',
                'paper_exam.paperTitle',
                'question_config',
                'get_score_config',
                'grade_config',
            ])
                .where('exercise.exerciseId = :id', { id })
                .getOne();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            return null;
        }
        return exam;
    }
    async changeCurrentExamType(body) {
        const { exerciseId, id } = body;
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        if (typeof id !== 'number' || isNaN(id) || !id) {
            throw new common_1.HttpException('id应为非0数字型', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = await (0, typeorm_2.getManager)();
        let exercise;
        try {
            exercise = await this.exerciseRepository.findOne(exerciseId);
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exercise) {
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
        exercise.treePerson = await treePerson;
        await manager.save(exercise);
    }
    async getExamStateCount() {
        let running = 0;
        let willRun = 0;
        let runed = 0;
        try {
            running = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .leftJoinAndSelect('exercise.exerciseConfig', 'exam_config', 'exercise.isDelete = :isDelete', { isDelete: 0 })
                .where(':date BETWEEN exam_config.startDateTime AND exam_config.endDateTime', { date: new Date() })
                .getCount();
            willRun = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .leftJoinAndSelect('exercise.exerciseConfig', 'exam_config', 'exercise.isDelete = :isDelete', { isDelete: 0 })
                .where('exam_config.startDateTime > :date', { date: new Date() })
                .getCount();
            runed = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .leftJoinAndSelect('exercise.exerciseConfig', 'exam_config', 'exercise.isDelete = :isDelete', { isDelete: 0 })
                .where('exam_config.endDateTime < :date', { date: new Date() })
                .getCount();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
        }
        return { running, willRun, runed };
    }
    async setStarExam(body) {
        const { exerciseId } = body;
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .update(exercise_entity_1.Exercise)
                .set({ star: 1 })
                .where('exercise.exerciseId = :exerciseId', { exerciseId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async cancelStarExam(body) {
        const { exerciseId } = body;
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .update(exercise_entity_1.Exercise)
                .set({ star: 0 })
                .where('exercise.exerciseId = :exerciseId', { exerciseId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async removeToRecycleBin(exerciseId) {
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        const outTime = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
        let res;
        try {
            await this.exerciseRepository.update(exerciseId, { isPublish: 0 });
            res = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .update(exercise_entity_1.Exercise)
                .set({ isDelete: 1, deleteTime: outTime, isPublish: 0 })
                .where('exercise.exerciseId = :exerciseId', { exerciseId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async removeOutRecycleBin(exerciseId) {
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .update(exercise_entity_1.Exercise)
                .set({ isDelete: 0 })
                .where('exercise.exerciseId = :exerciseId', { exerciseId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async deleteExerciseInRecycleBin(exerciseId) {
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.exerciseRepository
                .createQueryBuilder('exercise')
                .delete()
                .from(exercise_entity_1.Exercise)
                .where('exerciseId = :exerciseId', { exerciseId })
                .execute();
        }
        catch (err) {
            console.log(err.name + ' ' + err.message);
            throw new common_1.HttpException(err.name + ' ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async saveExamTimeConfig(body) {
        const { exerciseId, examTimeIdList = [] } = body;
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(examTimeIdList)) {
            throw new common_1.HttpException('examTimeIdList应为一个数字型数组', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = (0, typeorm_2.getManager)();
        let exercise;
        try {
            exercise = await this.exerciseRepository.findOne({ exerciseId });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exercise) {
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
        exercise.exerciseTimes = examTimeList;
        let res;
        try {
            res = await manager.save(exercise);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async saveAnswerTimeConfig(body) {
        const { exerciseId, answerTimeIdList = [] } = body;
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(answerTimeIdList)) {
            throw new common_1.HttpException('examTimeIdList应为一个数字型数组', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = (0, typeorm_2.getManager)();
        let exercise;
        try {
            exercise = await this.exerciseRepository.findOne({ exerciseId });
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (!exercise) {
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
        exercise.answerTimes = answerTimeList;
        let res;
        try {
            res = await manager.save(exercise);
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async answerTimesRequire(body) {
        const { exerciseId, testTimesList = [] } = body;
        if (typeof exerciseId !== 'string') {
            throw new common_1.HttpException('exerciseId应为字符串类型uuid', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!Array.isArray(testTimesList)) {
            throw new common_1.HttpException('examTimeIdList应为一个数字型数组', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = (0, typeorm_2.getManager)();
        let exercise;
        try {
            exercise = await this.exerciseRepository.findOne({ exerciseId });
        }
        catch (err) {
            console.log(err.name + ':' + err.message);
            throw new common_1.HttpException(err.name + ':' + err.message, common_1.HttpStatus.BAD_REQUEST);
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
                console.log(err.name + ':' + err.message);
                throw new common_1.HttpException(err.name + ':' + err.message, common_1.HttpStatus.BAD_REQUEST);
            }
            if (!timesList) {
                throw new common_1.HttpException('当前考试可考次数设置选项id不存在', common_1.HttpStatus.BAD_REQUEST);
            }
            timesList.push(testTimes);
        }
        exercise.testTimes = timesList;
        let res;
        try {
            res = await manager.save(exercise);
        }
        catch (err) {
            console.log(err.name + ':' + err.message);
            throw new common_1.HttpException(err.name + ':' + err.message, common_1.HttpStatus.BAD_REQUEST);
        }
        return res;
    }
    async optionsGetScore(body) {
        console.log(body, 'body');
        const { exerciseId, id } = body;
        const manager = (0, typeorm_2.getManager)();
        const exercise = await this.exerciseRepository.findOne({ exerciseId });
        exercise.getScoreConfig = await manager.findOne(get_score_config_entity_1.GetScoreConfig, {
            getScoreId: id,
        });
        await manager.save(exercise);
    }
    async saveExamconfigRequire(body) {
        const { exerciseId, anexamconfiRequire = [] } = body;
        const manager = (0, typeorm_2.getManager)();
        const exercise = await this.exerciseRepository.findOne({ exerciseId });
        const examconfigrequreData = [];
        for (let i = 0; i < anexamconfiRequire.length; i++) {
            const [anexamconfige] = await Promise.all([
                manager.findOne(exam_config_require_entity_1.ExamConfigRequire, {
                    id: anexamconfiRequire[i],
                }),
            ]);
            examconfigrequreData.push(anexamconfige);
        }
        exercise.exerciseConfigRequires = examconfigrequreData;
        return '新增成功!';
    }
    async createExamManager(exercise, config, manager) {
        exercise.exerciseConfig = JSON.parse(JSON.stringify(config));
        exercise.paperMode = await manager.findOne(paper_mode_entity_1.PaperMode, { id: 1 });
        exercise.getScoreConfig = await manager.findOne(get_score_config_entity_1.GetScoreConfig, {
            getScoreId: 1,
        });
        exercise.gradeConfig = await manager.findOne(grade_config_entity_1.GradeConfig, { id: 1 });
        exercise.answerEquipment = await manager.findOne(answer_equipment_entity_1.AnswerEquipment, {
            id: 1,
        });
        await Promise.all([
            await manager.save(exercise),
            await manager.save(config),
        ]);
    }
    async getExamConfigSettings(id) {
        const exam = await this.exerciseRepository.findOne(id);
        if (!exam) {
            return '该考试已删除';
        }
        const settings = await this.exerciseRepository
            .createQueryBuilder('exercise')
            .leftJoin('exercise.exerciseConfig', 'exam_config')
            .leftJoin('exercise.exerciseTimes', 'exam_time')
            .leftJoin('exercise.answerTimes', 'answer_time')
            .leftJoin('exercise.testTimes', 'test_times')
            .leftJoin('exercise.paperMode', 'paper_mode')
            .leftJoin('exercise.paperModeRequires', 'paper_mode_require')
            .leftJoin('exercise.gradeConfig', 'grade_config')
            .leftJoin('exercise.gradeConfigRequires', 'grade_config_require')
            .leftJoin('exercise.exerciseConfigRequires', 'exam_config_require')
            .leftJoin('exercise.answerEquipment', 'answer_equipment')
            .leftJoin('exercise.answerEquipmentRequires', 'answer_equipment_require')
            .leftJoin('exercise.antiCheatingConfigs', 'anti_cheating_config')
            .leftJoin('exercise.questionConfigs', 'question_configs')
            .leftJoin('exercise.getScoreConfig', 'get_score_config')
            .select([
            'exercise.exerciseId',
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
            .where('exercise.exerciseId = :exerciseId', { exerciseId: id })
            .getMany();
        return this.dataProcess(settings[0]);
    }
    dataProcess(data) {
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
    async saveManagerExamRelations(select, exerciseId) {
        console.log(exerciseId);
        console.log(select);
        const { paperMode, paperModeRequires, gradeConfig, gradeConfigRequires, exerciseConfigRequires, answerEquipment, answerEquipmentRequires, antiCheatingConfigs, questionConfigs, } = select;
        const manager = (0, typeorm_2.getManager)();
        const exercise = await manager.findOne(exercise_entity_1.Exercise, { exerciseId });
        console.log(exercise);
        exercise.paperMode = await manager.findOne(paper_mode_entity_1.PaperMode, { id: paperMode.id });
        exercise.gradeConfig = await manager.findOne(grade_config_entity_1.GradeConfig, {
            id: gradeConfig.id,
        });
        exercise.answerEquipment = await manager.findOne(answer_equipment_entity_1.AnswerEquipment, {
            id: answerEquipment.id,
        });
        await this.paperModeConfig({
            paperModeConfigList: paperModeRequires,
            manager,
            exercise,
        });
        await this.gradeConfigRequire({
            gradeConfigRequiresList: gradeConfigRequires,
            manager,
            exercise,
        });
        await this.examRelationsConfig({
            examConfigsList: exerciseConfigRequires,
            manager,
            exercise,
        });
        await this.answerEquipmentConfig({
            answerEquipmentList: answerEquipmentRequires,
            manager,
            exercise,
        });
        await this.saveAntiCheatingConfig({
            antiCheatingIdList: antiCheatingConfigs,
            manager,
            exercise,
        });
        await this.saveTestConfig({
            questionConfigsList: questionConfigs,
            manager,
            exercise,
        });
    }
    async paperModeConfig(body) {
        const { paperModeConfigList = [], manager, exercise } = body;
        const paperModeList = [];
        for (let i = 0; i < paperModeConfigList.length; i++) {
            const [paperMode] = await Promise.all([
                manager.findOne(paper_mode_require_entity_1.PaperModeRequire, { id: paperModeConfigList[i] }),
            ]);
            paperModeList.push(paperMode);
        }
        exercise.paperModeRequires = paperModeList;
        await manager.save(exercise);
    }
    async gradeConfigRequire(body) {
        const { gradeConfigRequiresList = [], manager, exercise } = body;
        const gradeConfigList = [];
        for (let i = 0; i < gradeConfigRequiresList.length; i++) {
            const [gradeConfig] = await Promise.all([
                manager.findOne(grade_config_require_entity_1.GradeConfigRequire, { id: gradeConfigRequiresList[i] }),
            ]);
            gradeConfigList.push(gradeConfig);
        }
        exercise.gradeConfigRequires = gradeConfigList;
        await manager.save(exercise);
    }
    async examRelationsConfig(body) {
        const { examConfigsList = [], manager, exercise } = body;
        const examConfigList = [];
        for (let i = 0; i < examConfigsList.length; i++) {
            const [examConfig] = await Promise.all([
                manager.findOne(exam_config_require_entity_1.ExamConfigRequire, { id: examConfigsList[i] }),
            ]);
            examConfigList.push(examConfig);
        }
        exercise.exerciseConfigRequires = examConfigList;
        await manager.save(exercise);
    }
    async answerEquipmentConfig(body) {
        const { answerEquipmentList = [], manager, exercise } = body;
        const equipmentList = [];
        for (let i = 0; i < answerEquipmentList.length; i++) {
            const [equipment] = await Promise.all([
                manager.findOne(answer_equipment_require_entity_1.AnswerEquipmentRequire, { id: answerEquipmentList[i] }),
            ]);
            equipmentList.push(equipment);
        }
        exercise.answerEquipmentRequires = equipmentList;
        await manager.save(exercise);
    }
    async saveAntiCheatingConfig(body) {
        const { antiCheatingIdList = [], manager, exercise } = body;
        const antiCheatingList = [];
        for (let i = 0; i < antiCheatingIdList.length; i++) {
            const [antiCheating] = await Promise.all([
                manager.findOne(anti_cheating_config_entity_1.AntiCheatingConfig, {
                    antiCheatingId: antiCheatingIdList[i],
                }),
            ]);
            antiCheatingList.push(antiCheating);
        }
        exercise.antiCheatingConfigs = antiCheatingList;
        await manager.save(exercise);
    }
    async saveTestConfig(body) {
        const { questionConfigsList = [], manager, exercise } = body;
        const questionList = [];
        for (let i = 0; i < questionConfigsList.length; i++) {
            const [question] = await Promise.all([
                manager.findOne(question_config_entity_1.QuestionConfig, { id: questionConfigsList[i] }),
            ]);
            questionList.push(question);
        }
        exercise.questionConfigs = questionList;
        await manager.save(exercise);
    }
    async examCopy(body, newExercise, examineeFullMessageService, examConfigService) {
        const { exerciseId, type } = body;
        const message = await this.getExamFullMessage(exerciseId);
        const manager = await (0, typeorm_2.getManager)();
        const { exerciseTitle, exerciseInstructions, openSignature, exercisePassword, exerciseConfig, paperExam, exercisePattern, exerciseWay, exerciseineeFillMessages, students, exerciseTimes, answerTimes, testTimes, paperMode, paperModeRequires, gradeConfig, gradeConfigRequires, exerciseConfigRequires, answerEquipment, answerEquipmentRequires, antiCheatingConfigs, questionConfigs, getScoreConfig, treePerson, } = message[0];
        await this.updateExamMessage({
            exerciseId: newExercise.exercise.exerciseId,
            message: {
                exerciseTitle: exerciseTitle + newExercise.exercise.exerciseTitle,
                exerciseInstructions,
                openSignature,
                exercisePassword,
                exercisePattern,
            },
            exerciseWay,
            exerciseineeFillMessages,
            students,
            examineeFullMessageService,
            manager,
            exerciseTimes,
            answerTimes,
            testTimes,
            paperMode,
            paperModeRequires,
            gradeConfig,
            gradeConfigRequires,
            exerciseConfigRequires,
            answerEquipment,
            answerEquipmentRequires,
            antiCheatingConfigs,
            questionConfigs,
            getScoreConfig,
            treePerson,
            exercisePattern,
        });
        const config = Object.assign({}, exerciseConfig);
        delete config.id;
        await examConfigService.updateExamConfig(config, newExercise.exercise.exerciseConfig.id);
        if (type === 1) {
            if (!paperExam) {
                return { msg: '试卷未创建，无法复制' };
            }
            const { id } = paperExam;
            const paperFullMessage = await this.paperExamService.generatorPaper(id);
            delete paperExam.id;
            delete paperExam.createTime;
            delete paperExam.updateTime;
            const paper = await this.paperExamService.createExercise(Object.assign({ exerciseId: newExercise.exercise.exerciseId }, paperExam));
            const bigQuestionList = paperFullMessage.paperBigQuestions;
            for (let i = 0; i < bigQuestionList.length; i++) {
                const bigQuestionId = bigQuestionList[i].id;
                delete bigQuestionList[i].id;
                delete bigQuestionList[i].createTime;
                delete bigQuestionList[i].updateTime;
                const quesData = await this.paperBigQuestionService.create(Object.assign({ paperId: paper.paperId }, bigQuestionList[i]));
                if (paperExam.paperType === 1) {
                    const smokeRes = await this.paperBigQuestionService.getSmokes(bigQuestionId);
                    for (let j = 0; j < smokeRes.length; j++) {
                        const smokeId = smokeRes[j].id;
                        delete smokeRes[j].id;
                        const res = await this.smokeService.createStrategy(Object.assign({ id: quesData.data.id }, smokeRes[j]));
                        const strategySmoke = await this.smokeService.findStrategyById(res.data);
                        const smokeQuestionList = await this.smokeService.getStrategyQuestionList(smokeId);
                        strategySmoke.testBanks = smokeQuestionList.data;
                        await manager.save(strategySmoke);
                    }
                }
                if (paperExam.paperType === 2) {
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
    async getExamFullMessage(exerciseId) {
        const result = await this.exerciseRepository
            .createQueryBuilder('exercise')
            .leftJoin('exercise.exerciseConfig', 'exam_config')
            .leftJoin('exercise.exerciseWay', 'exercise_way')
            .leftJoin('exercise.exerciseineeFillMessages', 'examinee_fill_message')
            .leftJoin('exercise.students', 'students')
            .leftJoin('exercise.paperExam', 'paper_exam')
            .leftJoin('exercise.treePerson', 'tree_person')
            .leftJoin('exercise.exerciseTimes', 'exam_time')
            .leftJoin('exercise.answerTimes', 'answer_time')
            .leftJoin('exercise.testTimes', 'test_times')
            .leftJoin('exercise.paperMode', 'paper_mode')
            .leftJoin('exercise.paperModeRequires', 'paper_mode_require')
            .leftJoin('exercise.gradeConfig', 'grade_config')
            .leftJoin('exercise.gradeConfigRequires', 'grade_config_require')
            .leftJoin('exercise.exerciseConfigRequires', 'exam_config_require')
            .leftJoin('exercise.answerEquipment', 'answer_equipment')
            .leftJoin('exercise.answerEquipmentRequires', 'answer_equipment_require')
            .leftJoin('exercise.antiCheatingConfigs', 'anti_cheating_config')
            .leftJoin('exercise.questionConfigs', 'question_configs')
            .leftJoin('exercise.getScoreConfig', 'get_score_config')
            .select([
            'exercise',
            'exam_config',
            'exercise_way.partId',
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
            .where('exercise.exerciseId = :exerciseId', { exerciseId })
            .getMany();
        return result;
    }
    async updateExamMessage(body) {
        const { exerciseId, message, exerciseWay, exerciseineeFillMessages, students, examineeFullMessageService, manager, exerciseTimes, answerTimes, testTimes, paperMode, paperModeRequires, gradeConfig, gradeConfigRequires, exerciseConfigRequires, answerEquipment, answerEquipmentRequires, antiCheatingConfigs, questionConfigs, getScoreConfig, treePerson, } = body;
        const res = await this.exerciseRepository
            .createQueryBuilder('exercise')
            .update(exercise_entity_1.Exercise)
            .set(Object.assign({}, message))
            .where('exerciseId = :exerciseId', { exerciseId })
            .execute();
        const exercise = await this.exerciseRepository.findOne(exerciseId);
        const participation = await manager.findOne(exercise_way_entity_1.ExerciseWay, {
            partId: exerciseWay.partId,
        });
        exercise.exerciseWay = await participation;
        if (exerciseWay.partId === 1 || exerciseWay.partId === 3) {
            const list = [];
            exerciseineeFillMessages.forEach((item) => {
                list.push({
                    titleName: item.titleName,
                    formatRequire: item.formatRequire,
                    mandatory: item.mandatory,
                    optionsValue: item.optionsValue,
                });
            });
            await examineeFullMessageService.create(list, exerciseId);
        }
        if (exerciseWay.partId === 4) {
            const studentId = await this.getId(students);
            const studentList = [];
            for (let i = 0; i < studentId.length; i++) {
                const singleStudent = await this.studentsService.getOne(studentId[i]);
                studentList.push(singleStudent);
            }
            exercise.students = studentList;
        }
        exercise.paperMode = await manager.findOne(paper_mode_entity_1.PaperMode, { id: paperMode.id });
        exercise.gradeConfig = await manager.findOne(grade_config_entity_1.GradeConfig, {
            id: gradeConfig.id,
        });
        exercise.answerEquipment = await manager.findOne(answer_equipment_entity_1.AnswerEquipment, {
            id: answerEquipment.id,
        });
        exercise.getScoreConfig = await manager.findOne(get_score_config_entity_1.GetScoreConfig, {
            getScoreId: getScoreConfig.getScoreId,
        });
        exercise.treePerson = await manager.findOne(tree_person_entity_1.TreePerson, {
            id: treePerson.id,
        });
        const exerciseTimesId = await this.getId(exerciseTimes);
        await this.saveExamTimeConfig({
            exerciseId,
            examTimeIdList: exerciseTimesId,
        });
        const answerTimesId = await this.getId(answerTimes);
        await this.saveAnswerTimeConfig({
            exerciseId,
            answerTimeIdList: answerTimesId,
        });
        const testTimesId = await this.getId(testTimes);
        await this.answerTimesRequire({
            exerciseId,
            testTimesList: testTimesId,
        });
        const paperModeId = await this.getId(paperModeRequires);
        await this.paperModeConfig({
            paperModeConfigList: paperModeId,
            manager,
            exercise,
        });
        const gradeConfigId = this.getId(gradeConfigRequires);
        await this.gradeConfigRequire({
            gradeConfigRequiresList: gradeConfigId,
            manager,
            exercise,
        });
        const examConfigIdList = this.getId(exerciseConfigRequires);
        await this.examRelationsConfig({
            examConfigsList: examConfigIdList,
            manager,
            exercise,
        });
        const answerEquipmentId = await this.getId(answerEquipmentRequires);
        await this.answerEquipmentConfig({
            answerEquipmentList: answerEquipmentId,
            manager,
            exercise,
        });
        const antiCheatingId = await this.getId(antiCheatingConfigs);
        await this.saveAntiCheatingConfig({
            antiCheatingIdList: antiCheatingId,
            manager,
            exercise,
        });
        const questionsId = await this.getId(questionConfigs);
        await this.saveTestConfig({
            questionConfigsList: questionsId,
            manager,
            exercise,
        });
        await manager.save(exercise);
        return res;
    }
    async ExamInRecycleBinAll() {
        const res = await this.exerciseRepository
            .createQueryBuilder('exercise')
            .select(['exercise.exerciseId', 'exercise.isDelete'])
            .andWhere('exercise.isDelete = :isDelete', { isDelete: 1 })
            .getMany();
        return res;
    }
    async deleteExamInRecycleBinAll() {
        const res = this.ExamInRecycleBinAll();
        (await res).forEach((item) => {
            this.exerciseRepository
                .createQueryBuilder('exercise')
                .delete()
                .from(exercise_entity_1.Exercise)
                .where('exerciseId = :exerciseId', { exerciseId: item.exerciseId })
                .execute();
        });
        return res;
    }
    async getQuestion(id) {
        const exams = await this.exerciseRepository
            .createQueryBuilder('exercise')
            .select(['exercise.isPublish'])
            .where('exercise.exerciseId=:exerciseId', { exerciseId: id })
            .getOne();
        return exams;
    }
    async setIsPublish(examId) {
        if (!examId || typeof examId !== 'string') {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.exerciseRepository.update(examId, { isPublish: 1 });
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
        const { exerciseId, coder } = body;
        const res = await (0, typeorm_2.getManager)()
            .createQueryBuilder()
            .update(exercise_entity_1.Exercise)
            .set({ qrCode: coder })
            .where('exerciseId=:exerciseId', { exerciseId })
            .execute();
        return {
            data: res,
            msg: '添加成功',
        };
    }
};
ExerciseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exercise_entity_1.Exercise)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        tree_person_service_1.TreePersonService,
        students_service_1.StudentsService,
        paper_exam_service_1.PaperExamService,
        paper_big_question_service_1.PaperBigQuestionService,
        smoke_strategy_service_1.SmokeStrategyService,
        question_selection_strategy_service_1.QuestionSelectionStrategyService,
        examinee_fill_message_service_1.ExamineeFillMessageService,
        exam_config_service_1.ExamConfigService])
], ExerciseService);
exports.ExerciseService = ExerciseService;
//# sourceMappingURL=exercise.service.js.map