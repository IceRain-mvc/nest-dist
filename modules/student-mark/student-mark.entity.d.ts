import { StudentsExamResult } from '@/modules/students-exam-result/students-exam-result.entity';
import { Exam } from '@/modules/exam/exam.entity';
export declare class StudentsMark {
    id: string;
    studentId: string;
    examId: string;
    examName: string;
    startTime?: string;
    endTime?: string;
    grade?: string;
    isPass?: string;
    examination?: string;
    accuracy?: string;
    status?: string;
    theIntegral?: string;
    testRanking?: string;
    beatTheNumber?: string;
    beatRate?: string;
    studentsExamResultList: StudentsExamResult;
    createTime: Date;
    updateTime: Date;
    question: Exam;
}
