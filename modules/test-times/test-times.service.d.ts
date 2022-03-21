import { TestTimes } from '@/modules/test-times/test-times.entity';
import { Repository } from 'typeorm';
export declare class TestTimesService {
    private readonly testTimesRepository;
    constructor(testTimesRepository: Repository<TestTimes>);
    run(): Promise<{
        msg: string;
    }>;
    create(body: any): Promise<{
        msg: string;
        result: TestTimes;
    }>;
    getAll(): Promise<TestTimes[]>;
}
