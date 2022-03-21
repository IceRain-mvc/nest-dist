import { Repository } from 'typeorm';
import { StudentsMark } from './student-mark.entity';
import { StudentsExamResultService } from '@/modules/students-exam-result/students-exam-result.service';
import { ExamService } from '@/modules/exam/exam.service';
import { PaperExamService } from '@/modules/paper-exam/paper-exam.service';
import { TestBankService } from '@/modules/testBank/testBank.service';
export declare class StudentsMarkService {
    private studentsMarkRepository;
    private studentsExamResultService;
    private readonly examService;
    private readonly paperExamService;
    private readonly testBankService;
    constructor(studentsMarkRepository: Repository<StudentsMark>, studentsExamResultService: StudentsExamResultService, examService: ExamService, paperExamService: PaperExamService, testBankService: TestBankService);
    create(body: any): Promise<{
        msg: string;
        state: boolean;
        id: string;
    } | {
        msg: string;
        state: boolean;
        id?: undefined;
    }>;
    getStudentMarkById(query: any): Promise<[StudentsMark[], number]>;
    findOneStudentMarkById(query: any): Promise<StudentsMark>;
}
