import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '@/modules/exercise/exercises/exercise.entity';
export declare class QuestionConfig {
    id: number;
    questionConfigTitle: string;
    exams: Exam[];
    exercises: Exercise[];
}
