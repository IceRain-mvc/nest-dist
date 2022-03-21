import { Analysestudentanalyse } from './analyse-student-analyse.entity';
import { StudentsService } from '@/modules/students/students.service';
import { StudentsMark } from '@/modules/student-mark/student-mark.entity';
import { StudentsCourse } from '@/modules/students-course/students-course.entity';
import { Repository } from 'typeorm';
export declare class AnalyseStudentAnalyseService {
    private readonly analysestudentanalyse;
    private readonly studentsService;
    constructor(analysestudentanalyse: Repository<Analysestudentanalyse>, studentsService: StudentsService);
    create(body: Partial<Analysestudentanalyse>): Promise<{
        code: string;
        msg: string;
        data: Promise<Analysestudentanalyse>;
    }>;
    getStudent(query: any): Promise<any[]>;
    getStudentCourse(query: any): Promise<StudentsCourse[]>;
    getStudentExam(query: any): Promise<StudentsMark[]>;
}
