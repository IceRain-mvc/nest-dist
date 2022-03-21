import { Exercise } from './exercise.entity';
import { Repository } from 'typeorm';
import { TreePersonService } from '@/modules/tree-person/tree-person.service';
import { StudentsService } from '@/modules/students/students.service';
import { PaperBigQuestionService } from '@/modules/paper-big-question/paper-big-question.service';
import { PaperExamService } from '@/modules/paper-exam/paper-exam.service';
import { SmokeStrategyService } from '@/modules/smoke-strategy/smoke-strategy.service';
import { QuestionSelectionStrategyService } from '@/modules/question-selection-strategy/question-selection-strategy.service';
import { ExamineeFillMessageService } from '@/modules/examinee-fill-message/examinee-fill-message.service';
import { ExamConfigService } from '@/modules/exam-config/exam-config.service';
export declare class ExerciseService {
    private readonly exerciseRepository;
    private readonly treePersonService;
    private readonly studentsService;
    private readonly paperExamService;
    private readonly paperBigQuestionService;
    private readonly smokeService;
    private readonly randomService;
    private readonly exerciseineeService;
    private readonly examConfigService;
    constructor(exerciseRepository: Repository<Exercise>, treePersonService: TreePersonService, studentsService: StudentsService, paperExamService: PaperExamService, paperBigQuestionService: PaperBigQuestionService, smokeService: SmokeStrategyService, randomService: QuestionSelectionStrategyService, exerciseineeService: ExamineeFillMessageService, examConfigService: ExamConfigService);
    create(body: any): Promise<{
        code: number;
        exercise: Exercise;
    }>;
    getThisExerciseMessage(id: string): Promise<Exercise>;
    updateThisExamMessage(body: any): Promise<Exercise>;
    getExamList(query: any): Promise<[Exercise[], number]>;
    getExamById(id: any): Promise<Exercise>;
    changeCurrentExamType(body: any): Promise<void>;
    getExamStateCount(): Promise<{
        running: number;
        willRun: number;
        runed: number;
    }>;
    setStarExam(body: any): Promise<any>;
    cancelStarExam(body: any): Promise<any>;
    removeToRecycleBin(exerciseId: any): Promise<any>;
    removeOutRecycleBin(exerciseId: any): Promise<any>;
    deleteExerciseInRecycleBin(exerciseId: any): Promise<any>;
    saveExamTimeConfig(body: any): Promise<Exercise>;
    saveAnswerTimeConfig(body: any): Promise<Exercise>;
    answerTimesRequire(body: any): Promise<any>;
    optionsGetScore(body: any): Promise<void>;
    saveExamconfigRequire(body: any): Promise<string>;
    createExamManager(exercise: any, config: any, manager: any): Promise<void>;
    getExamConfigSettings(id: any): Promise<any>;
    dataProcess(data: any): any;
    saveManagerExamRelations(select: any, exerciseId: any): Promise<void>;
    paperModeConfig(body: any): Promise<void>;
    gradeConfigRequire(body: any): Promise<void>;
    examRelationsConfig(body: any): Promise<void>;
    answerEquipmentConfig(body: any): Promise<void>;
    saveAntiCheatingConfig(body: any): Promise<void>;
    saveTestConfig(body: any): Promise<void>;
    examCopy(body: any, newExercise: any, examineeFullMessageService: any, examConfigService: any): Promise<{
        msg: string;
    }>;
    getId(array: any): Promise<any[]>;
    getExamFullMessage(exerciseId: any): Promise<Exercise[]>;
    updateExamMessage(body: any): Promise<import("typeorm").UpdateResult>;
    ExamInRecycleBinAll(): Promise<Exercise[]>;
    deleteExamInRecycleBinAll(): Promise<Exercise[]>;
    getQuestion(id: string): Promise<Exercise>;
    setIsPublish(examId: string): Promise<{
        msg: string;
    }>;
    saveQrcode(body: any): Promise<{
        data: import("typeorm").UpdateResult;
        msg: string;
    }>;
}
