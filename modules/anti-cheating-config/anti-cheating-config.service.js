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
exports.AntiCheatingConfigService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const anti_cheating_config_entity_1 = require("./anti-cheating-config.entity");
const typeorm_2 = require("typeorm");
const list = [
    {
        antiCheatingDes: '本功能根据考生姓名和身份证号\\n实时采集人脸与公安身份数据库对比\\n进行人脸实名认证',
        antiCheatingTitle: '考试前，进行人脸识别身份验证',
        antiCheatingType: 'testBefore',
    },
    {
        antiCheatingDes: '在电脑端通过摄像头定时抓拍\\n在移动端通过手机定时提醒考生拍照上传',
        antiCheatingTitle: '考试中，开启摄像头拍照监考',
        antiCheatingType: 'testOnGoing',
    },
    {
        antiCheatingDes: null,
        antiCheatingTitle: '只允许考生切换考试页面input次a设置a，否则强制交卷',
        antiCheatingType: 'cutScreenTime',
    },
    {
        antiCheatingDes: null,
        antiCheatingTitle: '答题时，超过input秒无操作，系统将强制交卷',
        antiCheatingType: null,
    },
    {
        antiCheatingDes: null,
        antiCheatingTitle: '禁止考生复制、粘贴、剪切',
        antiCheatingType: null,
    },
    {
        antiCheatingDes: null,
        antiCheatingTitle: '试题乱序',
        antiCheatingType: null,
    },
    {
        antiCheatingDes: null,
        antiCheatingTitle: '选项乱序',
        antiCheatingType: null,
    },
];
let listIndex = 0;
let AntiCheatingConfigService = class AntiCheatingConfigService {
    constructor(AntiCheatingConfigRepository) {
        this.AntiCheatingConfigRepository = AntiCheatingConfigRepository;
        this.run()
            .then(() => {
            console.log('防作弊设置初始化成功');
        })
            .catch(() => {
            console.log('防作弊设置已经初始化');
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
        const { antiCheatingTitle } = body;
        if (!antiCheatingTitle || antiCheatingTitle === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.AntiCheatingConfigRepository.createQueryBuilder('AntiCheatingConfig')
            .select('AntiCheatingConfig')
            .where('AntiCheatingConfig.antiCheatingTitle = :antiCheatingTitle', {
            antiCheatingTitle,
        })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('这条规则已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = this.AntiCheatingConfigRepository.create(Object.assign({}, body));
        const result = await this.AntiCheatingConfigRepository.save(res);
        return { msg: '创建成功', result };
    }
    async getAllList() {
        const resultList = await this.AntiCheatingConfigRepository.createQueryBuilder('anti_cheating_config').getMany();
        return resultList;
    }
};
AntiCheatingConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(anti_cheating_config_entity_1.AntiCheatingConfig)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AntiCheatingConfigService);
exports.AntiCheatingConfigService = AntiCheatingConfigService;
//# sourceMappingURL=anti-cheating-config.service.js.map