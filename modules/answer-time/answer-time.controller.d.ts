import { AnswerTimeService } from '@/modules/answer-time/answer-time.service';
import { AnswerTime } from './answer-time.entity';
export declare class AnswerTimeController {
    private readonly answerTimeService;
    constructor(answerTimeService: AnswerTimeService);
    getAll(): Promise<any[]>;
    create(body: any): Promise<{
        msg: string;
        result: AnswerTime;
    }>;
    deleTextTime(answerTimeId: any): Promise<any>;
    update(body: any): Promise<void>;
}
