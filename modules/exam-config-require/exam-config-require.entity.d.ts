import { Exam } from '../exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class ExamConfigRequire {
    id: number;
    title: string;
    exams: Exam[];
    exercises: Exercise[];
}
