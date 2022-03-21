import { Repository } from 'typeorm';
import { analyseStatistical } from './analyse-statistical.entity';
export declare class AnalyseStatisticalService {
    private readonly statisticalRepository;
    constructor(statisticalRepository: Repository<analyseStatistical>);
    create(examBody: Partial<analyseStatistical>): Promise<{
        code: string;
        msg: string;
        list: analyseStatistical;
    }>;
    getAll(query: any): Promise<{
        msg: string;
        data?: Partial<[analyseStatistical[], number]>;
    }>;
}
