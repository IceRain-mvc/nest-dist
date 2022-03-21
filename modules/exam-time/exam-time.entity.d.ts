import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class ExamTime {
    examTimeId: number;
    examTimeRequire: string;
    exams: Exam[];
    exercises: Exercise[];
}
