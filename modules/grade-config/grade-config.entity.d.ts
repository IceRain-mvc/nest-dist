import { GradeConfigRequire } from '@/modules/grade-config-require/grade-config-require.entity';
import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class GradeConfig {
    id: number;
    title: string;
    gradeConfigRequires: GradeConfigRequire[];
    exams: Exam[];
    exercises: Exercise[];
}
