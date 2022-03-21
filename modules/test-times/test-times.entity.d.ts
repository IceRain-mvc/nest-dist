import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class TestTimes {
    id: number;
    testTimesRequire: string;
    exams: Exam[];
    exercises: Exercise[];
}
