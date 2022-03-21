import { AnswerEquipmentRequire } from '@/modules/answer-equipment-require/answer-equipment-require.entity';
import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class AnswerEquipment {
    id: number;
    title: string;
    answerEquipmentRequires: AnswerEquipmentRequire[];
    exams: Exam[];
    exercises: Exercise[];
}
