import { AnalyseIntegral } from '@/modules/analyse-integral/analyse-integral.entity';
import { AnalyseIntegralService } from '@/modules/analyse-integral/analyse-integral.service';
export declare class AnalyseIntegralController {
    private readonly analyseIntegralService;
    constructor(analyseIntegralService: AnalyseIntegralService);
    create(data: any): Promise<AnalyseIntegral[]>;
    getAll(query: any): Promise<[AnalyseIntegral[], number]>;
    clearIntegral(query: any): Promise<{
        msg: string;
    }>;
}
