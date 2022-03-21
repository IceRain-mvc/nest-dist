import { QuestionConfig } from '@/modules/question-config/question-config.entity';
import { Repository } from 'typeorm';
export declare class QuestionConfigService {
    private readonly questionConfigRepository;
    constructor(questionConfigRepository: Repository<QuestionConfig>);
    run(): Promise<{
        msg: string;
    }>;
    getAllList(): Promise<QuestionConfig[]>;
    getAll(): Promise<QuestionConfig[]>;
    create(body: any): Promise<{
        msg: string;
        result: QuestionConfig;
    }>;
}
