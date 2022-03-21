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
exports.AnswerQuestions = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const bcrypt = require("bcryptjs");
let AnswerQuestions = class AnswerQuestions {
    static async comparePassword(password0, password1) {
        return bcrypt.compareSync(password0, password1);
    }
    static encryptPassword(password) {
        return bcrypt.hashSync(password, 10);
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, studentsId: { required: true, type: () => String }, ASMessage: { required: true, type: () => String }, ASState: { required: false, type: () => String }, courseId: { required: false, type: () => String }, createTime: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AnswerQuestions.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '用户id' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], AnswerQuestions.prototype, "studentsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '消息' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], AnswerQuestions.prototype, "ASMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '状态' }),
    (0, typeorm_1.Column)('simple-enum', { enum: ['active', 'locked'], default: 'active' }),
    __metadata("design:type", String)
], AnswerQuestions.prototype, "ASState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', example: '' }),
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], AnswerQuestions.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        comment: '创建时间',
        name: 'createTime',
    }),
    __metadata("design:type", Date)
], AnswerQuestions.prototype, "createTime", void 0);
AnswerQuestions = __decorate([
    (0, typeorm_1.Entity)()
], AnswerQuestions);
exports.AnswerQuestions = AnswerQuestions;
//# sourceMappingURL=course-answer-questions.entity.js.map