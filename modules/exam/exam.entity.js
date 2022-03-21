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
exports.Exam = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const paper_mode_entity_1 = require("../paper-mode/paper-mode.entity");
const exam_config_require_entity_1 = require("../exam-config-require/exam-config-require.entity");
const paper_mode_require_entity_1 = require("../paper-mode-require/paper-mode-require.entity");
const question_config_entity_1 = require("../question-config/question-config.entity");
const anti_cheating_config_entity_1 = require("../anti-cheating-config/anti-cheating-config.entity");
const exam_time_entity_1 = require("../exam-time/exam-time.entity");
const answer_time_entity_1 = require("../answer-time/answer-time.entity");
const test_times_entity_1 = require("../test-times/test-times.entity");
const get_score_config_entity_1 = require("../get-score-config/get-score-config.entity");
const examinee_fill_message_entity_1 = require("../examinee-fill-message/examinee-fill-message.entity");
const participation_way_entity_1 = require("../participation-way/participation-way.entity");
const exam_config_entity_1 = require("../exam-config/exam-config.entity");
const tree_person_entity_1 = require("../tree-person/tree-person.entity");
const grade_config_entity_1 = require("../grade-config/grade-config.entity");
const grade_config_require_entity_1 = require("../grade-config-require/grade-config-require.entity");
const answer_equipment_entity_1 = require("../answer-equipment/answer-equipment.entity");
const answer_equipment_require_entity_1 = require("../answer-equipment-require/answer-equipment-require.entity");
const paper_exam_entity_1 = require("../paper-exam/paper-exam.entity");
const students_entity_1 = require("../students/students.entity");
const student_mark_entity_1 = require("../student-mark/student-mark.entity");
let Exam = class Exam {
    static _OPENAPI_METADATA_FACTORY() {
        return { examId: { required: true, type: () => String }, examTitle: { required: true, type: () => String }, examInstructions: { required: true, type: () => String }, openSignature: { required: true, type: () => Number }, isDelete: { required: true, type: () => Number }, star: { required: true, type: () => Number }, link: { required: true, type: () => String }, examPassword: { required: true, type: () => String }, isPublish: { required: true, type: () => Number }, qrCode: { required: true, type: () => String }, partStr: { required: true, type: () => String }, deleteTime: { required: true, type: () => Date }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, examConfig: { required: true, type: () => require("../exam-config/exam-config.entity").ExamConfig }, paperMode: { required: true, type: () => require("../paper-mode/paper-mode.entity").PaperMode }, examConfigRequires: { required: true, type: () => [require("../exam-config-require/exam-config-require.entity").ExamConfigRequire] }, paperModeRequires: { required: true, type: () => [require("../paper-mode-require/paper-mode-require.entity").PaperModeRequire] }, questionConfigs: { required: true, type: () => [require("../question-config/question-config.entity").QuestionConfig] }, antiCheatingConfigs: { required: true, type: () => [require("../anti-cheating-config/anti-cheating-config.entity").AntiCheatingConfig] }, examTimes: { required: true, type: () => [require("../exam-time/exam-time.entity").ExamTime] }, answerTimes: { required: true, type: () => [require("../answer-time/answer-time.entity").AnswerTime] }, testTimes: { required: true, type: () => [require("../test-times/test-times.entity").TestTimes] }, getScoreConfig: { required: true, type: () => require("../get-score-config/get-score-config.entity").GetScoreConfig }, examineeFillMessage: { required: true, type: () => [require("../examinee-fill-message/examinee-fill-message.entity").ExamineeFillMessage] }, participationWay: { required: true, type: () => require("../participation-way/participation-way.entity").ParticipationWay }, treePerson: { required: true, type: () => require("../tree-person/tree-person.entity").TreePerson }, gradeConfig: { required: true, type: () => require("../grade-config/grade-config.entity").GradeConfig }, gradeConfigRequires: { required: true, type: () => [require("../grade-config-require/grade-config-require.entity").GradeConfigRequire] }, answerEquipment: { required: true, type: () => require("../answer-equipment/answer-equipment.entity").AnswerEquipment }, answerEquipmentRequires: { required: true, type: () => [require("../answer-equipment-require/answer-equipment-require.entity").AnswerEquipmentRequire] }, paperExam: { required: true, type: () => require("../paper-exam/paper-exam.entity").PaperExam }, students: { required: true, type: () => [require("../students/students.entity").Students] }, phones: { required: true, type: () => [require("../student-mark/student-mark.entity").StudentsMark] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Exam.prototype, "examId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'react',
        required: true,
        description: '当前考试的名称',
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Exam.prototype, "examTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '当前考试须知',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Exam.prototype, "examInstructions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: false,
        description: '开启签名验证，0不开启，1开启，默认不开启',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Exam.prototype, "openSignature", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: false,
        description: '是否在全部考试中删除，1删除，0不删除，默认值为0',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Exam.prototype, "isDelete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: false,
        description: '是否设置此次考试为标记，1是，0不是，默认0',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Exam.prototype, "star", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '考试链接',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Exam.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '考试口令',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Exam.prototype, "examPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'number',
        required: false,
        description: '考试是否已发布',
    }),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Exam.prototype, "isPublish", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '二维码图片地址',
    }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Exam.prototype, "qrCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        required: false,
        description: '指定部门id集合',
    }),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Exam.prototype, "partStr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'datetime',
        required: false,
        description: '移动到到回收站时间',
    }),
    (0, typeorm_1.Column)({ default: '9999/07/20 00:00:00' }),
    __metadata("design:type", Date)
], Exam.prototype, "deleteTime", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    }),
    __metadata("design:type", Date)
], Exam.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        comment: '更新时间',
        name: 'update_at',
    }),
    __metadata("design:type", Date)
], Exam.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => exam_config_entity_1.ExamConfig, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", exam_config_entity_1.ExamConfig)
], Exam.prototype, "examConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paper_mode_entity_1.PaperMode, (paperMode) => paperMode.exams),
    __metadata("design:type", paper_mode_entity_1.PaperMode)
], Exam.prototype, "paperMode", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_config_require_entity_1.ExamConfigRequire, (examConfigRequires) => examConfigRequires.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "examConfigRequires", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => paper_mode_require_entity_1.PaperModeRequire, (paperModeRequire) => paperModeRequire.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "paperModeRequires", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => question_config_entity_1.QuestionConfig, (questionConfig) => questionConfig.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "questionConfigs", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => anti_cheating_config_entity_1.AntiCheatingConfig, (antiCheatingConfig) => antiCheatingConfig.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "antiCheatingConfigs", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => exam_time_entity_1.ExamTime, (examTime) => examTime.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "examTimes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => answer_time_entity_1.AnswerTime, (answerTime) => answerTime.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "answerTimes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => test_times_entity_1.TestTimes, (testTimes) => testTimes.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "testTimes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => get_score_config_entity_1.GetScoreConfig, (getScoreConfig) => getScoreConfig.exams),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", get_score_config_entity_1.GetScoreConfig)
], Exam.prototype, "getScoreConfig", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => examinee_fill_message_entity_1.ExamineeFillMessage, (examineeFillMessage) => examineeFillMessage.exam),
    __metadata("design:type", Array)
], Exam.prototype, "examineeFillMessage", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participation_way_entity_1.ParticipationWay, (participationWay) => participationWay.exams),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", participation_way_entity_1.ParticipationWay)
], Exam.prototype, "participationWay", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tree_person_entity_1.TreePerson, (treePerson) => treePerson.exams),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", tree_person_entity_1.TreePerson)
], Exam.prototype, "treePerson", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grade_config_entity_1.GradeConfig, (gradeConfig) => gradeConfig.exams),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", grade_config_entity_1.GradeConfig)
], Exam.prototype, "gradeConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => grade_config_require_entity_1.GradeConfigRequire, (gradeConfigRequires) => gradeConfigRequires.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "gradeConfigRequires", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => answer_equipment_entity_1.AnswerEquipment, (answerEquipment) => answerEquipment.exams),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", answer_equipment_entity_1.AnswerEquipment)
], Exam.prototype, "answerEquipment", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => answer_equipment_require_entity_1.AnswerEquipmentRequire, (answerEquipmentRequire) => answerEquipmentRequire.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "answerEquipmentRequires", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => paper_exam_entity_1.PaperExam, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", paper_exam_entity_1.PaperExam)
], Exam.prototype, "paperExam", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => students_entity_1.Students, (students) => students.exams),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Exam.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_mark_entity_1.StudentsMark, (question) => question.question),
    __metadata("design:type", Array)
], Exam.prototype, "phones", void 0);
Exam = __decorate([
    (0, typeorm_1.Entity)()
], Exam);
exports.Exam = Exam;
//# sourceMappingURL=exam.entity.js.map