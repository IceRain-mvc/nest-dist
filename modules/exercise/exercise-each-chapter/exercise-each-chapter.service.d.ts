import { EachChapter } from '@/modules/exercise/exercise-each-chapter/exercise-each-chapter.entity';
import { TestBank } from '@/modules/testBank/testBank.entity';
import { Repository } from 'typeorm';
export declare class ExerciseEachChapterService {
    private readonly exerciseBigChapterService;
    constructor(exerciseBigChapterService: Repository<EachChapter>);
    create(body: any): Promise<{
        msg: string;
        data: number;
    }>;
    getSimulationQuestions(id: any): Promise<EachChapter[]>;
    deleteThisStrategy(id: any): Promise<import("typeorm").DeleteResult>;
    updateSingleScore(body: any): Promise<import("typeorm").UpdateResult>;
    getStrategyQuestionList(id: any): Promise<{
        msg: string;
        data: TestBank[];
    }>;
    saveQuestionInfoStrategy(body: any): Promise<{
        msg: string;
    }>;
    deleteSmokeQuestion(body: any): Promise<{
        msg: string;
        data: string;
    }>;
    infoSmoke(body: any): Promise<void>;
    bath(body: any): Promise<{
        msg: string;
        data: string;
        code?: undefined;
    } | {
        msg: string;
        code: number;
        data?: undefined;
    }>;
}
