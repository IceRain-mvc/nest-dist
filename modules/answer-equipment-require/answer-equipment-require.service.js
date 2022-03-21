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
exports.AnswerEquipmentRequireService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const answer_equipment_require_entity_1 = require("./answer-equipment-require.entity");
const typeorm_2 = require("typeorm");
const answer_equipment_entity_1 = require("../answer-equipment/answer-equipment.entity");
const list = ['只允许在手机微信中答题', '不允许分享答案'];
let listIndex = 0;
let AnswerEquipmentRequireService = class AnswerEquipmentRequireService {
    constructor(answerEquipmentRequireRepository) {
        this.answerEquipmentRequireRepository = answerEquipmentRequireRepository;
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
            throw new common_1.HttpException('规则信息不能为空', common_1.HttpStatus.BAD_REQUEST);
        }
        const manager = await (0, typeorm_2.getManager)();
        const rule = await this.answerEquipmentRequireRepository
            .createQueryBuilder('AnswerEquipmentRequire')
            .select('AnswerEquipmentRequire')
            .where('AnswerEquipmentRequire.requireTitle = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('这条规则已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = this.answerEquipmentRequireRepository.create({
            requireTitle: title,
        });
        res.answerEquipment = await manager.findOne(answer_equipment_entity_1.AnswerEquipment, {
            title: '仅限手机端答题',
        });
        const result = await this.answerEquipmentRequireRepository.save(res);
        return { msg: '创建成功', result };
    }
};
AnswerEquipmentRequireService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(answer_equipment_require_entity_1.AnswerEquipmentRequire)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnswerEquipmentRequireService);
exports.AnswerEquipmentRequireService = AnswerEquipmentRequireService;
//# sourceMappingURL=answer-equipment-require.service.js.map