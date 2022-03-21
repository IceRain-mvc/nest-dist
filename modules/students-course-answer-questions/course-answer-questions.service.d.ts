import { Repository } from 'typeorm';
import { AnswerQuestions } from './course-answer-questions.entity';
export declare class AnswerQuestionsService {
    private answerQuestionsRepository;
    constructor(answerQuestionsRepository: Repository<AnswerQuestions>);
    create(body: any): Promise<AnswerQuestions[]>;
    getAll(): Promise<AnswerQuestions[]>;
}
