import { ExamConfigRequire } from '@/modules/exam-config-require/exam-config-require.entity';
import { Repository } from 'typeorm';
export declare class ExamConfigRequireService {
    private readonly examConfigRequireRepository;
    constructor(examConfigRequireRepository: Repository<ExamConfigRequire>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: ExamConfigRequire;
    }>;
    getAll(): Promise<ExamConfigRequire[]>;
}
