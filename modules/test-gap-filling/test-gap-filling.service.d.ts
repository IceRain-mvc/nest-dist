import { Repository } from 'typeorm';
import { TestGapFilling } from './test-gap-filling.entity';
export declare class TestGapFillingService {
    private readonly testGapFillingRepository;
    constructor(testGapFillingRepository: Repository<TestGapFilling>);
    create(body: any): Promise<Partial<TestGapFilling[]>>;
    getAll(): Promise<Partial<TestGapFilling[]>>;
}
