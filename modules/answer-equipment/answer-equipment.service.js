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
exports.AnswerEquipmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const answer_equipment_entity_1 = require("./answer-equipment.entity");
const typeorm_2 = require("typeorm");
const answer_equipment_require_service_1 = require("../answer-equipment-require/answer-equipment-require.service");
const list = ['不限制（所有终端可参加）', '仅限电脑端答题', '仅限手机端答题'];
let listIndex = 0;
let AnswerEquipmentService = class AnswerEquipmentService {
    constructor(answerEquipmentRepository, answerService) {
        this.answerEquipmentRepository = answerEquipmentRepository;
        this.answerService = answerService;
        this.run()
            .then(() => {
            console.log('答题设备选项初始化成功');
        })
            .catch(() => {
            console.log('答题设备选项已经初始化');
        });
    }
    async run() {
        if (listIndex > list.length - 1) {
            this.answerService
                .run()
                .then(() => {
                console.log('答题设备设置初始化成功');
            })
                .catch(() => {
                console.log('答题设备设置已经初始化');
            });
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
        return await this.answerEquipmentRepository
            .createQueryBuilder('answer_equipment')
            .leftJoinAndSelect('answer_equipment.answerEquipmentRequires', 'answer_equipment_require')
            .getMany();
    }
    async create(body) {
        const { title } = body;
        if (!title || title === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.answerEquipmentRepository
            .createQueryBuilder('AnswerEquipment')
            .select('AnswerEquipment')
            .where('AnswerEquipment.title = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('这条规则已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = this.answerEquipmentRepository.create({ title });
        const result = await this.answerEquipmentRepository.save(res);
        return { msg: '创建成功', result };
    }
};
AnswerEquipmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(answer_equipment_entity_1.AnswerEquipment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        answer_equipment_require_service_1.AnswerEquipmentRequireService])
], AnswerEquipmentService);
exports.AnswerEquipmentService = AnswerEquipmentService;
//# sourceMappingURL=answer-equipment.service.js.map