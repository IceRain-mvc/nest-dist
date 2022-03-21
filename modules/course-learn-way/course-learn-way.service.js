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
exports.CourseLearnWayService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_learn_way_entity_1 = require("./course-learn-way.entity");
const list = [
    {
        wayTitle: '免登录学习',
        wayDescription: '学员需要填写身份信息(如姓名、电话)，才可以学习课程',
        wayType: 0,
    },
    {
        wayTitle: '免登陆+口令',
        wayDescription: '学员须填写身份信息和学习口令才可以学习课程',
        wayType: 1,
    },
    {
        wayTitle: '安排学习',
        wayDescription: '指定考生或部门学习，考生使用账号和密码登录才可以学习课程',
        wayType: 2,
    },
];
let listIndex = 0;
let CourseLearnWayService = class CourseLearnWayService {
    constructor(courseLearnWayRepository) {
        this.courseLearnWayRepository = courseLearnWayRepository;
        this.run()
            .then(() => {
            console.log('学员学习课程方式初始化成功');
        })
            .catch(() => {
            console.log('学员学习课程方式已经初始化');
        });
    }
    async run() {
        if (listIndex > list.length - 1) {
            return { msg: '节点创建完成' };
        }
        console.log(listIndex);
        await this.create(list[listIndex]).then((res) => {
            if (res) {
                listIndex += 1;
                console.log(listIndex);
                this.run();
            }
            else {
                listIndex += 1;
            }
        });
        return { msg: '学员学习方式创建成功' };
    }
    async create(body) {
        const { wayTitle } = body;
        if (!wayTitle || wayTitle === '') {
            return '';
        }
        const rule = await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .select('courseLearnWay')
            .from(course_learn_way_entity_1.CourseLearnWay, 'courseLearnWay')
            .where('courseLearnWay.wayTitle = :wayTitle', { wayTitle: wayTitle })
            .getOne();
        if (rule) {
            return '';
        }
        const res = await this.courseLearnWayRepository.create(Object.assign({}, body));
        const result = this.courseLearnWayRepository.save(res);
        return { msg: '创建成功', result };
    }
    async getAll() {
        return await this.courseLearnWayRepository
            .createQueryBuilder('course-learn-way')
            .getMany();
    }
};
CourseLearnWayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_learn_way_entity_1.CourseLearnWay)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseLearnWayService);
exports.CourseLearnWayService = CourseLearnWayService;
//# sourceMappingURL=course-learn-way.service.js.map