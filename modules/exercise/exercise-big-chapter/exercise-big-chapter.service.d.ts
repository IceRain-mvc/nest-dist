import { ExerBigChapter } from '@/modules/exercise/exercise-big-chapter/exercise-big-chapter.entity';
import { Repository } from 'typeorm';
import { ExerciseEachChapterService } from '@/modules/exercise/exercise-each-chapter/exercise-each-chapter.service';
import { TestBankService } from '@/modules/testBank/testBank.service';
export declare class ExerciseBigChapterService {
    private readonly exerciseEachChapterService;
    private readonly testBankService;
    private readonly exerciseBigChapterService;
    constructor(exerciseEachChapterService: ExerciseEachChapterService, testBankService: TestBankService, exerciseBigChapterService: Repository<ExerBigChapter>);
    getQuestionsById(id: any): Promise<ExerBigChapter>;
    create(body: any): Promise<{
        msg: string;
        data: ExerBigChapter;
    }>;
    getAll(): Promise<ExerBigChapter[]>;
    deleteThisChapter(id: any): Promise<import("typeorm").DeleteResult>;
    getEachChapter(body: any): Promise<{
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
