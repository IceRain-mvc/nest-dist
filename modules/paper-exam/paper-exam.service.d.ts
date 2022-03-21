import { PaperExam } from '@/modules/paper-exam/paper-exam.entity';
import { Repository } from 'typeorm';
import { PaperBigQuestionService } from '@/modules/paper-big-question/paper-big-question.service';
import { ExerciseBigChapterService } from '@/modules/exercise/exercise-big-chapter/exercise-big-chapter.service';
export declare class PaperExamService {
    private readonly paperExamRepository;
    private readonly paperBigQuestionService;
    private readonly exerciseBigChapterService;
    constructor(paperExamRepository: Repository<PaperExam>, paperBigQuestionService: PaperBigQuestionService, exerciseBigChapterService: ExerciseBigChapterService);
    create(body: any): Promise<{
        msg: string;
        paperId: number;
    }>;
    createTest(body: any): Promise<{
        msg: string;
        paperId: number;
    }>;
    createExercise(body: any): Promise<{
        msg: string;
        paperId: number;
    }>;
    getPaperMessage(id: any): Promise<any[]>;
    getPaperBigQuestionId(paperId: any): Promise<number[]>;
    getChapterBigQuestionId(ChapterId: any): Promise<number[]>;
    generatorPaper(paperId: any): Promise<PaperExam>;
    generatorChapter(paperId: any): Promise<PaperExam>;
    updatePaperScoreAndCount(id: any): Promise<{
        msg: string;
        result: import("typeorm").UpdateResult;
    }>;
    generateExam(id: any): Promise<{
        code: number;
        msg: string;
    }>;
    generatorStrategyExam(id: any): Promise<{
        code: number;
        msg: string;
    }>;
    getBigQuestion(id: any): Promise<PaperExam>;
    strategyCount(id: number): Promise<PaperExam>;
    exerciseCount(id: number): Promise<PaperExam>;
    saveAllQuestion(body: any): Promise<import("typeorm").UpdateResult>;
}
