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
exports.StudentsExamResultController = void 0;
const openapi = require("@nestjs/swagger");
const students_exam_result_service_1 = require("./students-exam-result.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const students_exam_result_entity_1 = require("./students-exam-result.entity");
let StudentsExamResultController = class StudentsExamResultController {
    constructor(StudentsExamResultService) {
        this.StudentsExamResultService = StudentsExamResultService;
    }
    create(body) {
        return this.StudentsExamResultService.create(body);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: students_exam_result_entity_1.StudentsExamResult,
    }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: [require("./students-exam-result.entity").StudentsExamResult] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsExamResultController.prototype, "create", null);
StudentsExamResultController = __decorate([
    (0, swagger_1.ApiTags)('考生成绩'),
    (0, common_1.Controller)('studentsExamResult'),
    __metadata("design:paramtypes", [students_exam_result_service_1.StudentsExamResultService])
], StudentsExamResultController);
exports.StudentsExamResultController = StudentsExamResultController;
//# sourceMappingURL=students-exam-result.controller.js.map