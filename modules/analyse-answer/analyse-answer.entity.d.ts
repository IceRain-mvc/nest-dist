import { AnalyseGrade } from '../analyse-grade/analyse-grade.entity';
export declare class AnalyseAnswer {
    id: number | string;
    al_exam_type: string;
    al_exam_content: string;
    al_exam_startTime: Date;
    al_exam_endTime: Date;
    al_exam_question_type: string;
    al_exam_question_classification: string;
    al_exam_question_difficulty: string;
    al_exam_answer: string;
    al_agrade: AnalyseGrade;
    al_student_question_num: number;
    al_student_error_num: number;
    al_student_error_probability: string;
    al_student_correct_num: number;
    al_student_correct_probability: string;
    al_student_score_probability: string;
}
