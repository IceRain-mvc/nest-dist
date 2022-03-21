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
exports.AnalyseBouncedPracticeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const analyse_bounced_practice_entity_1 = require("./analyse-bounced-practice.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AnalyseBouncedPracticeService = class AnalyseBouncedPracticeService {
    constructor(practiceRepository) {
        this.practiceRepository = practiceRepository;
    }
    async create(examBody) {
        const res = this.practiceRepository.create(examBody);
        const list = await this.practiceRepository.save(res);
        try {
            return { code: '1', msg: '新增成功', list };
        }
        catch (_a) {
            throw new common_1.HttpException('数据新增失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getAll(query) {
        const { page = 1, pageSize = 5, condition, passState, today, time, keyword, identification, } = query;
        const order = 'DESC';
        const start = (page - 1) * pageSize;
        const searchTime = time ? JSON.parse(time) : undefined;
        let res = this.practiceRepository.createQueryBuilder('analyseBouncedPractice');
        if (identification) {
            res = res.where('analyseBouncedPractice.questionId=:identification', {
                identification,
            });
        }
        if (keyword) {
            res = res.andWhere('analyseBouncedPractice.names like :parameter', {
                parameter: `%${keyword}%`,
            });
        }
        let num = '';
        if (condition) {
            if (condition === '人脸认证中') {
                num = '1';
            }
            else if (condition === '人脸认证失败') {
                num = '2';
            }
            else if (condition === '考试中') {
                num = '3';
            }
            else if (condition === '已提交') {
                num = '4';
            }
            else if (condition === '已发布') {
                num = '5';
            }
            else if (condition === '已评卷') {
                num = '6';
            }
        }
        if (num) {
            res = res.andWhere('analyseBouncedPractice.state=:num', {
                num,
            });
        }
        let text = '';
        let fail = '';
        if (passState) {
            if (passState === '及格') {
                text = '75';
            }
            else if (passState === '不及格') {
                fail = '75';
            }
        }
        if (passState) {
            if (text) {
                res = res.andWhere('analyseBouncedPractice.achievement>=:text', {
                    text,
                });
            }
            if (fail) {
                res = res.andWhere('analyseBouncedPractice.achievement<:fail', {
                    fail,
                });
            }
        }
        if (today) {
            if (today === '1') {
                res = res
                    .andWhere('to_days(startTime)=to_days(now())')
                    .andWhere('to_days(endTime)=to_days(now())');
            }
            else if (today === '2') {
                res = res
                    .andWhere('to_days(now())-to_days(startTime)>=1')
                    .andWhere('to_days(now())-to_days(endTime)<=1');
            }
            else if (today === '3') {
                res = res
                    .andWhere('DATE_SUB(CURDATE(),INTERVAL 7 DAY)<=date(startTime)')
                    .andWhere('DATE_SUB(CURDATE(),INTERVAL 7 DAY)<=date(endTime)');
            }
        }
        if (searchTime) {
            if (searchTime.startTime) {
                res = res.andWhere('startTime > :start ', {
                    start: new Date(searchTime.startTime),
                });
            }
            if (searchTime.endTime) {
                res = res.andWhere('endTime < :end  ', {
                    end: new Date(searchTime.endTime),
                });
            }
        }
        res = res.skip(start).take(pageSize);
        res = res.orderBy('analyseBouncedPractice.achievement', order);
        const list = await res.getManyAndCount();
        try {
            if (keyword || time || num || text || fail || today) {
                return { code: '3', msg: '查询成功', data: list };
            }
            return {
                code: '1',
                msg: '查询成功',
                data: list,
            };
        }
        catch (_a) {
            throw new common_1.HttpException('数据未获取到啊怎么办', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async Update(amend) {
        const { id, text } = amend;
        if (text === undefined) {
            return { code: '02', msg: '请输入参数' };
        }
        const list = this.practiceRepository
            .createQueryBuilder('analyseBouncedPractice')
            .update('analyseBouncedPractice')
            .set({ achievement: text })
            .where('id=:id', { id })
            .execute();
        try {
            return { code: '01', msg: '修改成功', list };
        }
        catch (_a) { }
    }
};
AnalyseBouncedPracticeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(analyse_bounced_practice_entity_1.analyseBouncedPractice)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AnalyseBouncedPracticeService);
exports.AnalyseBouncedPracticeService = AnalyseBouncedPracticeService;
//# sourceMappingURL=analyse-bounced-practice.service.js.map