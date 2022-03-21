import { SmokeStrategyService } from '@/modules/smoke-strategy/smoke-strategy.service';
export declare class SmokeStrategyController {
    private readonly smokeStrategyService;
    constructor(smokeStrategyService: SmokeStrategyService);
    createStrategy(body: any): Promise<{
        msg: string;
        data: number;
    }>;
    deleteSmokeStrategy(id: number): Promise<{
        msg: string;
        result: import("typeorm").DeleteResult;
    }>;
    getStrategyQuestionList(id: any): Promise<{
        msg: string;
        data: import("../testBank/testBank.entity").TestBank[];
    }>;
    saveQuestionInfoStrategy(body: any): Promise<{
        msg: string;
    }>;
    updateSmokeStrategy(body: any): Promise<{
        msg: string;
        data: import("typeorm").UpdateResult;
    }>;
    deleteSmokeQuestion(body: {
        sId: number;
        id: string;
    }): Promise<{
        msg: string;
        data: string;
    }>;
    bathDelete(body: any): Promise<{
        msg: string;
        data: string;
        code?: undefined;
    } | {
        msg: string;
        code: number;
        data?: undefined;
    }>;
    infoSmoke(body: any): Promise<void>;
}
