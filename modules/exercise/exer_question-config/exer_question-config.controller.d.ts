import { QuestionConfigService } from '@/modules/question-config/question-config.service';
import { QuestionConfig } from '@/modules/question-config/question-config.entity';
export declare class QuestionConfigController {
    private readonly questionConfigService;
    constructor(questionConfigService: QuestionConfigService);
    getAllList(): Promise<QuestionConfig[]>;
    create(body: any): Promise<{
        msg: string;
        result: QuestionConfig;
    }>;
}
