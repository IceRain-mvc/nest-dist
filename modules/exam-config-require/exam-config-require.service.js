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
exports.ExamConfigRequireService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exam_config_require_entity_1 = require("./exam-config-require.entity");
const typeorm_2 = require("typeorm");
const list = [
    '成绩发布后显示考生名次',
    '成绩发布后允许查看标准答案和试题解析',
    '自动记录错题，交卷后考生可以错题练习',
    '交卷后允许从成绩页面进入a考生中心a查看历史成绩',
];
let listIndex = 0;
let ExamConfigRequireService = class ExamConfigRequireService {
    constructor(examConfigRequireRepository) {
        this.examConfigRequireRepository = examConfigRequireRepository;
        this.run()
            .then(() => {
            console.log('考试设置初始化成功');
        })
            .catch(() => {
            console.log('考试设置已经初始化');
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
        const rule = await this.examConfigRequireRepository
            .createQueryBuilder('ExamConfigRequire')
            .select('ExamConfigRequire')
            .where('ExamConfigRequire.title = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('这条规则已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = this.examConfigRequireRepository.create({ title });
        const result = await this.examConfigRequireRepository.save(res);
        return { msg: '创建成功', result };
    }
    async getAll() {
        const result = await this.examConfigRequireRepository
            .createQueryBuilder('paper_mode')
            .getMany();
        return result;
    }
};
ExamConfigRequireService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exam_config_require_entity_1.ExamConfigRequire)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExamConfigRequireService);
exports.ExamConfigRequireService = ExamConfigRequireService;
//# sourceMappingURL=exam-config-require.service.js.map