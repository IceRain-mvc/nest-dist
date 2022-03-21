import { Exam } from '@/modules/exam/exam.entity';
export declare class ParticipationWay {
    partId: number;
    partTitle: string;
    partDescription: string;
    partType: number;
    exams: Exam[];
}
