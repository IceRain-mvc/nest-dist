import { Exam } from '@/modules/exam/exam.entity';
import { PaperBigQuestion } from '@/modules/paper-big-question/paper-big-question.entity';
import { Exercise } from '@/modules/exercise/exercises/exercise.entity';
import { ExerBigChapter } from '@/modules/exercise/exercise-big-chapter/exercise-big-chapter.entity';
export declare class PaperExam {
    id: number;
    paperType: number;
    paperTitle: string;
    questionCount: number;
    fullMarks: number;
    seted: number;
    createTime: Date;
    updateTime: Date;
    exam: Exam;
    exercise: Exercise;
    paperBigQuestions: PaperBigQuestion[];
    exerBigChapters: ExerBigChapter[];
}
