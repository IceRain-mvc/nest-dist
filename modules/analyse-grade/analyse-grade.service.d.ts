import { Repository } from 'typeorm';
import { AnalyseGrade } from './analyse-grade.entity';
import { ExamService } from '@/modules/exam/exam.service';
import { Exam } from '@/modules/exam/exam.entity';
export declare class AnalyseGradeService {
    private readonly analyseGradeRepository;
    private readonly examService;
    constructor(analyseGradeRepository: Repository<AnalyseGrade>, examService: ExamService);
    create(body: any): Promise<AnalyseGrade[]>;
    getExamLists(parmas: any): Promise<[Exam[], number]>;
    getStudentExamList(parmas: any): Promise<any[]>;
    getExamList(query: any): Promise<[Exam[], number]>;
}
