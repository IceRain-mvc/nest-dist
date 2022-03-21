import { PaperBigQuestion } from '@/modules/paper-big-question/paper-big-question.entity';
import { Repository } from 'typeorm';
import { PaperExamService } from '@/modules/paper-exam/paper-exam.service';
import { SmokeStrategyService } from '@/modules/smoke-strategy/smoke-strategy.service';
import { TestBankService } from '@/modules/testBank/testBank.service';
export declare class PaperBigQuestionService {
    private readonly paperExamService;
    private readonly smokeStrategyService;
    private readonly testBankService;
    private readonly paperBigQuestionRepository;
    constructor(paperExamService: PaperExamService, smokeStrategyService: SmokeStrategyService, testBankService: TestBankService, paperBigQuestionRepository: Repository<PaperBigQuestion>);
    create(body: any): Promise<{
        msg: string;
        data: PaperBigQuestion;
    }>;
    deleteThisQuestion(id: number): Promise<import("typeorm").DeleteResult>;
    addRandomSelectionStrategy(id: any, result: any): Promise<PaperBigQuestion>;
    deleteStrategy(param: any): Promise<PaperBigQuestion>;
    findStrategy(body: any): Promise<any>;
    moveToTop(body: any): Promise<"已经是最顶了" | "到底了" | "移动成功">;
    getStrategyQuestion(body: any): Promise<{
        code: number;
        msg: string;
    }>;
    getStrategyRandomQuestionById(body: any): Promise<{
        code: number;
        msg: string;
    }>;
    getQuestionsById(id: number): Promise<PaperBigQuestion>;
    saveBigQuestionTitle(body: any): Promise<import("typeorm").UpdateResult>;
    saveBigQuestionDes(body: any): Promise<import("typeorm").UpdateResult>;
    saveQuestionInfoBig(body: any): Promise<PaperBigQuestion | {
        msg: string;
    }>;
    updateBigQuestionScore(id: any): Promise<{
        msg: string;
        result: import("typeorm").UpdateResult;
    }>;
    deleteSmallQuestion(body: any): Promise<{
        msg: string;
    }>;
    getSmokeStrategy(id: any): Promise<{
        msg: string;
        strategyList: import("../smoke-strategy/smoke-strategy.entity").SmokeStrategy[];
    }>;
    getSmokes(id: any): Promise<import("../smoke-strategy/smoke-strategy.entity").SmokeStrategy[]>;
    getRandoms(id: any): Promise<import("../question-selection-strategy/question-selection-strategy.entity").QuestionSelectionStrategy[]>;
    computedScoreByStrategy(id: any): Promise<{
        msg: string;
    }>;
    updateSingleScore(body: any): Promise<{
        msg: string;
        result: import("typeorm").UpdateResult;
    }>;
    updateGroupScore(body: any): Promise<{
        msg: string;
        result: import("typeorm").UpdateResult;
    }>;
    changeQuesSort(body: any): Promise<{
        msg: string;
        code: number;
    }>;
    infoPageQuestion(body: any): Promise<void>;
}
