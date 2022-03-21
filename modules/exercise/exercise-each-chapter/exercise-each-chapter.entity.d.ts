import { ExerBigChapter } from '@/modules/exercise/exercise-big-chapter/exercise-big-chapter.entity';
import { TestBank } from '@/modules/testBank/testBank.entity';
export declare class EachChapter {
    id: number;
    key: number;
    name: string;
    sum: number;
    exerBigChapter: ExerBigChapter;
    testBanks: TestBank[];
}
