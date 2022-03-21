import { TestAnalysisService } from './test-analysis.service';
export declare class TestAnalysisController {
    private readonly testAnalysisService;
    constructor(testAnalysisService: TestAnalysisService);
    getTestQuestions(params: any): Promise<any[]>;
}
