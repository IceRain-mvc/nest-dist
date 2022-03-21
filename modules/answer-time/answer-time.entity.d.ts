import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class AnswerTime {
    answerTimeId: number;
    answerTimeRequire: string;
    exams: Exam[];
    exercises: Exercise[];
}
