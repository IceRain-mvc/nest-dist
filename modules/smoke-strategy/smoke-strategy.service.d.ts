import { SmokeStrategy } from '@/modules/smoke-strategy/smoke-strategy.entity';
import { Repository } from 'typeorm';
import { PaperBigQuestionService } from '@/modules/paper-big-question/paper-big-question.service';
import { TestBank } from '@/modules/testBank/testBank.entity';
export declare class SmokeStrategyService {
    private readonly smokeStrategyRepository;
    private readonly paperBigQuestionService;
    constructor(smokeStrategyRepository: Repository<SmokeStrategy>, paperBigQuestionService: PaperBigQuestionService);
    createStrategy(body: any): Promise<{
        msg: string;
        data: number;
    }>;
    findStrategyById(id: any): Promise<SmokeStrategy>;
    getSimulationQuestions(id: any): Promise<{
        allNoDifficulty: number;
        allEasy: number;
        allMedium: number;
        allDifficult: number;
        allCount: number;
    }>;
    deleteSmokeStrategy(id: any): Promise<{
        msg: string;
        result: import("typeorm").DeleteResult;
    }>;
    getStrategyQuestionList(id: any): Promise<{
        msg: string;
        data: TestBank[];
    }>;
    saveQuestionInfoStrategy(body: any): Promise<{
        msg: string;
    }>;
    updateSmokeStrategy(body: any): Promise<{
        msg: string;
        data: import("typeorm").UpdateResult;
    }>;
    deleteSmokeQuestion(body: any): Promise<{
        msg: string;
        data: string;
    }>;
    bath(body: any): Promise<{
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
