import { analyseBouncedExaminees } from '@/modules/analyse-bounced-examinee/analyse-bounced-examinee.entity';
export declare class Examine {
    id: number;
    authName: string;
    Participation: string;
    types: string;
    participants: string;
    exercises: string;
    Average: string;
    Scoring: string;
    Correct: string;
    errors: string;
    Lowest: string;
    startTime: string;
    endTime: string;
    Time: Date;
    phones: analyseBouncedExaminees[];
}
