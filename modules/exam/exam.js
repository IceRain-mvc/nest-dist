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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreConfig = exports.ExamCopy = exports.ExamQrCode = exports.SaveExamConfig = exports.ExamConfigRequire = exports.TestTimes = exports.AnswerTimeConfig = exports.TimeConfig = exports.StarConfig = exports.ChangeExamTreeType = exports.CreateExam = exports.UpdateExam = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
class Dep {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '部门id',
    }),
    __metadata("design:type", Number)
], Dep.prototype, "departId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '部门名称',
    }),
    __metadata("design:type", String)
], Dep.prototype, "title", void 0);
class Stu {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '考生id',
    }),
    __metadata("design:type", String)
], Stu.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '用户名' }),
    __metadata("design:type", String)
], Stu.prototype, "studentName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '密码' }),
    __metadata("design:type", String)
], Stu.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '账号' }),
    __metadata("design:type", String)
], Stu.prototype, "studentNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '头像' }),
    __metadata("design:type", String)
], Stu.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '电话' }),
    __metadata("design:type", String)
], Stu.prototype, "studentPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '邮箱' }),
    __metadata("design:type", String)
], Stu.prototype, "eMail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '证件号码' }),
    __metadata("design:type", String)
], Stu.prototype, "studentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: '性别' }),
    __metadata("design:type", Number)
], Stu.prototype, "studentSex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '状态' }),
    __metadata("design:type", String)
], Stu.prototype, "studentState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '备注' }),
    __metadata("design:type", String)
], Stu.prototype, "remark", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'string',
        comment: '创建时间',
        name: 'createTime',
    }),
    __metadata("design:type", String)
], Stu.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'string',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", String)
], Stu.prototype, "updateAt", void 0);
class ExamineeFillMessages {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '标题',
    }),
    __metadata("design:type", String)
], ExamineeFillMessages.prototype, "titleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '渲染类型',
    }),
    __metadata("design:type", String)
], ExamineeFillMessages.prototype, "formatRequire", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '是否必填',
    }),
    __metadata("design:type", Number)
], ExamineeFillMessages.prototype, "mandatory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: '下拉选框的值',
    }),
    __metadata("design:type", Array)
], ExamineeFillMessages.prototype, "optionsValue", void 0);
let StuAndDep;
const exampleStuAndDep = [
    {
        id: '067ddc75-aa16-4e84-a0bc-37b66bed402a',
        studentName: '李四',
        password: '123456',
        studentNumber: '123456789',
        avatar: null,
        studentPhone: '15724664307',
        eMail: '1148521357@qq.com',
        studentId: '210724199611012414',
        studentSex: 1,
        studentState: 'active',
        remark: 'esztgdfgfdh',
        createTime: '2021-12-25T18:12:38.023Z',
        updateAt: '2021-12-25T18:12:38.023Z',
        treePerson: { title: '所属阶段/新增子目录1/新增子目录1', id: 11 },
    },
    { departId: 95, title: '所属阶段/新增组织2' },
];
class UpdateExam {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '07725cf8-e2c4-496f-add2-ddf8139efb02',
        description: '考试的id',
    }),
    __metadata("design:type", String)
], UpdateExam.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '考试名称',
    }),
    __metadata("design:type", String)
], UpdateExam.prototype, "examTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '考试分类id',
    }),
    __metadata("design:type", Number)
], UpdateExam.prototype, "treeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '考生参加考试方式',
    }),
    __metadata("design:type", Number)
], UpdateExam.prototype, "joinWay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '考试描述',
    }),
    __metadata("design:type", String)
], UpdateExam.prototype, "examInstructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '考试口令',
    }),
    __metadata("design:type", String)
], UpdateExam.prototype, "examPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '考试是否开启签名',
        enum: [0, 1],
    }),
    __metadata("design:type", Number)
], UpdateExam.prototype, "openSignature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ExamineeFillMessages],
        required: false,
        description: '考生开始考试须填信息',
    }),
    __metadata("design:type", Array)
], UpdateExam.prototype, "examineeFillMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: StuAndDep,
        example: exampleStuAndDep,
        required: false,
        description: '指定的考生和部门',
    }),
    __metadata("design:type", Array)
], UpdateExam.prototype, "examineesAndDepartments", void 0);
exports.UpdateExam = UpdateExam;
class CreateExam {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试名称',
    }),
    __metadata("design:type", String)
], CreateExam.prototype, "examTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考试分类id',
    }),
    __metadata("design:type", Number)
], CreateExam.prototype, "treeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考生参加考试方式',
    }),
    __metadata("design:type", Number)
], CreateExam.prototype, "joinWay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '考试描述',
    }),
    __metadata("design:type", String)
], CreateExam.prototype, "examInstructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '考试口令',
    }),
    __metadata("design:type", String)
], CreateExam.prototype, "examPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考试是否开启签名',
        enum: [0, 1],
    }),
    __metadata("design:type", Number)
], CreateExam.prototype, "openSignature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ExamineeFillMessages],
        required: false,
        description: '考生开始考试须填信息',
    }),
    __metadata("design:type", Array)
], CreateExam.prototype, "examineeFillMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: StuAndDep,
        example: exampleStuAndDep,
        required: false,
        description: '指定的考生和部门',
    }),
    __metadata("design:type", Array)
], CreateExam.prototype, "examineesAndDepartments", void 0);
exports.CreateExam = CreateExam;
class ChangeExamTreeType {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], ChangeExamTreeType.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考试分类id',
    }),
    __metadata("design:type", Number)
], ChangeExamTreeType.prototype, "id", void 0);
exports.ChangeExamTreeType = ChangeExamTreeType;
class StarConfig {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], StarConfig.prototype, "examId", void 0);
exports.StarConfig = StarConfig;
class TimeConfig {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], TimeConfig.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考生开始考试须填信息',
    }),
    __metadata("design:type", Array)
], TimeConfig.prototype, "examTimeIdList", void 0);
exports.TimeConfig = TimeConfig;
class AnswerTimeConfig {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], AnswerTimeConfig.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考生开始考试须填信息',
    }),
    __metadata("design:type", Array)
], AnswerTimeConfig.prototype, "answerTimeIdList", void 0);
exports.AnswerTimeConfig = AnswerTimeConfig;
class TestTimes {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], TestTimes.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考生开始考试须填信息',
    }),
    __metadata("design:type", Array)
], TestTimes.prototype, "testTimesList", void 0);
exports.TestTimes = TestTimes;
class ExamConfigRequire {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], ExamConfigRequire.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExamConfigRequire.prototype, "anexamconfiRequire", void 0);
exports.ExamConfigRequire = ExamConfigRequire;
class BaseSet {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "passingGrade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], BaseSet.prototype, "startDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], BaseSet.prototype, "endDateTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "answerTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "answerTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: false,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "limitAnswerSeconds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "errorAnswers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], BaseSet.prototype, "publishResultTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "beforeFaceCertification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "faceTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], BaseSet.prototype, "headPhone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "tapOutTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "tapTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: false,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "noOperationTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: false,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "limitAnswerTimes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "allowSubmitTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "lateEntryTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "regressionGetResultAccount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], BaseSet.prototype, "passingMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], BaseSet.prototype, "noPassingMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], BaseSet.prototype, "passingHref", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], BaseSet.prototype, "noPassingHref", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "fullMarks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], BaseSet.prototype, "integral", void 0);
class idObj {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], idObj.prototype, "id", void 0);
class ExamConfigSelect {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: idObj,
        required: true,
    }),
    __metadata("design:type", idObj)
], ExamConfigSelect.prototype, "paperMode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExamConfigSelect.prototype, "paperModeRequires", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: idObj,
        required: true,
    }),
    __metadata("design:type", idObj)
], ExamConfigSelect.prototype, "gradeConfig", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExamConfigSelect.prototype, "gradeConfigRequires", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExamConfigSelect.prototype, "examConfigRequires", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: idObj,
        required: true,
    }),
    __metadata("design:type", idObj)
], ExamConfigSelect.prototype, "answerEquipment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExamConfigSelect.prototype, "answerEquipmentRequires", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExamConfigSelect.prototype, "antiCheatingConfigs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExamConfigSelect.prototype, "questionConfigs", void 0);
class SaveExamConfig {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], SaveExamConfig.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考试设置id',
    }),
    __metadata("design:type", Number)
], SaveExamConfig.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: BaseSet,
        required: true,
        description: '考试设置信息',
    }),
    __metadata("design:type", BaseSet)
], SaveExamConfig.prototype, "gap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ExamConfigSelect,
        required: true,
        description: '考试设置信息',
    }),
    __metadata("design:type", ExamConfigSelect)
], SaveExamConfig.prototype, "select", void 0);
exports.SaveExamConfig = SaveExamConfig;
class ExamQrCode {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], ExamQrCode.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试二维码路径',
    }),
    __metadata("design:type", String)
], ExamQrCode.prototype, "coder", void 0);
exports.ExamQrCode = ExamQrCode;
class ExamCopy {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], ExamCopy.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        enum: [0, 1],
        description: '考试二维码路径',
    }),
    __metadata("design:type", Number)
], ExamCopy.prototype, "type", void 0);
exports.ExamCopy = ExamCopy;
class ScoreConfig {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], ScoreConfig.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '多选得分设置id',
    }),
    __metadata("design:type", Number)
], ScoreConfig.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '多选得分百分比',
    }),
    __metadata("design:type", Number)
], ScoreConfig.prototype, "percentage", void 0);
exports.ScoreConfig = ScoreConfig;
//# sourceMappingURL=exam.js.map