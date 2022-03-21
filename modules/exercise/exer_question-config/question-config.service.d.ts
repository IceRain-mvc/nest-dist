import { QuestionConfigs } from '@/modules/exercise/exer_question-config/exer_question-config.entity';
import { Repository } from 'typeorm';
export declare class QuestionConfigService {
    private readonly questionConfigRepository;
    constructor(questionConfigRepository: Repository<QuestionConfigs>);
    run(): Promise<{
        msg: string;
    }>;
    getAllList(): Promise<QuestionConfigs[]>;
    getAll(): Promise<QuestionConfigs[]>;
    create(body: any): Promise<{
        msg: string;
        result: QuestionConfigs;
    }>;
}
