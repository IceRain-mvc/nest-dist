import { AnalyseIntegral } from '@/modules/analyse-integral/analyse-integral.entity';
import { Repository } from 'typeorm';
export declare class AnalyseIntegralService {
    private readonly analyseIntegralRepository;
    constructor(analyseIntegralRepository: Repository<AnalyseIntegral>);
    create(body: any): Promise<AnalyseIntegral[]>;
    getAll(query: any): Promise<[AnalyseIntegral[], number]>;
    clearIntegral(query: any): Promise<{
        msg: string;
    }>;
}
