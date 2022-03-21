import { Repository } from 'typeorm';
import { analyseBouncedExaminees } from './analyse-bounced-examinee.entity';
export declare class AnalyseBouncedExamineesService {
    private readonly bouncedRepository;
    constructor(bouncedRepository: Repository<analyseBouncedExaminees>);
    create(examBody: Partial<analyseBouncedExaminees>): Promise<{
        code: string;
        msg: string;
        list: analyseBouncedExaminees;
    }>;
    getAll(query: any): Promise<{
        code: string;
        msg: string;
        list?: Partial<[analyseBouncedExaminees[], number]>;
    }>;
    Update(amend: any): Promise<{
        code: string;
        msg: string;
        list?: undefined;
    } | {
        code: string;
        msg: string;
        list: Promise<import("typeorm").UpdateResult>;
    }>;
}
