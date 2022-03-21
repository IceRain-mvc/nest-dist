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
exports.Exercise = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const paper_mode_entity_1 = require("../../paper-mode/paper-mode.entity");
const exam_config_require_entity_1 = require("../../exam-config-require/exam-config-require.entity");
const paper_mode_require_entity_1 = require("../../paper-mode-require/paper-mode-require.entity");
const question_config_entity_1 = require("../../question-config/question-config.entity");
const anti_cheating_config_entity_1 = require("../../anti-cheating-config/anti-cheating-config.entity");
const exam_time_entity_1 = require("../../exam-time/exam-time.entity");
const answer_time_entity_1 = require("../../answer-time/answer-time.entity");
const test_times_entity_1 = require("../../test-times/test-times.entity");
const get_score_config_entity_1 = require("../../get-score-config/get-score-config.entity");
const examinee_fill_message_entity_1 = require("../../examinee-fill-message/examinee-fill-message.entity");
const exam_config_entity_1 = require("../../exam-config/exam-config.entity");
const tree_person_entity_1 = require("../../tree-person/tree-person.entity");
const grade_config_entity_1 = require("../../grade-config/grade-config.entity");
const grade_config_require_entity_1 = require("../../grade-config-require/grade-config-require.entity");
const answer_equipment_entity_1 = require("../../answer-equipment/answer-equipment.entity");
const answer_equipment_require_entity_1 = require("../../answer-equipment-require/answer-equipment-require.entity");
const paper_exam_entity_1 = require("../../paper-exam/paper-exam.entity");
const students_entity_1 = require("../../students/students.entity");
const exercise_way_entity_1 = require("../exercise-way/exercise-way.entity");
let Exercise = class Exercise {
    static _OPENAPI_METADATA_FACTORY() {
        return { exerciseId: { required: true, type: () => String }, exerciseTitle: { required: true, type: () => String }, exerciseInstructions: { required: true, type: () => String }, openSignature: { required: true, type: () => Number }, isDelete: { required: true, type: () => Number }, star: { required: true, type: () => Number }, link: { required: true, type: () => String }, exercisePassword: { required: true, type: () => String }, isPublish: { required: true, type: () => Number }, exercisePattern: { required: true, type: () => Number }, qrCode: { required: true, type: () => String }, deleteTime: { required: true, type: () => Date }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, partStr: { required: true, type: () => String }, exerciseConfig: { required: true, type: () => require("../../exam-config/exam-config.entity").ExamConfig }, paperMode: { required: true, type: () => require("../../paper-mode/paper-mode.entity").PaperMode }, exerciseConfigRequires: { required: true, type: () => [require("../../exam-config-require/exam-config-require.entity").ExamConfigRequire] }, paperModeRequires: { required: true, type: () => [require("../../paper-mode-require/paper-mode-require.entity").PaperModeRequire] }, questionConfigs: { required: true, type: () => [require("../../question-config/question-config.entity").QuestionConfig] }, antiCheatingConfigs: { required: true, type: () => [require("../../anti-cheating-config/anti-cheating-config.entity").AntiCheatingConfig] }, exerciseTimes: { required: true, type: () => [require("../../exam-time/exam-time.entity").ExamTime] }, answerTimes: { required: true, type: () => [require("../../answer-time/answer-time.entity").AnswerTime] }, testTimes: { required: true, type: () => [require("../../test-times/test-times.entity").TestTimes] }, getScoreConfig: { required: true, type: () => require("../../get-score-config/get-score-config.entity").GetScoreConfig }, exerciseineeFillMessages: { required: true, type: () => [require("../../examinee-fill-message/examinee-fill-message.entity").ExamineeFillMessage] }, exerciseWay: { required: true, type: () => require("../exercise-way/exercise-way.entity").ExerciseWay }, treePerson: { required: true, type: () => require("../../tree-person/tree-person.entity").TreePerson }, gradeConfig: { required: true, type: () => require("../../grade-config/grade-config.entity").GradeConfig }, gradeConfigRequires: { required: true, type: () => [require("../../grade-config-require/grade-config-require.entity").GradeConfigRequire] }, answerEquipment: { required: true, type: () => require("../../answer-equipment/answer-equipment.entity").AnswerEquipment }, answerEquipmentRequires: { required: true, type: () => [require("../../answer-equipment-require/answer-equipment-require.entity").AnswerEquipmentRequire] }, paperExam: { required: true, type: () => require("../../paper-exam/paper-exam.entity").PaperExam }, students: { required: true, type: () => [require("../../students/students.entity").Students] }, questionConfiges: { required: true, type: () => [require("../../question-config/question-config.entity").QuestionConfig] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Exercise.prototype, "exerciseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'react',
        description: '当前练习的名称',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Exercise.prototype, "exerciseTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '当前练习须知',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Exercise.prototype, "exerciseInstructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '开启签名验证，0不开启，1开启，默认不开启',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Exercise.prototype, "openSignature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '是否在全部练习中删除，1删除，0不删除，默认值为0',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Exercise.prototype, "isDelete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '是否设置此次练习为标记，1是，0不是，默认0',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Exercise.prototype, "star", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'https: //zhengtao/exercise/09jdf',
        description: '练习链接',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Exercise.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '345678',
        description: '练习口令',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Exercise.prototype, "exercisePassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        example: 1,
        description: '练习是否已发布',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Exercise.prototype, "isPublish", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        description: '练习的模式，0章节，1模拟',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", Number)
], Exercise.prototype, "exercisePattern", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '二维码图片地址',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Exercise.prototype, "qrCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'datetime',
        description: '移动到到回收站时间',
    }),
    (0, typeorm_1.Column)({ default: '9999/07/20 00:00:00' }),
    __metadata("design:type", Date)
], Exercise.prototype, "deleteTime", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], Exercise.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], Exercise.prototype, "updateAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: '指定部门id集合',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Exercise.prototype, "partStr", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => exam_config_entity_1.ExamConfig, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exam_config_entity_1.ExamConfig)
], Exercise.prototype, "exerciseConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paper_mode_entity_1.PaperMode, (paperMode) => paperMode.exercises),
    __metadata("design:type", paper_mode_entity_1.PaperMode)
], Exercise.prototype, "paperMode", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_config_require_entity_1.ExamConfigRequire, (exerciseConfigRequires) => exerciseConfigRequires.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "exerciseConfigRequires", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => paper_mode_require_entity_1.PaperModeRequire, (paperModeRequire) => paperModeRequire.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "paperModeRequires", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_config_entity_1.QuestionConfig, (questionConfig) => questionConfig.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "questionConfigs", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => anti_cheating_config_entity_1.AntiCheatingConfig, (antiCheatingConfig) => antiCheatingConfig.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "antiCheatingConfigs", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_time_entity_1.ExamTime, (examTime) => examTime.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "exerciseTimes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => answer_time_entity_1.AnswerTime, (answerTime) => answerTime.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "answerTimes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => test_times_entity_1.TestTimes, (testTimes) => testTimes.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "testTimes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => get_score_config_entity_1.GetScoreConfig, (getScoreConfig) => getScoreConfig.exercises),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", get_score_config_entity_1.GetScoreConfig)
], Exercise.prototype, "getScoreConfig", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => examinee_fill_message_entity_1.ExamineeFillMessage, (examineeFillMessage) => examineeFillMessage.exercise),
    __metadata("design:type", Array)
], Exercise.prototype, "exerciseineeFillMessages", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exercise_way_entity_1.ExerciseWay, (exerciseWay) => exerciseWay.exercises),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exercise_way_entity_1.ExerciseWay)
], Exercise.prototype, "exerciseWay", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tree_person_entity_1.TreePerson, (treePerson) => treePerson.exercises),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tree_person_entity_1.TreePerson)
], Exercise.prototype, "treePerson", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grade_config_entity_1.GradeConfig, (gradeConfig) => gradeConfig.exercises),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", grade_config_entity_1.GradeConfig)
], Exercise.prototype, "gradeConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => grade_config_require_entity_1.GradeConfigRequire, (gradeConfigRequires) => gradeConfigRequires.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "gradeConfigRequires", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => answer_equipment_entity_1.AnswerEquipment, (answerEquipment) => answerEquipment.exercises),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", answer_equipment_entity_1.AnswerEquipment)
], Exercise.prototype, "answerEquipment", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => answer_equipment_require_entity_1.AnswerEquipmentRequire, (answerEquipmentRequire) => answerEquipmentRequire.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "answerEquipmentRequires", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => paper_exam_entity_1.PaperExam, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", paper_exam_entity_1.PaperExam)
], Exercise.prototype, "paperExam", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => students_entity_1.Students, (students) => students.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_config_entity_1.QuestionConfig, (questionConfig) => questionConfig.exercises),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exercise.prototype, "questionConfiges", void 0);
Exercise = __decorate([
    (0, typeorm_1.Entity)()
], Exercise);
exports.Exercise = Exercise;
//# sourceMappingURL=exercise.entity.js.map