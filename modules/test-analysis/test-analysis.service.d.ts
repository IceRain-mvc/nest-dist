import { Repository } from 'typeorm';
import { TestAnalysis } from './test-analysis.entity';
import { TestBankService } from '@/modules/testBank/testBank.service';
export declare class TestAnalysisService {
    private readonly testAnalysis;
    private readonly testBankService;
    constructor(testAnalysis: Repository<TestAnalysis>, testBankService: TestBankService);
    getTestQuestions(datas: any): Promise<any[]>;
}
