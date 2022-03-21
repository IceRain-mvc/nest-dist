import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class ExamineeFillMessage {
    examineeId: number;
    titleName: string;
    formatRequire: string;
    mandatory: number;
    optionsValue: string;
    exam: Exam;
    exercise: Exercise;
}
