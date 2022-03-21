import { AnalyseStatisticalService } from './analyse-statistical.service';
import { analyseStatistical } from './analyse-statistical.entity';
export declare class AnalyseStatisticalController {
    private readonly StatisticalService;
    constructor(StatisticalService: AnalyseStatisticalService);
    create(examBody: any): Promise<{
        code: string;
        msg: string;
        list: analyseStatistical;
    }>;
    getAll(query: any): Promise<{
        msg: string;
        data?: [analyseStatistical[]?, number?];
    }>;
}
