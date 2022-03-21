import { AnalyseStudentAnalyseService } from './analyse-student-analyse.service';
import { Analysestudentanalyse } from './analyse-student-analyse.entity';
export declare class AnalyseStudentAnalyseController {
    private readonly analyseStudentAnalyseService;
    constructor(analyseStudentAnalyseService: AnalyseStudentAnalyseService);
    create(body: any): Promise<{
        code: string;
        msg: string;
        data: Promise<Analysestudentanalyse>;
    }>;
    getStudent(query: any): Promise<any[]>;
    getStudentExam(query: any): Promise<import("../student-mark/student-mark.entity").StudentsMark[]>;
    getStudentCourse(query: any): Promise<import("../students-course/students-course.entity").StudentsCourse[]>;
}
