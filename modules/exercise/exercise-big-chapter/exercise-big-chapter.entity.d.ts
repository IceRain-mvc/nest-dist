import { PaperExam } from '@/modules/paper-exam/paper-exam.entity';
import { EachChapter } from '@/modules/exercise/exercise-each-chapter/exercise-each-chapter.entity';
import { TestBank } from '@/modules/testBank/testBank.entity';
export declare class ExerBigChapter {
    id: number;
    title: string;
    sortId: number;
    createTime: Date;
    updateTime: Date;
    eachChapters: EachChapter[];
    paperExam: PaperExam;
    testBanks: TestBank[];
}
