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
exports.CourseLearnChooseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_learn_choose_entity_1 = require("./course-learn-choose.entity");
let CourseLearnChooseService = class CourseLearnChooseService {
    constructor(courseLearnChooseRepository) {
        this.courseLearnChooseRepository = courseLearnChooseRepository;
    }
    async create(body) {
        for (let i = 0; i < body.data.length; i++) {
            const photoEntity = this.courseLearnChooseRepository.create(body.data[i]);
            await this.courseLearnChooseRepository.save(photoEntity);
        }
        return this.courseLearnChooseRepository.find();
    }
    async updataChoose({ stillArr, createArr, delArr }) {
        console.log(delArr, 'delArr');
        console.log(stillArr, 'delArr');
        delArr.forEach(async (item) => {
            await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .delete()
                .from(course_learn_choose_entity_1.CourseLearnChoose)
                .where('id = :id', { id: item.id })
                .execute();
        });
        this.create({ data: createArr });
        return this.courseLearnChooseRepository.find();
    }
};
CourseLearnChooseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_learn_choose_entity_1.CourseLearnChoose)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseLearnChooseService);
exports.CourseLearnChooseService = CourseLearnChooseService;
//# sourceMappingURL=course-learn-choose.service.js.map