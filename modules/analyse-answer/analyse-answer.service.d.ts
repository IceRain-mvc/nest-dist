import { Repository } from 'typeorm';
import { AnalyseAnswerExam } from './analyse-answer-exam.entity';
import { PaperExamService } from '@/modules/paper-exam/paper-exam.service';
import { TestBankService } from '@/modules/testBank/testBank.service';
export declare class AnalyseAnswerService {
    private readonly analyseAnswerExamRepository;
    private readonly paperExamService;
    private readonly testBankService;
    constructor(analyseAnswerExamRepository: Repository<AnalyseAnswerExam>, paperExamService: PaperExamService, testBankService: TestBankService);
    getPaperSets(query: any): Promise<import("../paper-exam/paper-exam.entity").PaperExam>;
    getExamPaper(query: any): Promise<[AnalyseAnswerExam[], number]>;
}
