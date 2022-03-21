import { AnalyseLearningService } from './analyse-learning.service';
export declare class AnalyseLearningController {
    private readonly analyseLearningService;
    constructor(analyseLearningService: AnalyseLearningService);
    getAll(params: any): Promise<any[]>;
}
