import { AnswerTime } from '@/modules/answer-time/answer-time.entity';
import { Repository } from 'typeorm';
export declare class AnswerTimeService {
    private readonly answerTimeRepository;
    constructor(answerTimeRepository: Repository<AnswerTime>);
    run(): Promise<{
        msg: string;
    }>;
    getAll(): Promise<AnswerTime[]>;
    create(body: any): Promise<{
        msg: string;
        result: AnswerTime;
    }>;
    addTextTime(body: any): Promise<AnswerTime[]>;
    deleteTextTime(answerTimeId: any): Promise<any>;
    update(body: any): Promise<void>;
}
