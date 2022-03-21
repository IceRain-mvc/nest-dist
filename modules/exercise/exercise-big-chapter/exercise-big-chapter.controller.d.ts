import { ExerciseBigChapterService } from './exercise-big-chapter.service';
import { ExerBigChapter } from '@/modules/exercise/exercise-big-chapter/exercise-big-chapter.entity';
export declare class ExerciseBigChapterController {
    private exerciseBigChapter;
    constructor(exerciseBigChapter: ExerciseBigChapterService);
    create(body: any): Promise<{
        msg: string;
        data: ExerBigChapter;
    }>;
    getAll(): Promise<ExerBigChapter[]>;
    deleteThisChapter(id: any): Promise<import("typeorm").DeleteResult>;
    getEachChapter(id: any): Promise<{
        msg: string;
        strategyList: import("../exercise-each-chapter/exercise-each-chapter.entity").EachChapter[];
    }>;
    saveBigQuestionTitle(body: any): Promise<import("typeorm").UpdateResult>;
    saveQuestionInfoBig(body: any): Promise<ExerBigChapter | {
        msg: string;
    }>;
    moveToTop(body: any): Promise<{
        msg: string;
    }>;
}
