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
exports.TestTimesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const test_times_entity_1 = require("./test-times.entity");
const typeorm_2 = require("typeorm");
const list = ['每天限答input次（请根据“可考次数”合理设置）'];
let listIndex = 0;
let TestTimesService = class TestTimesService {
    constructor(testTimesRepository) {
        this.testTimesRepository = testTimesRepository;
        this.run()
            .then(() => {
            console.log('可考次数设置初始化成功');
        })
            .catch(() => {
            console.log('可考次数设置已经初始化');
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
        const rule = await this.testTimesRepository
            .createQueryBuilder('TestTimes')
            .select('TestTimes')
            .where('TestTimes.testTimesRequire = :title', { title })
            .getOne();
        if (rule) {
            throw new common_1.HttpException('该条规则已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = this.testTimesRepository.create({ testTimesRequire: title });
        const result = await this.testTimesRepository.save(res);
        return { msg: '创建成功', result };
    }
    async getAll() {
        return await this.testTimesRepository.find();
    }
};
TestTimesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(test_times_entity_1.TestTimes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TestTimesService);
exports.TestTimesService = TestTimesService;
//# sourceMappingURL=test-times.service.js.map