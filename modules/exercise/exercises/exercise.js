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
exports.SaveExerciseConfig = exports.ExamConfigRequire = exports.TestTimes = exports.AnswerTimeConfig = exports.TimeConfig = exports.StarConfig = exports.ChangeExamTreeType = exports.CreateExercise = exports.UpdateExercise = void 0;
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
class UpdateExercise {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '07725cf8-e2c4-496f-add2-ddf8139efb02',
        description: '考试的id',
    }),
    __metadata("design:type", String)
], UpdateExercise.prototype, "exerciseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '考试名称',
    }),
    __metadata("design:type", String)
], UpdateExercise.prototype, "exerciseTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '考试分类id',
    }),
    __metadata("design:type", Number)
], UpdateExercise.prototype, "treeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '考生参加考试方式',
    }),
    __metadata("design:type", Number)
], UpdateExercise.prototype, "joinWay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '考试描述',
    }),
    __metadata("design:type", String)
], UpdateExercise.prototype, "exerciseInstructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '考试口令',
    }),
    __metadata("design:type", String)
], UpdateExercise.prototype, "exercisePassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '考试是否开启签名',
        enum: [0, 1],
    }),
    __metadata("design:type", Number)
], UpdateExercise.prototype, "openSignature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ExamineeFillMessages],
        required: false,
        description: '考生开始考试须填信息',
    }),
    __metadata("design:type", Array)
], UpdateExercise.prototype, "exerciseineeFillMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: StuAndDep,
        example: exampleStuAndDep,
        required: false,
        description: '指定的考生和部门',
    }),
    __metadata("design:type", Array)
], UpdateExercise.prototype, "exerciseineesAndDepartments", void 0);
exports.UpdateExercise = UpdateExercise;
class CreateExercise {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试名称',
    }),
    __metadata("design:type", String)
], CreateExercise.prototype, "exerciseTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考试分类id',
    }),
    __metadata("design:type", Number)
], CreateExercise.prototype, "treeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考生参加考试方式',
    }),
    __metadata("design:type", Number)
], CreateExercise.prototype, "joinWay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '考试描述',
    }),
    __metadata("design:type", String)
], CreateExercise.prototype, "exerciseInstructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '考试口令',
    }),
    __metadata("design:type", String)
], CreateExercise.prototype, "exercisePassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考试是否开启签名',
        enum: [0, 1],
    }),
    __metadata("design:type", Number)
], CreateExercise.prototype, "openSignature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ExamineeFillMessages],
        required: false,
        description: '考生开始考试须填信息',
    }),
    __metadata("design:type", Array)
], CreateExercise.prototype, "exerciseineeFillMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: StuAndDep,
        example: exampleStuAndDep,
        required: false,
        description: '指定的考生和部门',
    }),
    __metadata("design:type", Array)
], CreateExercise.prototype, "exerciseineesAndDepartments", void 0);
exports.CreateExercise = CreateExercise;
class ChangeExamTreeType {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], ChangeExamTreeType.prototype, "exerciseId", void 0);
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
], StarConfig.prototype, "exerciseId", void 0);
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
], TimeConfig.prototype, "exerciseId", void 0);
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
], AnswerTimeConfig.prototype, "exerciseId", void 0);
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
], TestTimes.prototype, "exerciseId", void 0);
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
], ExamConfigRequire.prototype, "exerciseId", void 0);
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
class ExerciseConfigSelect {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: idObj,
        required: true,
    }),
    __metadata("design:type", idObj)
], ExerciseConfigSelect.prototype, "paperMode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExerciseConfigSelect.prototype, "paperModeRequires", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: idObj,
        required: true,
    }),
    __metadata("design:type", idObj)
], ExerciseConfigSelect.prototype, "gradeConfig", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExerciseConfigSelect.prototype, "gradeConfigRequires", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExerciseConfigSelect.prototype, "exerciseConfigRequires", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: idObj,
        required: true,
    }),
    __metadata("design:type", idObj)
], ExerciseConfigSelect.prototype, "answerEquipment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExerciseConfigSelect.prototype, "answerEquipmentRequires", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExerciseConfigSelect.prototype, "antiCheatingConfigs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Number],
        required: false,
        description: '考试设置信息',
    }),
    __metadata("design:type", Array)
], ExerciseConfigSelect.prototype, "questionConfigs", void 0);
class SaveExerciseConfig {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: true,
        description: '考试id',
    }),
    __metadata("design:type", String)
], SaveExerciseConfig.prototype, "exerciseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: true,
        description: '考试设置id',
    }),
    __metadata("design:type", Number)
], SaveExerciseConfig.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: BaseSet,
        required: true,
        description: '考试设置信息',
    }),
    __metadata("design:type", BaseSet)
], SaveExerciseConfig.prototype, "gap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ExerciseConfigSelect,
        required: true,
        description: '考试设置信息',
    }),
    __metadata("design:type", ExerciseConfigSelect)
], SaveExerciseConfig.prototype, "select", void 0);
exports.SaveExerciseConfig = SaveExerciseConfig;
//# sourceMappingURL=exercise.js.map