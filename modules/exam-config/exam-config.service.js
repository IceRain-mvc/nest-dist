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
exports.ExamConfigService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exam_config_entity_1 = require("./exam-config.entity");
const typeorm_2 = require("typeorm");
let ExamConfigService = class ExamConfigService {
    constructor(ExamConfigService) {
        this.ExamConfigService = ExamConfigService;
    }
    async create() {
        const res = await this.ExamConfigService.create({
            startDateTime: new Date(),
            endDateTime: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
        });
        const result = await this.ExamConfigService.save(res);
        if (!result) {
            throw new common_1.HttpException('创建失败', common_1.HttpStatus.BAD_REQUEST);
        }
        return result;
    }
    async getAll() {
        const res = await this.ExamConfigService.find();
        if (!res) {
            throw new common_1.HttpException('查询失败', common_1.HttpStatus.NOT_FOUND);
        }
        return res;
    }
    async updateExamConfig(body, id) {
        if (!id || typeof id !== 'number' || isNaN(id)) {
            throw new common_1.HttpException('考试设置id应为非0数字型', common_1.HttpStatus.BAD_REQUEST);
        }
        const { passingGrade = 0, startDateTime, endDateTime, answerTime, answerTimes, limitAnswerSeconds, errorAnswers = 0, publishResultTime, beforeFaceCertification = 0, faceTimes, headPhone, tapOutTime, tapTimes, noOperationTime, limitAnswerTimes, allowSubmitTime = 0, lateEntryTime = 0, regressionGetResultAccount, passingMessage, noPassingMessage, passingHref, noPassingHref, fullMarks = 0, integral = 0, } = body;
        if (!startDateTime ||
            new Date(startDateTime).toDateString() === 'Invalid Date' ||
            !endDateTime ||
            new Date(startDateTime).toDateString() === 'Invalid Date') {
            throw new common_1.HttpException('考试开始时间或结束时间参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            await this.ExamConfigService.createQueryBuilder('exam_config')
                .update(exam_config_entity_1.ExamConfig)
                .set({
                passingGrade,
                startDateTime,
                endDateTime,
                answerTime,
                answerTimes,
                limitAnswerSeconds,
                errorAnswers,
                publishResultTime,
                beforeFaceCertification,
                faceTimes,
                headPhone,
                tapOutTime,
                tapTimes,
                noOperationTime,
                limitAnswerTimes,
                allowSubmitTime,
                lateEntryTime,
                regressionGetResultAccount,
                passingMessage,
                noPassingMessage,
                passingHref,
                noPassingHref,
                fullMarks,
                integral,
            })
                .where('exam_config.id = :id', { id })
                .execute();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async cutScreenConfig(body) {
        const { id, times } = body;
        if (!id || isNaN(id) || !times || isNaN(times)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.ExamConfigService.createQueryBuilder('exam_config')
                .update(exam_config_entity_1.ExamConfig)
                .set({ timingCapturedTime: times })
                .where('exam_config.id = :id', { id })
                .execute();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
    async setOptionsPercentage(body) {
        const { id, percentage } = body;
        if (!id || isNaN(id)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!percentage || isNaN(percentage)) {
            throw new common_1.HttpException('参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        let res;
        try {
            res = await this.ExamConfigService.createQueryBuilder('exam_config')
                .update(exam_config_entity_1.ExamConfig)
                .set({ regressionGetResultAccount: percentage })
                .where('exam_config.id = :id', { id })
                .execute();
        }
        catch (err) {
            console.log(err.name + ': ' + err.message);
            throw new common_1.HttpException(err.name + ': ' + err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
};
ExamConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exam_config_entity_1.ExamConfig)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExamConfigService);
exports.ExamConfigService = ExamConfigService;
//# sourceMappingURL=exam-config.service.js.map