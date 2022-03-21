import { PaperBigQuestionService } from '@/modules/paper-big-question/paper-big-question.service';
import { QuestionSelectionStrategyService } from '@/modules/question-selection-strategy/question-selection-strategy.service';
export declare class PaperBigQuestionController {
    private paperBigQuestionService;
    private readonly questionSelectionStrategyService;
    constructor(paperBigQuestionService: PaperBigQuestionService, questionSelectionStrategyService: QuestionSelectionStrategyService);
    create(body: any): Promise<{
        msg: string;
        data: import("./paper-big-question.entity").PaperBigQuestion;
    }>;
    deleteThisQuestion(id: any): Promise<import("typeorm").DeleteResult>;
    addRandomSelectionStrategy(id: any): Promise<import("./paper-big-question.entity").PaperBigQuestion>;
    findStrategy(body: any): Promise<any>;
    moveToTop(body: any): Promise<"已经是最顶了" | "到底了" | "移动成功">;
    saveBigQuestionTitle(body: any): Promise<import("typeorm").UpdateResult>;
    getQuestionsById(id: number): Promise<import("./paper-big-question.entity").PaperBigQuestion>;
    saveBigQuestionDes(body: any): Promise<import("typeorm").UpdateResult>;
    saveQuestionInfoBig(body: any): Promise<import("./paper-big-question.entity").PaperBigQuestion | {
        msg: string;
    }>;
    deleteSmallQuestion(body: any): Promise<{
        msg: string;
    }>;
    getSmokeStrategy(id: any): Promise<{
        msg: string;
        strategyList: import("../smoke-strategy/smoke-strategy.entity").SmokeStrategy[];
    }>;
    changeScoreValue(body: any): Promise<{
        msg: string;
        result: import("typeorm").UpdateResult;
    }>;
    changeScoreValueList(body: any): Promise<{
        msg: string;
        result: import("typeorm").UpdateResult;
    }>;
    changeQuesSort(body: any): Promise<{
        msg: string;
        code: number;
    }>;
    infoPageQuestion(body: any): Promise<void>;
}
