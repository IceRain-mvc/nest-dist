import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class GetScoreConfig {
    getScoreId: number;
    getScoreRequire: string;
    getScoreDes: string;
    exams: Exam[];
    exercises: Exercise[];
}
