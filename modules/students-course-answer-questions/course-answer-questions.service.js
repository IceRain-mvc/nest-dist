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
exports.AnswerQuestionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_answer_questions_entity_1 = require("./course-answer-questions.entity");
let AnswerQuestionsService = class AnswerQuestionsService {
    constructor(answerQuestionsRepository) {
        this.answerQuestionsRepository = answerQuestionsRepository;
    }
    async create(body) {
        const res = this.answerQuestionsRepository.create(body);
        return await this.answerQuestionsRepository.save(res);
    }
    async getAll() {
        return this.answerQuestionsRepository.find();
    }
};
AnswerQuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_answer_questions_entity_1.AnswerQuestions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnswerQuestionsService);
exports.AnswerQuestionsService = AnswerQuestionsService;
//# sourceMappingURL=course-answer-questions.service.js.map