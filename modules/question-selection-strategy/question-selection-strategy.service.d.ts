import { QuestionSelectionStrategy } from '@/modules/question-selection-strategy/question-selection-strategy.entity';
import { Repository } from 'typeorm';
export declare class QuestionSelectionStrategyService {
    private readonly questionSelectionStrategyRepository;
    constructor(questionSelectionStrategyRepository: Repository<QuestionSelectionStrategy>);
    create(body: any): Promise<{
        msg: string;
        data: number;
    }>;
    findStrategy(id: any): Promise<QuestionSelectionStrategy>;
    getStrategyList(id: any): Promise<import("../testBank/testBank.entity").TestBank[]>;
    deleteThisStrategy(id: any): Promise<import("typeorm").DeleteResult>;
    updateStrategy(body: any): Promise<import("typeorm").UpdateResult>;
}
