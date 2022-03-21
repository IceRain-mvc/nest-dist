import { ExamTimeService } from '@/modules/exam-time/exam-time.service';
import { ExamTime } from './exam-time.entity';
export declare class ExamTimeController {
    private readonly examTimeService;
    constructor(examTimeService: ExamTimeService);
    create(body: any): Promise<{
        msg: string;
        result: ExamTime;
    }>;
    deleteOne(id: number): Promise<import("typeorm").DeleteResult | {
        msg: string;
    }>;
    putOne(body: any): Promise<import("typeorm").UpdateResult>;
    getAll(): Promise<any[]>;
    getOne(id: number): Promise<ExamTime>;
}
