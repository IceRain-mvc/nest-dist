import { Repository } from 'typeorm';
import { analyseBouncedPractice } from './analyse-bounced-practice.entity';
export declare class AnalyseBouncedPracticeService {
    private readonly practiceRepository;
    constructor(practiceRepository: Repository<analyseBouncedPractice>);
    create(examBody: Partial<analyseBouncedPractice>): Promise<{
        code: string;
        msg: string;
        list: analyseBouncedPractice;
    }>;
    getAll(query: any): Promise<{
        code?: string;
        msg: string;
        data?: Partial<[analyseBouncedPractice[], number]>;
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
