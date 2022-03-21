import { ExaminationService } from './examination.service';
import { Examine } from './examination.entity';
export declare class ExaminationController {
    private readonly examService;
    constructor(examService: ExaminationService);
    create(examBody: any): Promise<{
        code: string;
        msg: string;
        list: Examine;
    }>;
    getAll(query: any): Promise<{
        code: string;
        msg: string;
        data?: [Examine[]?, number?];
    }>;
    findData(params: any): Promise<"" | {
        res: [import("../exam/exam.entity").Exam[], number];
        list: {
            msg: string;
            data?: [import("../students/students.entity").Students[]?, number?];
        };
    }>;
    getExamMulti(query: any): Promise<"" | [import("../student-mark/student-mark.entity").StudentsMark[], number]>;
    getStudentMark(query: any): Promise<void>;
}
