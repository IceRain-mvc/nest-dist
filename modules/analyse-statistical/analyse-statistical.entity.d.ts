import { analyseBouncedPractice } from '@/modules/analyse-bounced-practice/analyse-bounced-practice.entity';
export declare class analyseStatistical {
    id: number;
    practiceStatistical: string;
    startTime: string;
    endTime: string;
    participateWay: string;
    PracticeType: string;
    participantsNumber: string;
    practiceNumber: string;
    AveragePracticeDuration: string;
    scoringAverage: string;
    accuracy: string;
    rateWrongTopic: string;
    Time: Date;
    phones: analyseBouncedPractice[];
}
