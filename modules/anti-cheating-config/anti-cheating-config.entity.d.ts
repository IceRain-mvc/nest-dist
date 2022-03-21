import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class AntiCheatingConfig {
    antiCheatingId: number;
    antiCheatingTitle: string;
    antiCheatingDes: string;
    antiCheatingType: string;
    exams: Exam[];
    exercises: Exercise[];
}
