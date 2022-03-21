import { TestQuestionsService } from './test-questions.service';
import { TestQuestions } from './test-questions.entity';
export declare class TestQuestionsController {
    private readonly testQuestionsService;
    constructor(testQuestionsService: TestQuestionsService);
    create(body: any): Promise<TestQuestions[]>;
    getAll(): Promise<TestQuestions[]>;
}
