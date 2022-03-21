import { AnswerQuestionsService } from './course-answer-questions.service';
import { AnswerQuestions } from './course-answer-questions.entity';
export declare class AnswerQuestionsController {
    private readonly answerQuestionsService;
    constructor(answerQuestionsService: AnswerQuestionsService);
    creatDate(createCatDto: any): Promise<AnswerQuestions[]>;
    getAll(query: any): Promise<AnswerQuestions[]>;
}
