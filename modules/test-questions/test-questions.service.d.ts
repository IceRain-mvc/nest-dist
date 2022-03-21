import { Repository } from 'typeorm';
import { TestQuestions } from './test-questions.entity';
export declare class TestQuestionsService {
    private readonly testQuestionsRepository;
    constructor(testQuestionsRepository: Repository<TestQuestions>);
    create(body: any): Promise<Partial<TestQuestions[]>>;
    getAll(): Promise<Partial<TestQuestions[]>>;
}
