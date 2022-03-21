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
exports.ExamTimeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exam_time_entity_1 = require("./exam-time.entity");
const typeorm_2 = require("typeorm");
const list = [
    '迟到input分钟禁止入场（以开始时间为准）',
    '超过考试结束时间强制收卷',
];
let listIndex = 0;
let ExamTimeService = class ExamTimeService {
    constructor(examTimeRepository) {
        this.examTimeRepository = examTimeRepository;
        this.run()
            .then(() => {
            console.log('考试时间初始化成功');
        })
            .catch(() => {
            console.log('考试时间已经初始化');
        });
    }
    async run() {
        if (listIndex > list.length - 1) {
            return { msg: '节点创建完成' };
        }
        await this.create({ title: list[listIndex] }).then((res) => {
            if (res) {
                listIndex += 1;
                this.run();
            }
        });
        return { msg: '节点创建成功' };
    }
    async create(body) {
        const { title } = body;
        if (!title || title === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.examTimeRepository
            .createQueryBuilder('ExamTime')
            .select('ExamTime')
            .where('ExamTime.examTimeRequire = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('该条规则已创建', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.examTimeRepository.create({
            examTimeRequire: title,
        });
        const result = await this.examTimeRepository.save(res);
        return { msg: '创建成功', result };
    }
    async deleteOne(id) {
        const examList = await this.examTimeRepository
            .createQueryBuilder('ExamTime')
            .leftJoinAndSelect('ExamTime', 'Exam')
            .where('exams.examTimeId = :id', { id })
            .getMany();
        if (examList) {
            return {
                msg: '已选中，不可删除',
            };
        }
        return await this.examTimeRepository.delete(id);
    }
    async putOne(body) {
        const { examTimeId, examTimeRequire } = body;
        return await this.examTimeRepository
            .createQueryBuilder()
            .update(exam_time_entity_1.ExamTime)
            .set({ examTimeRequire })
            .where('exam_time.examTimeId = :examTimeId', { examTimeId })
            .execute();
    }
    async getAll() {
        return await this.examTimeRepository.find();
    }
    async getOne(id) {
        return await this.examTimeRepository
            .createQueryBuilder('exam_time')
            .where('exam_time.examTimeId = :id', { id })
            .getOne();
    }
};
ExamTimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exam_time_entity_1.ExamTime)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExamTimeService);
exports.ExamTimeService = ExamTimeService;
//# sourceMappingURL=exam-time.service.js.map