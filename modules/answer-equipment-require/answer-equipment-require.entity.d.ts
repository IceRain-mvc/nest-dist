import { AnswerEquipment } from '@/modules/answer-equipment/answer-equipment.entity';
import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class AnswerEquipmentRequire {
    id: number;
    requireTitle: string;
    answerEquipment: AnswerEquipment;
    exams: Exam[];
    exercises: Exercise[];
}
