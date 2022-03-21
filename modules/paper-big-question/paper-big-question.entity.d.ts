import { QuestionSelectionStrategy } from '@/modules/question-selection-strategy/question-selection-strategy.entity';
import { PaperExam } from '@/modules/paper-exam/paper-exam.entity';
import { SmokeStrategy } from '@/modules/smoke-strategy/smoke-strategy.entity';
import { TestBank } from '@/modules/testBank/testBank.entity';
export declare class PaperBigQuestion {
    id: number;
    title: string;
    description: string;
    descriptionMD: string;
    count: number;
    allScore: number;
    sortId: number;
    createTime: Date;
    updateTime: Date;
    questionSelectionStrategys: QuestionSelectionStrategy[];
    paperExam: PaperExam;
    smokeStrategys: SmokeStrategy[];
    testBanks: TestBank[];
}
