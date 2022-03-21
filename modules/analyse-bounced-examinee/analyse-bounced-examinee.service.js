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
exports.AnalyseBouncedExamineesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const analyse_bounced_examinee_entity_1 = require("./analyse-bounced-examinee.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AnalyseBouncedExamineesService = class AnalyseBouncedExamineesService {
    constructor(bouncedRepository) {
        this.bouncedRepository = bouncedRepository;
    }
    async create(examBody) {
        const res = this.bouncedRepository.create(examBody);
        const list = await this.bouncedRepository.save(res);
        try {
            return { code: '1', msg: '新增成功', list };
        }
        catch (_a) {
            throw new common_1.HttpException('数据新增失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getAll(query) {
        const { page = 1, pageSize = 5, condition, passState, today, time, keyword, identification, } = query;
        console.log(query);
        const start = (page - 1) * pageSize;
        const searchTime = time ? JSON.parse(time) : undefined;
        let res = this.bouncedRepository
            .createQueryBuilder('analyseBouncedExaminees')
            .where('analyseBouncedExaminees.questionId=:identification', {
            identification,
        });
        if (keyword) {
            res = res.where('analyseBouncedExaminees.names like :parameter', {
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
            res = res.andWhere('analyseBouncedExaminees.state=:num', {
                num,
            });
        }
        let text = '';
        if (passState) {
            if (passState === '及格') {
                text = '1';
            }
            else if (passState === '不及格') {
                text = '2';
            }
        }
        if (text) {
            res = res.andWhere('analyseBouncedExaminees.cut=:text', {
                text,
            });
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
        res = res.orderBy('analyseBouncedExaminees.achievement', 'DESC');
        res = res.skip(start).take(pageSize);
        const list = await res.getManyAndCount();
        try {
            if (keyword !== undefined || searchTime || num || text || today) {
                return { code: '3', msg: '查询成功', list };
            }
            return { code: '1', msg: '获取成功', list };
        }
        catch (_a) {
            throw new common_1.HttpException('数据未获取到啊怎么办', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async Update(amend) {
        const { id, text } = amend;
        if (text === undefined) {
            return { code: '02', msg: '请输入有效参数' };
        }
        const list = this.bouncedRepository
            .createQueryBuilder('analyseBouncedExaminees')
            .update('analyseBouncedExaminees')
            .set({ achievement: text })
            .where('id=:id', { id })
            .execute();
        try {
            return { code: '01', msg: '修改成功', list };
        }
        catch (_a) {
            throw new common_1.HttpException('数据修改失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
AnalyseBouncedExamineesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(analyse_bounced_examinee_entity_1.analyseBouncedExaminees)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AnalyseBouncedExamineesService);
exports.AnalyseBouncedExamineesService = AnalyseBouncedExamineesService;
//# sourceMappingURL=analyse-bounced-examinee.service.js.map