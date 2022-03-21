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
exports.PaperModeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paper_mode_entity_1 = require("./paper-mode.entity");
const typeorm_2 = require("typeorm");
const paper_mode_require_service_1 = require("../paper-mode-require/paper-mode-require.service");
const list = [
    {
        abstract: null,
        description: '根据考生设备自适应选择最佳方式显示\\n在电脑端以整卷模式显示（一页显示所有试题）\\n在移动端以逐题模式显示（一页显示一道试题）',
        paperType: 0,
        title: '默认模式',
    },
    {
        abstract: null,
        description: '一页显示所有试题\\n电脑端或移动端都以此模式显示',
        paperType: 1,
        title: '整卷模式',
    },
    {
        abstract: '（可用于闯关、限时竟答等）',
        description: '一页显示一道试题（可用于闯关、竞赛、显示答题）\\n电脑端或移动端都以此模式显示',
        paperType: 2,
        title: '逐题模式',
    },
];
let listIndex = 0;
let PaperModeService = class PaperModeService {
    constructor(paperModeRepository, paperModeRequireService) {
        this.paperModeRepository = paperModeRepository;
        this.paperModeRequireService = paperModeRequireService;
        this.run()
            .then(() => {
            console.log('试卷模式选项初始化成功');
        })
            .catch(() => {
            console.log('试卷模式选项已经初始化');
        });
    }
    async run() {
        if (listIndex > list.length - 1) {
            this.paperModeRequireService
                .runRequire()
                .then(() => {
                console.log('试卷模式设置初始化数据成功');
            })
                .catch(() => {
                console.log('试卷模式设置已初始化');
            });
            return { msg: '节点创建完成' };
        }
        await this.create(list[listIndex]).then((res) => {
            if (res) {
                listIndex += 1;
                this.run();
            }
        });
        return { msg: '节点创建成功' };
    }
    async getAll() {
        return await this.paperModeRepository
            .createQueryBuilder('paper_mode')
            .leftJoinAndSelect('paper_mode.paperModeRequires', 'paper_mode_require')
            .getMany();
    }
    async create(body) {
        const { title } = body;
        if (!title || title === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.paperModeRepository
            .createQueryBuilder('PaperMode')
            .select('PaperMode')
            .where('PaperMode.title = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('这条规则已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = this.paperModeRepository.create(Object.assign({}, body));
        const result = await this.paperModeRepository.save(res);
        return { msg: '创建成功', result };
    }
};
PaperModeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paper_mode_entity_1.PaperMode)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        paper_mode_require_service_1.PaperModeRequireService])
], PaperModeService);
exports.PaperModeService = PaperModeService;
//# sourceMappingURL=paper-mode.service.js.map