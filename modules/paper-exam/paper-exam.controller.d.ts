import { PaperExamService } from '@/modules/paper-exam/paper-exam.service';
export declare class PaperExamController {
    private readonly paperExamService;
    constructor(paperExamService: PaperExamService);
    create(body: any): Promise<{
        msg: string;
        paperId: number;
    }>;
    createExercise(body: any): Promise<{
        msg: string;
        paperId: number;
    }>;
    createTest(body: any): Promise<{
        msg: string;
        paperId: number;
    }>;
    getPaperMessage(id: number): Promise<any[]>;
    generateExam(id: any): Promise<{
        code: number;
        msg: string;
    }>;
    generatorStrategyExam(id: any): Promise<{
        code: number;
        msg: string;
    }>;
    getGeneratorPaper(id: any): Promise<import("./paper-exam.entity").PaperExam>;
    getGeneratoChapter(id: any): Promise<import("./paper-exam.entity").PaperExam>;
    getBigQuestion(id: any): Promise<import("./paper-exam.entity").PaperExam>;
    getSmallQuestionCount(paperId: any): Promise<import("./paper-exam.entity").PaperExam>;
}
