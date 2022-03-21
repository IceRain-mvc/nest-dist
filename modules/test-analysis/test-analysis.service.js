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
exports.TestAnalysisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const test_analysis_entity_1 = require("./test-analysis.entity");
const testBank_service_1 = require("../testBank/testBank.service");
const students_exam_result_entity_1 = require("../students-exam-result/students-exam-result.entity");
let TestAnalysisService = class TestAnalysisService {
    constructor(testAnalysis, testBankService) {
        this.testAnalysis = testAnalysis;
        this.testBankService = testBankService;
    }
    async getTestQuestions(datas) {
        var e_1, _a;
        try {
            const res = await this.testBankService.getPage(datas);
            const { data } = res;
            const newData = JSON.parse(JSON.stringify(data[0]));
            const length = JSON.parse(JSON.stringify(data[1]));
            let index = 0;
            try {
                for (var newData_1 = __asyncValues(newData), newData_1_1; newData_1_1 = await newData_1.next(), !newData_1_1.done;) {
                    const item = newData_1_1.value;
                    const answerNumber = await (0, typeorm_2.getRepository)(students_exam_result_entity_1.StudentsExamResult)
                        .createQueryBuilder()
                        .where('testBankId=:id', { id: item.id })
                        .getCount();
                    newData[index].answerNumber = answerNumber;
                    const rightNumber = await (0, typeorm_2.getRepository)(students_exam_result_entity_1.StudentsExamResult)
                        .createQueryBuilder()
                        .where('testBankId=:id', { id: item.id })
                        .andWhere('isPass=:ispass', { ispass: 'yes' })
                        .getCount();
                    newData[index].rightNumber = rightNumber;
                    newData[index].errorNumber = answerNumber - rightNumber;
                    newData[index].rightProbability = isNaN(rightNumber / (answerNumber * 0.01))
                        ? '0.0%'
                        : (rightNumber / (answerNumber * 0.01)).toFixed(1) + '%';
                    newData[index].errorProbability = isNaN((answerNumber - rightNumber) / (answerNumber * 0.01))
                        ? '0.0%'
                        : ((answerNumber - rightNumber) / (answerNumber * 0.01)).toFixed(1) +
                            '%';
                    const studentScore = await (0, typeorm_2.getRepository)(students_exam_result_entity_1.StudentsExamResult)
                        .createQueryBuilder('students_exam_result')
                        .where('testBankId=:id', { id: item.id })
                        .select([
                        'students_exam_result.studentScore',
                    ])
                        .getMany();
                    console.log(studentScore);
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
            throw new common_1.HttpException('数据未获取', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
TestAnalysisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(test_analysis_entity_1.TestAnalysis)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        testBank_service_1.TestBankService])
], TestAnalysisService);
exports.TestAnalysisService = TestAnalysisService;
//# sourceMappingURL=test-analysis.service.js.map