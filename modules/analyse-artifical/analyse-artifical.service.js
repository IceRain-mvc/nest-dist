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
exports.ArtificalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const analyse_artifical_entity_1 = require("./analyse-artifical.entity");
const typeorm_2 = require("typeorm");
let ArtificalService = class ArtificalService {
    constructor(artificalRepository) {
        this.artificalRepository = artificalRepository;
    }
    async create(artBoby) {
        const res = this.artificalRepository.create(artBoby);
        const list = await this.artificalRepository.save(res);
        return { code: '1', msg: '新增成功', list };
    }
    async getAll(query) {
        const { page = 1, pageSize = 5, time, keyword } = query;
        const start = (page - 1) * pageSize;
        const searchTime = time ? JSON.parse(time) : undefined;
        let res = this.artificalRepository
            .createQueryBuilder('Artifical')
            .leftJoinAndSelect('Artifical.phones', 'question');
        if (keyword) {
            res = res.where('authName like :keyword', {
                keyword: `%${keyword}%`,
            });
        }
        if (searchTime) {
            if (searchTime.startTime) {
                res = res.andWhere('artTime > :start', {
                    start: new Date(searchTime.startTime),
                });
            }
            if (searchTime.endTime) {
                res = res.andWhere('endTime <:end', {
                    start: new Date(searchTime.endTime),
                });
            }
        }
        res = res.skip(start).take(pageSize);
        const list = await res.getManyAndCount();
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
};
ArtificalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analyse_artifical_entity_1.Artifical)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArtificalService);
exports.ArtificalService = ArtificalService;
//# sourceMappingURL=analyse-artifical.service.js.map