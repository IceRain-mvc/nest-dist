import { TestOptionsService } from './test-options.service';
import { TestOptions } from './test-options.entity';
export declare class TestOptionsController {
    private readonly testOptionsService;
    constructor(testOptionsService: TestOptionsService);
    create(body: any): Promise<TestOptions[]>;
    getAll(): Promise<TestOptions[]>;
}
