import { GradeConfig } from '@/modules/grade-config/grade-config.entity';
import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class GradeConfigRequire {
    id: number;
    gradeTitle: string;
    gradeConfig: GradeConfig;
    exams: Exam[];
    exercises: Exercise[];
}
