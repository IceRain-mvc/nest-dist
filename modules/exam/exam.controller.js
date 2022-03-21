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
exports.ExamController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const exam_service_1 = require("./exam.service");
const exam_entity_1 = require("./exam.entity");
const exam_config_service_1 = require("../exam-config/exam-config.service");
const examinee_fill_message_service_1 = require("../examinee-fill-message/examinee-fill-message.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const exam_1 = require("./exam");
let ExamController = class ExamController {
    constructor(examService, examConfigService, examineeFillMessageService) {
        this.examService = examService;
        this.examConfigService = examConfigService;
        this.examineeFillMessageService = examineeFillMessageService;
    }
    create(body) {
        return this.examService.create(body);
    }
    getThisExamMessage(id) {
        return this.examService.getThisExamMessage(id);
    }
    updateThisExamMessage(body) {
        return this.examService.updateThisExamMessage(body);
    }
    getRunningCount() {
        return this.examService.getExamStateCount();
    }
    getExamList(query) {
        return this.examService.getExamList(query);
    }
    getExamById(id) {
        return this.examService.getExamById(id);
    }
    async changeCurrentExamType(body) {
        return await this.examService.changeCurrentExamType(body);
    }
    setStarExam(id) {
        return this.examService.setStarExam(id);
    }
    cancelStarExam(body) {
        return this.examService.cancelStarExam(body);
    }
    removeToRecycleBin(id) {
        return this.examService.removeToRecycleBin(id);
    }
    removeOutRecycleBin(id) {
        return this.examService.removeOutRecycleBin(id);
    }
    deleteExamInRecycleBin(id) {
        return this.examService.deleteExamInRecycleBin(id);
    }
    saveExamTimeConfig(body) {
        return this.examService.saveExamTimeConfig(body);
    }
    saveExamConfig(body) {
        return this.examService.saveAnswerTimeConfig(body);
    }
    testTimesRequire(body) {
        return this.examService.answerTimesRequire(body);
    }
    saveExamConfigRequire(body) {
        return this.examService.saveExamconfigRequire(body);
    }
    getExamConfigSettings(id) {
        return this.examService.getExamConfigSettings(id);
    }
    async saveExamConfigMessage(body) {
        const { gap, select, id, examId } = body;
        await this.examConfigService.updateExamConfig(gap, id);
        await this.examService.saveManagerExamRelations(select, examId);
        return '修改成功';
    }
    async optionsGetScore(body) {
        const { examId, id, percentage } = body;
        if (id === 2) {
            await this.examConfigService.setOptionsPercentage({ id, percentage });
        }
        await this.examService.optionsGetScore({ examId, id });
    }
    async examCopy(body) {
        const newExam = await this.create({ examTitle: '（复制）' });
        return await this.examService.examCopy(body, newExam, this.examineeFillMessageService, this.examConfigService);
    }
    deleteExamInRecycleBinAll() {
        return this.examService.deleteExamInRecycleBinAll();
    }
    getQues(examId) {
        return this.examService.getQuestion(examId);
    }
    setIsPublish(examId) {
        return this.examService.setIsPublish(examId);
    }
    setQrcode(body) {
        return this.examService.saveQrcode(body);
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({
        name: 'examTitle',
        required: true,
        description: '考试名称',
    }),
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.CreateExam,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('this-exam/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exam.entity").Exam }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getThisExamMessage", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.UpdateExam,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('update-exam'),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: require("./exam.entity").Exam }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "updateThisExamMessage", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/get-exam-state-count'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getRunningCount", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getExamList", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('getExamById/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exam.entity").Exam }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getExamById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.ChangeExamTreeType,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('change-current-type'),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "changeCurrentExamType", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.StarConfig,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('setStarExam'),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExamController.prototype, "setStarExam", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.StarConfig,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('cancelStarExam'),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExamController.prototype, "cancelStarExam", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/removeToRecycleBin/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamController.prototype, "removeToRecycleBin", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/removeOutRecycleBin/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamController.prototype, "removeOutRecycleBin", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/deleteExamInRecycleBin/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamController.prototype, "deleteExamInRecycleBin", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.TimeConfig,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('save-exam-time-config'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exam.entity").Exam }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "saveExamTimeConfig", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.AnswerTimeConfig,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('save-answer-time-require'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exam.entity").Exam }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "saveExamConfig", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.TestTimes,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('test-times-require'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exam.entity").Exam }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "testTimesRequire", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.ExamConfigRequire,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('save-exam-config-require'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "saveExamConfigRequire", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('getExamConfigSettings/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamController.prototype, "getExamConfigSettings", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.SaveExamConfig,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('/save-exam-config'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "saveExamConfigMessage", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.ScoreConfig,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('options-get-score'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "optionsGetScore", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.ExamCopy,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('copy'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "examCopy", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/deleteExamInRecycleBinAll'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: [require("./exam.entity").Exam] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "deleteExamInRecycleBinAll", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'examId',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: '权限不足' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/getQuestion/:examId'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exam.entity").Exam }),
    __param(0, (0, common_1.Param)('examId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "getQues", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'examId',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('setIsPublish/:examId'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)('examId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "setIsPublish", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exam_1.ExamQrCode,
    }),
    (0, swagger_1.ApiHeader)({
        name: 'token',
        required: true,
        description: '请求的时候 携带token',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: '请求成功' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.UNAUTHORIZED, description: 'token失效' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.FORBIDDEN,
        description: '此角色无权限操作',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('qrcode'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExamController.prototype, "setQrcode", null);
ExamController = __decorate([
    (0, swagger_1.ApiTags)('考试'),
    (0, common_1.Controller)('exam'),
    __metadata("design:paramtypes", [exam_service_1.ExamService,
        exam_config_service_1.ExamConfigService,
        examinee_fill_message_service_1.ExamineeFillMessageService])
], ExamController);
exports.ExamController = ExamController;
//# sourceMappingURL=exam.controller.js.map