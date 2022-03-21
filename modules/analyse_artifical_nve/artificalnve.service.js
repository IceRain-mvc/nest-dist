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
exports.AnalyseArtificalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const artificalnve_entity_1 = require("./artificalnve.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AnalyseArtificalService = class AnalyseArtificalService {
    constructor(bouncedRepository) {
        this.bouncedRepository = bouncedRepository;
    }
    async create(examBody) {
        const res = this.bouncedRepository.create(examBody);
        const list = await this.bouncedRepository.save(res);
        return { code: '1', msg: '新增成功', list };
    }
    async getAll(query) {
        const { page = 1, pageSize = 5, condition, passState, today, time, keyword, identification, } = query;
        const order = 'DESC';
        const start = (page - 1) * pageSize;
        const searchTime = time ? JSON.parse(time) : undefined;
        let res = this.bouncedRepository.createQueryBuilder('ArtificalNve');
        if (identification) {
            res = res.where('ArtificalNve.questionId=:identification', {
                identification,
            });
        }
        if (keyword) {
            res = res.andWhere('ArtificalNve.names like :text', {
                text: `%${keyword}%`,
            });
        }
        let num = '';
        if (condition) {
            if (condition === '考试中') {
                num = '1';
            }
            else if (condition === '已提交') {
                num = '2';
            }
            else if (condition === '已发布') {
                num = '3';
            }
            else if (condition === '已评卷') {
                num = '4';
            }
        }
        if (num) {
            res = res.andWhere('ArtificalNve.state=:num', {
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
                res = res.andWhere('ArtificalNve.achievement>=:text', {
                    text,
                });
            }
            if (fail) {
                res = res.andWhere('ArtificalNve.achievement<:fail', {
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
        res = res.orderBy('ArtificalNve.achievement', order);
        return await res.getManyAndCount();
    }
    async Update(amend) {
        return this.bouncedRepository
            .createQueryBuilder('ArtificalNve')
            .update('ArtificalNve')
            .set({ achievement: amend.achievement })
            .where('names=:names', { names: amend.names }).execute;
    }
};
AnalyseArtificalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(artificalnve_entity_1.ArtificalNve)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AnalyseArtificalService);
exports.AnalyseArtificalService = AnalyseArtificalService;
//# sourceMappingURL=artificalnve.service.js.map