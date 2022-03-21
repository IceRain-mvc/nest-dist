import { analyseBouncedPractice } from './analyse-bounced-practice.entity';
import { AnalyseBouncedPracticeService } from './analyse-bounced-practice.service';
export declare class AnalyseBouncedPracticeController {
    private readonly practiceService;
    constructor(practiceService: AnalyseBouncedPracticeService);
    create(examBody: any): Promise<{
        code: string;
        msg: string;
        list: analyseBouncedPractice;
    }>;
    getAll(query: any): Promise<{
        code?: string;
        msg: string;
        data?: [analyseBouncedPractice[]?, number?];
    }>;
    getUpdate(examBody: any): Promise<{
        code: string;
        msg: string;
        list?: undefined;
    } | {
        code: string;
        msg: string;
        list: Promise<import("typeorm").UpdateResult>;
    }>;
}
