import { StudentsMark } from '@/modules/student-mark/student-mark.entity';
export declare class StudentsExamResult {
    id: string;
    testBankId: string;
    optional?: string;
    standardAnswer?: string;
    studentScore?: string;
    testScores?: string;
    isPass?: string;
    studentsExamResultItem: StudentsMark;
}
