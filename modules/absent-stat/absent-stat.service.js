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
exports.AbsentStatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const absent_stat_entity_1 = require("./absent-stat.entity");
const exam_service_1 = require("../exam/exam.service");
let AbsentStatService = class AbsentStatService {
    constructor(absentStatRepository, examService) {
        this.absentStatRepository = absentStatRepository;
        this.examService = examService;
    }
    async create(achBody) {
        const res = this.absentStatRepository.create(Object.assign({}, achBody));
        const result = await this.absentStatRepository.save(res);
        return result;
    }
    async getAll(params) {
        try {
            const res = await this.examService.getExamList(params);
            return res;
        }
        catch (_a) {
            throw new common_1.HttpException('数据未获取', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getAbsentee(id) {
        const res = await this.absentStatRepository
            .createQueryBuilder('absent_stat')
            .where('absent_stat.absentStat_id=:id', { id })
            .leftJoinAndSelect('absent_stat.absentee', 'absentee')
            .getOne();
        return res;
    }
};
AbsentStatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(absent_stat_entity_1.AbsentStat)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        exam_service_1.ExamService])
], AbsentStatService);
exports.AbsentStatService = AbsentStatService;
//# sourceMappingURL=absent-stat.service.js.map