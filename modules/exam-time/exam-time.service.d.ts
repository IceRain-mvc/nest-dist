import { ExamTime } from '@/modules/exam-time/exam-time.entity';
import { Repository } from 'typeorm';
export declare class ExamTimeService {
    private readonly examTimeRepository;
    constructor(examTimeRepository: Repository<ExamTime>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: ExamTime;
    }>;
    deleteOne(id: any): Promise<import("typeorm").DeleteResult | {
        msg: string;
    }>;
    putOne(body: any): Promise<import("typeorm").UpdateResult>;
    getAll(): Promise<ExamTime[]>;
    getOne(id: any): Promise<ExamTime>;
}
