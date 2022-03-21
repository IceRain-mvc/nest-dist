import { ExerciseEachChapterService } from '@/modules/exercise/exercise-each-chapter/exercise-each-chapter.service';
export declare class ExerciseEachChapterController {
    private exerciseEachChapterController;
    constructor(exerciseEachChapterController: ExerciseEachChapterService);
    addEachChapter(body: any): Promise<{
        msg: string;
        data: number;
    }>;
    deleteThisStrategy(id: any): Promise<import("typeorm").DeleteResult>;
    changeScoreValue(body: any): Promise<import("typeorm").UpdateResult>;
    getStrategyQuestionList(id: any): Promise<{
        msg: string;
        data: import("../../testBank/testBank.entity").TestBank[];
    }>;
    saveQuestionInfoStrategy(body: any): Promise<{
        msg: string;
    }>;
    deleteSmokeQuestion(body: {
        sId: number;
        id: string;
    }): Promise<{
        msg: string;
        data: string;
    }>;
    infoSmoke(body: any): Promise<void>;
    bathDelete(body: any): Promise<{
        msg: string;
        data: string;
        code?: undefined;
    } | {
        msg: string;
        code: number;
        data?: undefined;
    }>;
}
