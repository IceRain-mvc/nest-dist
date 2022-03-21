import { Repository } from 'typeorm';
import { Examine } from './examination.entity';
import { ExamService } from '@/modules/exam/exam.service';
import { StudentsMarkService } from '@/modules/student-mark/student-mark.service';
import { StudentsService } from '@/modules/students/students.service';
import { StudentsMark } from '@/modules/student-mark/student-mark.entity';
export declare class ExaminationService {
    private readonly examineRepository;
    private readonly examService;
    private readonly examMark;
    private readonly examStudent;
    constructor(examineRepository: Repository<Examine>, examService: ExamService, examMark: StudentsMarkService, examStudent: StudentsService);
    create(examBody: Partial<Examine>): Promise<{
        code: string;
        msg: string;
        list: Examine;
    }>;
    getAll(query: any): Promise<{
        code: string;
        msg: string;
        data?: Partial<[Examine[], number]>;
    }>;
    getExamLists(params: any): Promise<"" | {
        res: [import("../exam/exam.entity").Exam[], number];
        list: {
            msg: string;
            data?: [import("../students/students.entity").Students[]?, number?];
        };
    }>;
    getExamMulti(params: any): Promise<"" | [StudentsMark[], number]>;
    getStudentMark(params: any): Promise<void>;
}
