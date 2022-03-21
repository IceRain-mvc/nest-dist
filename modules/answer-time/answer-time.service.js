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
exports.AnswerTimeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const answer_time_entity_1 = require("./answer-time.entity");
const typeorm_2 = require("typeorm");
const list = ['考生至少作答input分钟后才允许交卷'];
let listIndex = 0;
let AnswerTimeService = class AnswerTimeService {
    constructor(answerTimeRepository) {
        this.answerTimeRepository = answerTimeRepository;
        this.run()
            .then(() => {
            console.log('答题时间设置初始化成功');
        })
            .catch(() => {
            console.log('答题时间设置已经初始化');
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
    async getAll() {
        return await this.answerTimeRepository.find();
    }
    async create(body) {
        const { title } = body;
        if (!title || title === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.answerTimeRepository
            .createQueryBuilder('AnswerTime')
            .select('AnswerTime')
            .where('AnswerTime.answerTimeRequire = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('该条规则已创建', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.answerTimeRepository.create({
            answerTimeRequire: title,
        });
        const result = await this.answerTimeRepository.save(res);
        return { msg: '创建成功', result };
    }
    async addTextTime(body) {
        const resule = await this.getAll();
        const answerTimeId = resule.length + 1;
        const res = await this.answerTimeRepository.create(Object.assign(Object.assign({}, body), { answerTimeId }));
        await this.answerTimeRepository.save(res);
        return this.getAll();
    }
    async deleteTextTime(answerTimeId) {
        await this.answerTimeRepository.delete(answerTimeId);
    }
    async update(body) {
        const { answerTimeId, answerTimeRequire } = body;
        await this.answerTimeRepository
            .createQueryBuilder()
            .update(answer_time_entity_1.AnswerTime)
            .set({ answerTimeRequire })
            .where('answer_time.answerTimeId = :answerTimeId', {
            answerTimeId: answerTimeId,
        })
            .execute();
    }
};
AnswerTimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(answer_time_entity_1.AnswerTime)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnswerTimeService);
exports.AnswerTimeService = AnswerTimeService;
//# sourceMappingURL=answer-time.service.js.map