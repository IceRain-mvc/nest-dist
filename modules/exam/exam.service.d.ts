import { Exam } from '@/modules/exam/exam.entity';
import { Repository } from 'typeorm';
import { TreePersonService } from '@/modules/tree-person/tree-person.service';
import { StudentsService } from '@/modules/students/students.service';
import { PaperBigQuestionService } from '@/modules/paper-big-question/paper-big-question.service';
import { PaperExamService } from '@/modules/paper-exam/paper-exam.service';
import { SmokeStrategyService } from '@/modules/smoke-strategy/smoke-strategy.service';
import { QuestionSelectionStrategyService } from '@/modules/question-selection-strategy/question-selection-strategy.service';
import { ExamineeFillMessageService } from '@/modules/examinee-fill-message/examinee-fill-message.service';
import { ExamConfigService } from '@/modules/exam-config/exam-config.service';
export declare class ExamService {
    private readonly examRepository;
    private readonly treePersonService;
    private readonly studentsService;
    private readonly paperExamService;
    private readonly paperBigQuestionService;
    private readonly smokeService;
    private readonly randomService;
    private readonly examineeService;
    private readonly examConfigService;
    constructor(examRepository: Repository<Exam>, treePersonService: TreePersonService, studentsService: StudentsService, paperExamService: PaperExamService, paperBigQuestionService: PaperBigQuestionService, smokeService: SmokeStrategyService, randomService: QuestionSelectionStrategyService, examineeService: ExamineeFillMessageService, examConfigService: ExamConfigService);
    create(body: any): Promise<{
        code: number;
        exam: Exam;
    }>;
    getThisExamMessage(id: string): Promise<Exam>;
    updateThisExamMessage(body: any): Promise<Exam>;
    getExamList(query: any): Promise<[Exam[], number]>;
    getExamById(id: any): Promise<Exam>;
    changeCurrentExamType(body: any): Promise<void>;
    getExamStateCount(): Promise<{
        running: number;
        willRun: number;
        runed: number;
    }>;
    setStarExam(body: any): Promise<any>;
    cancelStarExam(body: any): Promise<any>;
    removeToRecycleBin(examId: any): Promise<any>;
    removeOutRecycleBin(examId: any): Promise<any>;
    deleteExamInRecycleBin(examId: any): Promise<any>;
    saveExamTimeConfig(body: any): Promise<Exam>;
    saveAnswerTimeConfig(body: any): Promise<Exam>;
    answerTimesRequire(body: any): Promise<Exam>;
    optionsGetScore(body: any): Promise<void>;
    saveExamconfigRequire(body: any): Promise<string>;
    createExamManager(exam: any, config: any, manager: any): Promise<void>;
    getExamConfigSettings(id: any): Promise<any>;
    dataProcess(data: any): any;
    saveManagerExamRelations(select: any, examId: any): Promise<void>;
    paperModeConfig(body: any): Promise<void>;
    gradeConfigRequire(body: any): Promise<void>;
    examRelationsConfig(body: any): Promise<void>;
    answerEquipmentConfig(body: any): Promise<void>;
    saveAntiCheatingConfig(body: any): Promise<void>;
    saveTestConfig(body: any): Promise<void>;
    examCopy(body: any, newExam: any, examineeFullMessageService: any, examConfigService: any): Promise<{
        msg: string;
    }>;
    getId(array: any): Promise<any[]>;
    getExamFullMessage(examId: any): Promise<any>;
    updateExamMessage(body: any): Promise<any>;
    ExamInRecycleBinAll(): Promise<Exam[]>;
    deleteExamInRecycleBinAll(): Promise<Exam[]>;
    getQuestion(id: string): Promise<Exam>;
    setIsPublish(examId: string): Promise<{
        msg: string;
    }>;
    saveQrcode(body: any): Promise<string>;
}
