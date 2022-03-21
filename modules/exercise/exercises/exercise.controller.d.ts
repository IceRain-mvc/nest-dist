import { ExerciseService } from './exercise.service';
import { ExamConfigService } from '@/modules/exam-config/exam-config.service';
import { ExamineeFillMessageService } from '@/modules/examinee-fill-message/examinee-fill-message.service';
import { Exercise } from './exercise.entity';
export declare class ExerciseController {
    private exerciseService;
    private readonly examConfigService;
    private readonly examineeFillMessageService;
    constructor(exerciseService: ExerciseService, examConfigService: ExamConfigService, examineeFillMessageService: ExamineeFillMessageService);
    create(body: any): Promise<{
        code: number;
        exercise: Exercise;
    }>;
    getThisExamMessage(id: string): Promise<Exercise>;
    updateThisExamMessage(body: any): Promise<Exercise>;
    getRunningCount(): Promise<{
        running: number;
        willRun: number;
        runed: number;
    }>;
    getExamList(query: any): Promise<[Exercise[], number]>;
    getExamById(id: string): Promise<Exercise>;
    changeCurrentExamType(body: any): Promise<void>;
    setStarExam(id: any): Promise<any>;
    cancelStarExam(body: any): Promise<any>;
    removeToRecycleBin(id: string): Promise<any>;
    removeOutRecycleBin(id: string): Promise<any>;
    deleteExamInRecycleBin(id: string): Promise<any>;
    saveExamTimeConfig(body: any): Promise<Exercise>;
    saveExamConfig(body: any): Promise<Exercise>;
    testTimesRequire(body: any): Promise<any>;
    saveExamConfigRequire(body: any): Promise<string>;
    getExamConfigSettings(id: number): Promise<any>;
    saveExamConfigMessage(body: any): Promise<string>;
    optionsGetScore(body: any): Promise<void>;
    examCopy(body: any): Promise<{
        msg: string;
    }>;
    deleteExamInRecycleBinAll(): Promise<Exercise[]>;
    getQues(examId: string): Promise<Exercise>;
    setIsPublish(exerciseId: any): Promise<{
        msg: string;
    }>;
}
