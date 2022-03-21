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
exports.ExerciseController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const exercise_service_1 = require("./exercise.service");
const exam_config_service_1 = require("../../exam-config/exam-config.service");
const examinee_fill_message_service_1 = require("../../examinee-fill-message/examinee-fill-message.service");
const exercise_entity_1 = require("./exercise.entity");
const exercise_1 = require("./exercise");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let ExerciseController = class ExerciseController {
    constructor(exerciseService, examConfigService, examineeFillMessageService) {
        this.exerciseService = exerciseService;
        this.examConfigService = examConfigService;
        this.examineeFillMessageService = examineeFillMessageService;
    }
    create(body) {
        return this.exerciseService.create(body);
    }
    getThisExamMessage(id) {
        return this.exerciseService.getThisExerciseMessage(id);
    }
    updateThisExamMessage(body) {
        return this.exerciseService.updateThisExamMessage(body);
    }
    getRunningCount() {
        return this.exerciseService.getExamStateCount();
    }
    getExamList(query) {
        return this.exerciseService.getExamList(query);
    }
    getExamById(id) {
        return this.exerciseService.getExamById(id);
    }
    async changeCurrentExamType(body) {
        const res = await this.exerciseService.changeCurrentExamType(body);
        return res;
    }
    setStarExam(id) {
        return this.exerciseService.setStarExam(id);
    }
    cancelStarExam(body) {
        return this.exerciseService.cancelStarExam(body);
    }
    removeToRecycleBin(id) {
        return this.exerciseService.removeToRecycleBin(id);
    }
    removeOutRecycleBin(id) {
        return this.exerciseService.removeOutRecycleBin(id);
    }
    deleteExamInRecycleBin(id) {
        return this.exerciseService.deleteExerciseInRecycleBin(id);
    }
    saveExamTimeConfig(body) {
        return this.exerciseService.saveExamTimeConfig(body);
    }
    saveExamConfig(body) {
        return this.exerciseService.saveAnswerTimeConfig(body);
    }
    testTimesRequire(body) {
        return this.exerciseService.answerTimesRequire(body);
    }
    saveExamConfigRequire(body) {
        return this.exerciseService.saveExamconfigRequire(body);
    }
    getExamConfigSettings(id) {
        return this.exerciseService.getExamConfigSettings(id);
    }
    async saveExamConfigMessage(body) {
        const { gap, select, id, exerciseId } = body;
        await this.examConfigService.updateExamConfig(gap, id);
        await this.exerciseService.saveManagerExamRelations(select, exerciseId);
        return '修改成功';
    }
    async optionsGetScore(body) {
        const { exerciseId, id, percentage } = body;
        if (id === 2) {
            await this.examConfigService.setOptionsPercentage({ id, percentage });
        }
        await this.exerciseService.optionsGetScore({ exerciseId, id });
    }
    async examCopy(body) {
        const newExercise = await this.create({ exerciseTitle: '（复制）' });
        const res = await this.exerciseService.examCopy(body, newExercise, this.examineeFillMessageService, this.examConfigService);
        return res;
    }
    deleteExamInRecycleBinAll() {
        return this.exerciseService.deleteExamInRecycleBinAll();
    }
    getQues(examId) {
        return this.exerciseService.getQuestion(examId);
    }
    setIsPublish(exerciseId) {
        return this.exerciseService.setIsPublish(exerciseId);
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
        type: exercise_1.CreateExercise,
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
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: exercise_entity_1.Exercise,
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('this-exercise/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exercise.entity").Exercise }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "getThisExamMessage", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.UpdateExercise,
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
    (0, common_1.Put)('update-exercise'),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: require("./exercise.entity").Exercise }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "updateThisExamMessage", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/get-exam-state-count'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "getRunningCount", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "getExamList", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: '考试id',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: '请求成功' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('getExamById/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exercise.entity").Exercise }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "getExamById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.ChangeExamTreeType,
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
], ExerciseController.prototype, "changeCurrentExamType", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.StarConfig,
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
    (0, common_1.Put)('setStarExercise'),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "setStarExam", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.StarConfig,
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
    (0, common_1.Put)('cancelStarExercise'),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "cancelStarExam", null);
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
], ExerciseController.prototype, "removeToRecycleBin", null);
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
], ExerciseController.prototype, "removeOutRecycleBin", null);
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
    (0, common_1.Delete)('/deleteExerciseInRecycleBin/:id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "deleteExamInRecycleBin", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.TimeConfig,
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
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exercise.entity").Exercise }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "saveExamTimeConfig", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.AnswerTimeConfig,
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
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./exercise.entity").Exercise }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "saveExamConfig", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.TestTimes,
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
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "testTimesRequire", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.ExamConfigRequire,
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
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "saveExamConfigRequire", null);
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
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "getExamConfigSettings", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        required: false,
        type: exercise_1.SaveExerciseConfig,
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
    (0, common_1.Put)('/save-exam-config'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "saveExamConfigMessage", null);
__decorate([
    (0, common_1.Put)('options-get-score'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "optionsGetScore", null);
__decorate([
    (0, common_1.Post)('copy'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "examCopy", null);
__decorate([
    (0, common_1.Delete)('/deleteExerciseInRecycleBinAll'),
    openapi.ApiResponse({ status: 200, type: [require("./exercise.entity").Exercise] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExerciseController.prototype, "deleteExamInRecycleBinAll", null);
__decorate([
    (0, common_1.Get)('/getQuestion/:examId'),
    openapi.ApiResponse({ status: 200, type: require("./exercise.entity").Exercise }),
    __param(0, (0, common_1.Param)('examId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "getQues", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'exerciseId',
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
    (0, common_1.Put)('setIsPublish/:exerciseId'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)('exerciseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "setIsPublish", null);
ExerciseController = __decorate([
    (0, swagger_1.ApiTags)('练习'),
    (0, common_1.Controller)('exercise'),
    __metadata("design:paramtypes", [exercise_service_1.ExerciseService,
        exam_config_service_1.ExamConfigService,
        examinee_fill_message_service_1.ExamineeFillMessageService])
], ExerciseController);
exports.ExerciseController = ExerciseController;
//# sourceMappingURL=exercise.controller.js.map