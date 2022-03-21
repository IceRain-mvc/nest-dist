import { analyseBouncedExaminees } from './analyse-bounced-examinee.entity';
import { AnalyseBouncedExamineesService } from './analyse-bounced-examinee.service';
export declare class AnalyseBouncedExamineesController {
    private readonly bouncedService;
    constructor(bouncedService: AnalyseBouncedExamineesService);
    create(examBody: any): Promise<{
        code: string;
        msg: string;
        list: analyseBouncedExaminees;
    }>;
    getAll(query: any): Promise<{
        code: string;
        msg: string;
        list?: [analyseBouncedExaminees[]?, number?];
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
