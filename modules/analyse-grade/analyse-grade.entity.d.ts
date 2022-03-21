import { AnalyseAnswer } from '../analyse-answer/analyse-answer.entity';
import { Analysestudentanalyse } from '@/modules/analyse-student-analyse/analyse-student-analyse.entity';
export declare class AnalyseGrade {
    id: number | string;
    al_classification: string;
    al_exam_Name: string;
    al_exam_time: string;
    al_exam_start_time: Date;
    al_exam_end_time: Date;
    al_paper_type: string;
    al_test_questions_number: number;
    al_student_answer_number: number;
    al_test_all_correct: string;
    al_test_objective_correct: string;
    al_test_subjective_correct: string;
    al_test_all_wrong: string;
    al_test_objective_wrong: string;
    al_test_subjective_wrong: string;
    al_test_all_score: string;
    al_test_objective_score: string;
    al_test_subjective_score: string;
    agrade: AnalyseAnswer;
    al_answer: AnalyseAnswer[];
    analysestudentanalyses: Analysestudentanalyse[];
}
