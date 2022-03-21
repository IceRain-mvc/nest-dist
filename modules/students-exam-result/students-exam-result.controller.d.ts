import { StudentsExamResultService } from './students-exam-result.service';
import { StudentsExamResult } from './students-exam-result.entity';
export declare class StudentsExamResultController {
    private readonly StudentsExamResultService;
    constructor(StudentsExamResultService: StudentsExamResultService);
    create(body: any): Promise<StudentsExamResult[]>;
}
