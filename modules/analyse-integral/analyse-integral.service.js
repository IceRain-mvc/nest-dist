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
exports.AnalyseIntegralService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const analyse_integral_entity_1 = require("./analyse-integral.entity");
const typeorm_2 = require("typeorm");
let AnalyseIntegralService = class AnalyseIntegralService {
    constructor(analyseIntegralRepository) {
        this.analyseIntegralRepository = analyseIntegralRepository;
    }
    async create(body) {
        const res = this.analyseIntegralRepository.create(Object.assign({}, body));
        const result = await this.analyseIntegralRepository.save(res);
        return result;
    }
    async getAll(query) {
        const { page = 1, pageSize = 5, stu_count, stu_start_time, stu_end_time, stu_state, id, } = query;
        const start = (page - 1) * pageSize;
        let sql = this.analyseIntegralRepository.createQueryBuilder('analyse-integral');
        if (id !== undefined) {
            sql = sql.andWhere('analyse-integral.ali_id=:id', {
                id,
            });
        }
        if (stu_count !== undefined) {
            sql = sql.andWhere(new typeorm_2.Brackets((qb) => {
                qb.where('analyse-integral.al_student_name like :al_student_name', {
                    al_student_name: `%${stu_count}%`,
                });
            }));
        }
        if (stu_start_time !== undefined) {
            sql = sql.andWhere('al_student_register > :start ', {
                start: new Date(stu_start_time),
            });
        }
        if (stu_end_time !== undefined) {
            sql = sql.andWhere('al_student_register < :end  ', {
                end: new Date(stu_end_time),
            });
        }
        if (stu_state !== undefined) {
            sql = sql.andWhere(new typeorm_2.Brackets((qb) => {
                qb.where('analyse-integral.al_student_start like :al_student_start', {
                    al_student_start: `%${stu_state}%`,
                });
            }));
        }
        sql = sql.orderBy(`analyse-integral.al_total_integral`, 'DESC');
        sql = sql.skip(start).take(pageSize);
        const res = await sql.getManyAndCount();
        try {
            return res;
        }
        catch (_a) {
            throw new common_1.HttpException('数据查询失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async clearIntegral(query) {
        const arr = [];
        let flag = false;
        const { data } = query;
        if (JSON.parse(data).length > 0) {
            JSON.parse(data).forEach((item) => {
                const res = this.analyseIntegralRepository
                    .createQueryBuilder('analyse-integral')
                    .update(analyse_integral_entity_1.AnalyseIntegral)
                    .set({
                    al_test_student_integral: '0',
                    al_total_integral: 0,
                    al_exam_integral: 0,
                    al_exercise_integral: 0,
                    al_train_integral: 0,
                })
                    .where('ali_id = :id', { id: item })
                    .execute();
                arr.push(res);
            });
        }
        else {
            this.analyseIntegralRepository
                .createQueryBuilder('analyse-integral')
                .update(analyse_integral_entity_1.AnalyseIntegral)
                .set({
                al_test_student_integral: '0',
                al_total_integral: 0,
                al_exam_integral: 0,
                al_exercise_integral: 0,
                al_train_integral: 0,
            })
                .execute();
        }
        await Promise.all(arr)
            .then(() => {
            flag = true;
        })
            .catch(() => {
            flag = false;
        });
        if (flag) {
            return {
                msg: '执行成功，考生积分已清零',
            };
        }
        return {
            msg: '执行失败！',
        };
    }
};
AnalyseIntegralService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analyse_integral_entity_1.AnalyseIntegral)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnalyseIntegralService);
exports.AnalyseIntegralService = AnalyseIntegralService;
//# sourceMappingURL=analyse-integral.service.js.map