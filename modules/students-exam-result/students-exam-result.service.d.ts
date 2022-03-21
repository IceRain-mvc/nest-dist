import { Repository } from 'typeorm';
import { StudentsExamResult } from './students-exam-result.entity';
export declare class StudentsExamResultService {
    private StudentsExamResultRepository;
    constructor(StudentsExamResultRepository: Repository<StudentsExamResult>);
    create(body: any): Promise<StudentsExamResult[]>;
}
