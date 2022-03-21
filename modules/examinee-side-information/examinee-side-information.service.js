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
exports.ExamineeSideInformationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const examinee_side_information_entity_1 = require("./examinee-side-information.entity");
let ExamineeSideInformationService = class ExamineeSideInformationService {
    constructor(examineeSideInformationRepository) {
        this.examineeSideInformationRepository = examineeSideInformationRepository;
    }
    async createAppMessage(body) {
        const res = await this.examineeSideInformationRepository.create(body);
        return this.examineeSideInformationRepository.save(res);
    }
    async updataAppMessage(params) {
        const data = JSON.parse(params.data);
        const res = await this.examineeSideInformationRepository
            .createQueryBuilder()
            .update(examinee_side_information_entity_1.ExamineeSideInformation)
            .set(Object.assign({}, data))
            .where('id = :id', { id: params.id })
            .execute();
        return res;
    }
    async getAppMessage() {
        const res = await this.examineeSideInformationRepository
            .createQueryBuilder('examinee-side-information')
            .getMany();
        return res;
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamineeSideInformationService.prototype, "createAppMessage", null);
ExamineeSideInformationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(examinee_side_information_entity_1.ExamineeSideInformation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExamineeSideInformationService);
exports.ExamineeSideInformationService = ExamineeSideInformationService;
//# sourceMappingURL=examinee-side-information.service.js.map