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
exports.PaperModeRequireService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paper_mode_require_entity_1 = require("./paper-mode-require.entity");
const typeorm_2 = require("typeorm");
const paper_mode_entity_1 = require("../paper-mode/paper-mode.entity");
const list = [
    {
        require: '限时答题，每题限input秒作答，否则自动进入下一题',
        requireDescription: '用于限定每题作答时间，超过设置时间自动滑动下一题，不可回退查看',
        value: 1,
    },
    {
        require: '闯关答题，答错input道题，结束答题并强制交卷',
        requireDescription: '用于闯关答题，答题时只允许往前不可回退\\n答错超过设置的试题数，系统强制交卷',
        value: 1,
    },
];
let listIndex = 0;
let PaperModeRequireService = class PaperModeRequireService {
    constructor(paperModeRequireRepository) {
        this.paperModeRequireRepository = paperModeRequireRepository;
    }
    async runRequire() {
        if (listIndex > list.length - 1) {
            return { msg: '节点创建完成' };
        }
        await this.create(list[listIndex]).then((res) => {
            if (res) {
                listIndex += 1;
                this.runRequire();
            }
        });
        return { msg: '节点创建成功' };
    }
    async create(body) {
        const { require } = body;
        if (!require || require === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = await (0, typeorm_2.getManager)();
        const rule = await this.paperModeRequireRepository
            .createQueryBuilder('PaperModeRequire')
            .select('PaperModeRequire')
            .where('PaperModeRequire.require = :require', {
            require,
        })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('该条规则已创建', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.paperModeRequireRepository
            .createQueryBuilder()
            .insert()
            .into(paper_mode_require_entity_1.PaperModeRequire)
            .values(Object.assign({}, body))
            .execute();
        const req = await this.paperModeRequireRepository.findOne(res.raw.insertId);
        req.paperMode = await manager.findOne(paper_mode_entity_1.PaperMode, { title: '逐题模式' });
        const result = await manager.save(req);
        return { msg: '创建成功', result };
    }
};
PaperModeRequireService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paper_mode_require_entity_1.PaperModeRequire)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaperModeRequireService);
exports.PaperModeRequireService = PaperModeRequireService;
//# sourceMappingURL=paper-mode-require.service.js.map