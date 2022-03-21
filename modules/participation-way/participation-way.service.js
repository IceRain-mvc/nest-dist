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
exports.ParticipationWayService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const participation_way_entity_1 = require("./participation-way.entity");
const typeorm_2 = require("typeorm");
const list = [
    {
        partTitle: '免登录考试',
        partDescription: '考生填写身份信息（如姓名、电话），就可以参加考试',
        partType: 0,
    },
    {
        partTitle: '口令考试',
        partDescription: '只要输入考试口令就可以参加考试（防止陌生人参加）',
        partType: 1,
    },
    {
        partTitle: '免登录+口令考试',
        partDescription: '考生须填写身份信息和考试口令才可以参加考试',
        partType: 2,
    },
    {
        partTitle: '安排考试',
        partDescription: '指定考生或部门参加，考生使用账号和密码登录才可以参加考试',
        partType: 3,
    },
];
let listIndex = 0;
let ParticipationWayService = class ParticipationWayService {
    constructor(participationWayRepository) {
        this.participationWayRepository = participationWayRepository;
        this.run()
            .then(() => {
            console.log('考生参加考试方式初始化成功');
        })
            .catch(() => {
            console.log('考生参加考试方式已经初始化');
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
        const { partTitle } = body;
        if (!partTitle || partTitle === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.participationWayRepository
            .createQueryBuilder('ParticipationWay')
            .select('ParticipationWay')
            .where('ParticipationWay.partTitle = :partTitle', { partTitle })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('该条规则已经创建', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.participationWayRepository.create(Object.assign({}, body));
        const result = this.participationWayRepository.save(res);
        return { msg: '创建成功', result };
    }
    async findAll() {
        const datauser = await this.participationWayRepository.find();
        return datauser;
    }
};
ParticipationWayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(participation_way_entity_1.ParticipationWay)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParticipationWayService);
exports.ParticipationWayService = ParticipationWayService;
//# sourceMappingURL=participation-way.service.js.map