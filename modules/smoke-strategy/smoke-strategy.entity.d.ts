import { PaperBigQuestion } from '@/modules/paper-big-question/paper-big-question.entity';
import { TestBank } from '@/modules/testBank/testBank.entity';
export declare class SmokeStrategy {
    id: number;
    noDifficulty: number;
    easy: number;
    medium: number;
    difficult: number;
    count: number;
    everyScore: number;
    sortIndex: number;
    paperBigQuestion: PaperBigQuestion;
    testBanks: TestBank[];
}
