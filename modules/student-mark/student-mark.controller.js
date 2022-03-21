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
exports.StudentsMarkController = void 0;
const openapi = require("@nestjs/swagger");
const student_mark_service_1 = require("./student-mark.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const student_mark_entity_1 = require("./student-mark.entity");
let StudentsMarkController = class StudentsMarkController {
    constructor(studentsMarkService) {
        this.studentsMarkService = studentsMarkService;
    }
    create(body) {
        return this.studentsMarkService.create(body);
    }
    getStudentMarkById(query) {
        return this.studentsMarkService.getStudentMarkById(query);
    }
    findOneStudentMarkById(query) {
        return this.studentsMarkService.findOneStudentMarkById(query);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        description: '请求体',
        type: student_mark_entity_1.StudentsMark,
    }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsMarkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/getStudentMarkById'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsMarkController.prototype, "getStudentMarkById", null);
__decorate([
    (0, common_1.Get)('/findOneStudentMarkById'),
    openapi.ApiResponse({ status: 200, type: require("./student-mark.entity").StudentsMark }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentsMarkController.prototype, "findOneStudentMarkById", null);
StudentsMarkController = __decorate([
    (0, swagger_1.ApiTags)('考生成绩'),
    (0, common_1.Controller)('studentsMark'),
    __metadata("design:paramtypes", [student_mark_service_1.StudentsMarkService])
], StudentsMarkController);
exports.StudentsMarkController = StudentsMarkController;
//# sourceMappingURL=student-mark.controller.js.map