import { Exam } from '@/modules/exam/exam.entity';
import { PaperModeRequire } from '@/modules/paper-mode-require/paper-mode-require.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class PaperMode {
    id: number;
    title: string;
    description: string;
    paperType: number;
    abstract: string;
    exams: Exam[];
    paperModeRequires: PaperModeRequire[];
    exercises: Exercise[];
}
