import { ExamService } from '@/modules/exam/exam.service';
import { Exam } from '@/modules/exam/exam.entity';
import { ExamConfigService } from '@/modules/exam-config/exam-config.service';
import { ExamineeFillMessageService } from '@/modules/examinee-fill-message/examinee-fill-message.service';
export declare class ExamController {
    private examService;
    private readonly examConfigService;
    private readonly examineeFillMessageService;
    constructor(examService: ExamService, examConfigService: ExamConfigService, examineeFillMessageService: ExamineeFillMessageService);
    create(body: any): Promise<{
        code: number;
        exam: Exam;
    }>;
    getThisExamMessage(id: string): Promise<Exam>;
    updateThisExamMessage(body: any): Promise<Exam>;
    getRunningCount(): Promise<{
        running: number;
        willRun: number;
        runed: number;
    }>;
    getExamList(query: any): Promise<[Exam[], number]>;
    getExamById(id: string): Promise<Exam>;
    changeCurrentExamType(body: any): Promise<void>;
    setStarExam(id: any): Promise<any>;
    cancelStarExam(body: any): Promise<any>;
    removeToRecycleBin(id: string): Promise<any>;
    removeOutRecycleBin(id: string): Promise<any>;
    deleteExamInRecycleBin(id: string): Promise<any>;
    saveExamTimeConfig(body: any): Promise<Exam>;
    saveExamConfig(body: any): Promise<Exam>;
    testTimesRequire(body: any): Promise<Exam>;
    saveExamConfigRequire(body: any): Promise<string>;
    getExamConfigSettings(id: string): Promise<any>;
    saveExamConfigMessage(body: any): Promise<string>;
    optionsGetScore(body: any): Promise<void>;
    examCopy(body: any): Promise<{
        msg: string;
    }>;
    deleteExamInRecycleBinAll(): Promise<Exam[]>;
    getQues(examId: string): Promise<Exam>;
    setIsPublish(examId: any): Promise<{
        msg: string;
    }>;
    setQrcode(body: any): Promise<string>;
}
