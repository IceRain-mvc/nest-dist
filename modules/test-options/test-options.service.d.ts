import { Repository } from 'typeorm';
import { TestOptions } from './test-options.entity';
export declare class TestOptionsService {
    private readonly testOptionsRepository;
    constructor(testOptionsRepository: Repository<TestOptions>);
    create(body: any): Promise<Partial<TestOptions[]>>;
    getAll(): Promise<Partial<TestOptions[]>>;
}
