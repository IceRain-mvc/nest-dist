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
exports.GradeConfigService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grade_config_entity_1 = require("./grade-config.entity");
const typeorm_2 = require("typeorm");
const grade_config_require_service_1 = require("../grade-config-require/grade-config-require.service");
const list = ['交卷后显示成绩', '交卷后不显示成绩'];
let listIndex = 0;
let GradeConfigService = class GradeConfigService {
    constructor(gradeConfigRepository, gradeService) {
        this.gradeConfigRepository = gradeConfigRepository;
        this.gradeService = gradeService;
        this.run()
            .then(() => {
            console.log('成绩选项初始化成功');
        })
            .catch(() => {
            console.log('成绩选项已经初始化');
        });
    }
    async run() {
        if (listIndex > list.length - 1) {
            this.gradeService
                .run()
                .then(() => {
                console.log('成绩设置初始化成功');
            })
                .catch(() => {
                console.log('成绩设置已经初始化');
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
    async create(body) {
        const { title } = body;
        if (!title || title === '') {
            throw new common_1.HttpException('请求参数错误', common_1.HttpStatus.BAD_REQUEST);
        }
        const rule = await this.gradeConfigRepository
            .createQueryBuilder('GradeConfig')
            .select('GradeConfig')
            .where('GradeConfig.title = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('该条规则已创建', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.gradeConfigRepository.create({
            title: title,
        });
        const result = await this.gradeConfigRepository.save(res);
        return { msg: '创建成功', result };
    }
    async getAllOptions() {
        return await this.gradeConfigRepository
            .createQueryBuilder('grade_config')
            .leftJoinAndSelect('grade_config.gradeConfigRequires', 'grade_config_require')
            .getMany();
    }
};
GradeConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grade_config_entity_1.GradeConfig)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        grade_config_require_service_1.GradeConfigRequireService])
], GradeConfigService);
exports.GradeConfigService = GradeConfigService;
//# sourceMappingURL=grade-config.service.js.map