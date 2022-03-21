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
exports.GetScoreConfigService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const get_score_config_entity_1 = require("./get-score-config.entity");
const typeorm_2 = require("typeorm");
const list = [
    {
        getScoreRequire: '按正确选项个数占比得分',
        getScoreDes: '如一道3分的多选题，正确答案是ABC。\\n如果考生答案是A，得1分。\\n如果考生答案是AB，得2分。',
    },
    {
        getScoreRequire: '漏选只得试题分数的input%',
        getScoreDes: '如一道2分的多选题，设定漏选得分比例25%。\\n如果考生漏选，将得2*25%=0.5分',
    },
];
let listIndex = 0;
let GetScoreConfigService = class GetScoreConfigService {
    constructor(getScoreConfigRepository) {
        this.getScoreConfigRepository = getScoreConfigRepository;
        this.run()
            .then(() => {
            console.log('多选得分设置初始化成功');
        })
            .catch(() => {
            console.log('多选得分设置已经初始化');
        });
    }
    async run() {
        if (listIndex > list.length - 1) {
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
    async create(body) {
        const { getScoreRequire } = body;
        if (!getScoreRequire || getScoreRequire === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.getScoreConfigRepository
            .createQueryBuilder('GetScoreConfig')
            .select('GetScoreConfig')
            .where('GetScoreConfig.getScoreRequire = :getScoreRequire', {
            getScoreRequire,
        })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('该条规则已创建', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.getScoreConfigRepository.create(Object.assign({}, body));
        const result = await this.getScoreConfigRepository.save(res);
        return { msg: '创建成功', result };
    }
};
GetScoreConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(get_score_config_entity_1.GetScoreConfig)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GetScoreConfigService);
exports.GetScoreConfigService = GetScoreConfigService;
//# sourceMappingURL=get-score-config.service.js.map