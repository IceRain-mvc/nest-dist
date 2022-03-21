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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseLearningService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const analyse_learning_entity_1 = require("./analyse-learning.entity");
const course_entity_1 = require("../course/course.entity");
const course_service_1 = require("../course/course.service");
const students_course_entity_1 = require("../students-course/students-course.entity");
let AnalyseLearningService = class AnalyseLearningService {
    constructor(analyselearning, courseService) {
        this.analyselearning = analyselearning;
        this.courseService = courseService;
    }
    async getAll(params) {
        var e_1, _a;
        try {
            const data = await this.courseService.getAll(params);
            const newData = JSON.parse(JSON.stringify(data[0]));
            const length = JSON.parse(JSON.stringify(data[1]));
            let index = 0;
            try {
                for (var newData_1 = __asyncValues(newData), newData_1_1; newData_1_1 = await newData_1.next(), !newData_1_1.done;) {
                    const item = newData_1_1.value;
                    const participantsNumber = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
                        .createQueryBuilder()
                        .where('courseId=:id', { id: item.courseId })
                        .getCount();
                    const completeNumber = await (0, typeorm_2.getRepository)(students_course_entity_1.StudentsCourse)
                        .createQueryBuilder()
                        .where('courseId=:id', { id: item.courseId })
                        .andWhere('learnState=:State', { State: 4 })
                        .getCount();
                    newData[index].finishNum = completeNumber;
                    newData[index].participants = participantsNumber;
                    newData[index].unfinishNum = participantsNumber - completeNumber;
                    newData[index].passRate = isNaN(completeNumber / (participantsNumber * 0.01))
                        ? '0.0%'
                        : (completeNumber / (participantsNumber * 0.01)).toFixed(1) + '%';
                    index++;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (newData_1_1 && !newData_1_1.done && (_a = newData_1.return)) await _a.call(newData_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return [newData, length];
        }
        catch (_b) {
            throw new common_1.HttpException('数据获取失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
AnalyseLearningService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(analyse_learning_entity_1.Analyselearning)),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(0, (0, typeorm_1.InjectRepository)(students_course_entity_1.StudentsCourse)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        course_service_1.CourseService])
], AnalyseLearningService);
exports.AnalyseLearningService = AnalyseLearningService;
//# sourceMappingURL=analyse-learning.service.js.map