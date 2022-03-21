import { PaperMode } from '@/modules/paper-mode/paper-mode.entity';
import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class PaperModeRequire {
    id: number;
    require: string;
    requireDescription: string;
    value: string;
    paperMode: PaperMode;
    exams: Exam[];
    exercises: Exercise[];
}
