import { PaperBigQuestion } from '@/modules/paper-big-question/paper-big-question.entity';
import { TestBank } from '@/modules/testBank/testBank.entity';
export declare class QuestionSelectionStrategy {
    id: number;
    questionClassify: string;
    questionType: number;
    noDifficulty: number;
    easy: number;
    medium: number;
    difficult: number;
    questionAllMarks: number;
    everyScore: number;
    sortIndex: number;
    paperBigQuestion: PaperBigQuestion;
    testBank: TestBank[];
}
