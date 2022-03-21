import { Exam } from '@/modules/exam/exam.entity';
import { Exercise } from '../exercise/exercises/exercise.entity';
export declare class ExamConfig {
    id: number;
    passingGrade: number;
    fullMarks: number;
    passingMessage: string;
    passingHref: string;
    noPassingMessage: string;
    noPassingHref: string;
    startDateTime: Date;
    endDateTime: Date;
    lateEntryTime: number;
    answerTime: number;
    allowSubmitTime: number;
    answerTimes: number;
    limitAnswerTimes: number;
    limitAnswerSeconds: number;
    errorAnswers: number;
    publishResultTime: Date;
    beforeFaceCertification: number;
    faceTimes: number;
    headPhone: string;
    timingCapturedTime: number;
    tapTimes: number;
    tapOutTime: number;
    noOperationTime: number;
    regressionGetResultAccount: number;
    integral: number;
    exam: Exam;
    exercise: Exercise;
}