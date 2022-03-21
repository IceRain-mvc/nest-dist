import { ExamConfig } from '@/modules/exam-config/exam-config.entity';
import { Repository, UpdateResult } from 'typeorm';
export declare class ExamConfigService {
    private readonly ExamConfigService;
    constructor(ExamConfigService: Repository<ExamConfig>);
    create(): Promise<ExamConfig>;
    getAll(): Promise<ExamConfig[]>;
    updateExamConfig(body: any, id: any): Promise<void>;
    cutScreenConfig(body: any): Promise<UpdateResult>;
    setOptionsPercentage(body: any): Promise<any>;
}
