import { QuestionSelectionStrategyService } from '@/modules/question-selection-strategy/question-selection-strategy.service';
export declare class QuestionSelectionStrategyController {
    private readonly questionSelectionStrategyService;
    constructor(questionSelectionStrategyService: QuestionSelectionStrategyService);
    create(body: any): Promise<{
        msg: string;
        data: number;
    }>;
    getStrategyList(id: any): Promise<import("../testBank/testBank.entity").TestBank[]>;
    deleteThisStrategy(id: any): Promise<import("typeorm").DeleteResult>;
    updateStrategy(body: any): Promise<import("typeorm").UpdateResult>;
}
