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
exports.AnalyseStatisticalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const analyse_statistical_entity_1 = require("./analyse-statistical.entity");
let AnalyseStatisticalService = class AnalyseStatisticalService {
    constructor(statisticalRepository) {
        this.statisticalRepository = statisticalRepository;
    }
    async create(examBody) {
        const res = this.statisticalRepository.create(examBody);
        const list = await this.statisticalRepository.save(res);
        try {
            return { code: '1', msg: '新增成功', list };
        }
        catch (_a) {
            throw new common_1.HttpException('数据新增失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getAll(query) {
        const { page = 1, pageSize = 5, keyword, time } = query;
        const start = (page - 1) * pageSize;
        const searchTime = time ? JSON.parse(time) : undefined;
        let res = this.statisticalRepository
            .createQueryBuilder('analyseStatistical')
            .leftJoinAndSelect('analyseStatistical.phones', 'question');
        if (keyword) {
            res = res.where('analyseStatistical.practiceStatistical like :keyword', {
                keyword: `%${keyword}%`,
            });
        }
        if (searchTime) {
            if (searchTime.startTime) {
                res = res.andWhere('analyseStatistical.startTime > :start ', {
                    start: new Date(searchTime.startTime),
                });
            }
            if (searchTime.endTime) {
                res = res.andWhere('analyseStatistical.endTime<:end ', {
                    end: new Date(searchTime.endTime),
                });
            }
        }
        res = res.skip(start).take(pageSize);
        const list = await res.getManyAndCount();
        try {
            if (list) {
                return {
                    msg: '查询成功',
                    data: list,
                };
            }
            return {
                msg: '查询失败',
            };
        }
        catch (_a) {
            throw new common_1.HttpException('数据获取失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
AnalyseStatisticalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(analyse_statistical_entity_1.analyseStatistical)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AnalyseStatisticalService);
exports.AnalyseStatisticalService = AnalyseStatisticalService;
//# sourceMappingURL=analyse-statistical.service.js.map