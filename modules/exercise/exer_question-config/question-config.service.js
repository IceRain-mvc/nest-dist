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
exports.QuestionConfigService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exer_question_config_entity_1 = require("./exer_question-config.entity");
const typeorm_2 = require("typeorm");
const list = ['必须答完所有试题才可提交试卷', '不显示试题分数'];
let listIndex = 0;
let QuestionConfigService = class QuestionConfigService {
    constructor(questionConfigRepository) {
        this.questionConfigRepository = questionConfigRepository;
        this.run()
            .then(() => {
            console.log('试题设置初始化成功');
        })
            .catch(() => {
            console.log('试题设置已经初始化');
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
    async getAllList() {
        const questionList = await this.questionConfigRepository
            .createQueryBuilder('question_configs')
            .getMany();
        return questionList;
    }
    async getAll() {
        return await this.questionConfigRepository.find();
    }
    async create(body) {
        const { title } = body;
        if (!title || title === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.questionConfigRepository
            .createQueryBuilder('QuestionConfigs')
            .select('QuestionConfigs')
            .where('QuestionConfigs.questionConfigTitle = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('这条规则已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = this.questionConfigRepository.create({
            questionConfigTitle: title,
        });
        const result = await this.questionConfigRepository.save(res);
        return { msg: '创建成功', result };
    }
};
QuestionConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exer_question_config_entity_1.QuestionConfigs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QuestionConfigService);
exports.QuestionConfigService = QuestionConfigService;
//# sourceMappingURL=question-config.service.js.map