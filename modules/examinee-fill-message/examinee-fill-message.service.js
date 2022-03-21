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
exports.ExamineeFillMessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const examinee_fill_message_entity_1 = require("./examinee-fill-message.entity");
const typeorm_2 = require("typeorm");
const exam_entity_1 = require("../exam/exam.entity");
const exercise_entity_1 = require("../exercise/exercises/exercise.entity");
let ExamineeFillMessageService = class ExamineeFillMessageService {
    constructor(examineeFillMessageRepository) {
        this.examineeFillMessageRepository = examineeFillMessageRepository;
    }
    async create(body, examId) {
        const manager = (0, typeorm_2.getManager)();
        for (let i = 0; i < body.length; i++) {
            const { titleName, formatRequire, mandatory = 0, optionsValue = null, } = body[i];
            if (!titleName || typeof titleName !== 'string') {
                throw new common_1.HttpException('请输入标题', common_1.HttpStatus.BAD_REQUEST);
            }
            if (!formatRequire || typeof formatRequire !== 'string') {
                throw new common_1.HttpException('请输入类型', common_1.HttpStatus.BAD_REQUEST);
            }
            let res;
            try {
                res = await this.examineeFillMessageRepository.create({
                    titleName,
                    formatRequire,
                    mandatory,
                    optionsValue: Array.isArray(optionsValue)
                        ? optionsValue.join('-')
                        : optionsValue,
                });
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!res) {
                throw new common_1.HttpException('创建失败', common_1.HttpStatus.BAD_REQUEST);
            }
            const message = await this.examineeFillMessageRepository.save(res);
            if (!examId || typeof examId !== 'string') {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            let exam;
            try {
                exam = manager.findOne(exam_entity_1.Exam, { examId });
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!exam) {
                throw new common_1.HttpException('考试不存在', common_1.HttpStatus.NOT_FOUND);
            }
            message.exam = await exam;
            try {
                await manager.save(message);
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return '添加成功';
    }
    async createExercise(body, examId) {
        const manager = (0, typeorm_2.getManager)();
        for (let i = 0; i < body.length; i++) {
            const { titleName, formatRequire, mandatory = 0, optionsValue = null, } = body[i];
            if (!titleName || typeof titleName !== 'string') {
                throw new common_1.HttpException('请输入标题', common_1.HttpStatus.BAD_REQUEST);
            }
            if (!formatRequire || typeof formatRequire !== 'string') {
                throw new common_1.HttpException('请输入类型', common_1.HttpStatus.BAD_REQUEST);
            }
            let res;
            try {
                res = await this.examineeFillMessageRepository.create({
                    titleName,
                    formatRequire,
                    mandatory,
                    optionsValue: Array.isArray(optionsValue)
                        ? optionsValue.join('-')
                        : optionsValue,
                });
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!res) {
                throw new common_1.HttpException('创建失败', common_1.HttpStatus.BAD_REQUEST);
            }
            const message = await this.examineeFillMessageRepository.save(res);
            if (!examId || typeof examId !== 'string') {
                throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
            }
            let exam;
            try {
                exam = manager.findOne(exercise_entity_1.Exercise, { exerciseId: examId });
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!exam) {
                throw new common_1.HttpException('考试不存在', common_1.HttpStatus.NOT_FOUND);
            }
            message.exercise = await exam;
            try {
                await manager.save(message);
            }
            catch (err) {
                console.log(err.name + ': ' + err.message);
                throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return '添加成功';
    }
    async deleteById(id) {
        let res;
        try {
            res = await this.examineeFillMessageRepository
                .createQueryBuilder()
                .delete()
                .from(examinee_fill_message_entity_1.ExamineeFillMessage)
                .where('examineeId = :id', { id })
                .execute();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
};
ExamineeFillMessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(examinee_fill_message_entity_1.ExamineeFillMessage)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExamineeFillMessageService);
exports.ExamineeFillMessageService = ExamineeFillMessageService;
//# sourceMappingURL=examinee-fill-message.service.js.map