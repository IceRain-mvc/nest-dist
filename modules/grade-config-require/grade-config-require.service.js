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
exports.GradeConfigRequireService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grade_config_require_entity_1 = require("./grade-config-require.entity");
const typeorm_2 = require("typeorm");
const grade_config_entity_1 = require("../grade-config/grade-config.entity");
const list = [
    '显示成绩二维码，待手工发布后可扫码查询',
    '系统自动在datetime发布成绩',
];
let listIndex = 0;
let GradeConfigRequireService = class GradeConfigRequireService {
    constructor(gradeConfigRequireRepository) {
        this.gradeConfigRequireRepository = gradeConfigRequireRepository;
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
        const rule = await this.gradeConfigRequireRepository
            .createQueryBuilder('GradeConfigRequire')
            .select('GradeConfigRequire')
            .where('GradeConfigRequire.gradeTitle = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('该条规则已创建', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.gradeConfigRequireRepository.create({
            gradeTitle: title,
        });
        const manager = await (0, typeorm_2.getManager)();
        const grade = await manager.findOne(grade_config_entity_1.GradeConfig, {
            title: '交卷后不显示成绩',
        });
        res.gradeConfig = grade;
        const result = await this.gradeConfigRequireRepository.save(res);
        return { msg: '创建成功', result };
    }
};
GradeConfigRequireService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grade_config_require_entity_1.GradeConfigRequire)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GradeConfigRequireService);
exports.GradeConfigRequireService = GradeConfigRequireService;
//# sourceMappingURL=grade-config-require.service.js.map