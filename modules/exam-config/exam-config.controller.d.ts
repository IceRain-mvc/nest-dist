import { ExamConfigService } from '@/modules/exam-config/exam-config.service';
import { ExamConfig } from '@/modules/exam-config/exam-config.entity';
import { UpdateResult } from 'typeorm';
export declare class ExamConfigController {
    private readonly examConfigService;
    constructor(examConfigService: ExamConfigService);
    create(): Promise<ExamConfig>;
    getAll(): Promise<any[]>;
    saveExamConfig(body: any, id: any): Promise<void>;
    cutScreenConfig(body: any): Promise<UpdateResult>;
}
